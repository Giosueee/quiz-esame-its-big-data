#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""QA / diagnostica bias item-writing sul question bank.
Uso: python3 qa.py questions.json  [--examples]
Analizza SOLO le domande a risposta singola per le metriche 'corretta vs distrattori'
(le multi-risposta sono contate a parte). Emette numeri per Fase 1 (baseline) e Fase 7 (finale).
"""
import json, sys, re, unicodedata
from collections import Counter

PATH = sys.argv[1]
SHOW = "--examples" in sys.argv
data = json.load(open(PATH, encoding="utf-8"))

STOP = set("""a al allo ai agli alla alle all e ed o oppure ma se come che chi cui non ne di del dello dei degli
della delle da dal dallo dai dagli dalla dalle in nel nello nei negli nella nelle con col coi su sul sullo sui
sugli sulla sulle per tra fra il lo la i gli le un uno una uno lui lei noi voi loro si me te ci vi mi ti
questo questa questi queste quello quella quelli quelle suo sua sui piu piu' più meno molto poco anche pure
essere sono e' è sia siano viene vengono usato usata usati usate quando dove quale quali cosa quanto ha hanno
al fine seguente seguenti stesso stessa stessi stesse ogni its uno' quindi qual """.split())

ABSOLUTES = ["sempre","mai","tutti","tutte","nessun","nessuno","nessuna","solo","soltanto","unicamente",
             "esclusivamente","qualsiasi","qualunque","ogni","alcun","obbligatoriamente","necessariamente",
             "always","never","all","none","only","every"]

def strip_acc(s):
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")

def words(s):
    s = strip_acc(s.lower())
    toks = re.findall(r"[a-z0-9_]+", s)
    return [t for t in toks if t not in STOP and len(t) > 2]

def stems(wordlist):
    # radice grezza: taglia suffissi flessivi comuni ita per catturare "eco" morfologica
    out = set()
    for w in wordlist:
        for suf in ("zioni","zione","mento","menti","are","ere","ire","ato","ata","ati","ate","ando","endo",
                    "ita","ità","ico","ica","ici","iche","oso","osa","osi","ose","i","e","a","o"):
            if len(w) - len(suf) >= 4 and w.endswith(suf):
                w = w[:-len(suf)]; break
        out.add(w)
    return out

single = [q for q in data if len(q["correct"]) == 1]
multi  = [q for q in data if len(q["correct"]) != 1]

# ---- metriche ----
len_correct, len_distr = [], []
longest_is_correct = 0
shortest_is_correct = 0
margin_when_longest = []
paren_correct_only = 0
paren_any = 0
echo_correct = 0            # corretta condivide >=1 stem con lo stem, che NESSUN distrattore condivide
overlap_correct, overlap_distr = [], []
abs_in_correct = 0
abs_in_distr = 0
pos_counter = Counter()
rank_counter = Counter()   # rank di LUNGHEZZA della corretta: shortest / medium / longest
weak_offtopic = 0          # >=1 distrattore con 0 overlap col resto (proxy 'fuori tema')
examples = {k: [] for k in ["length","paren","echo","offtopic","absolute"]}

for q in single:
    opts = q["opts"]; ci = q["correct"][0]
    if ci >= len(opts):
        continue
    correct = opts[ci]
    distr = [o for j, o in enumerate(opts) if j != ci]
    Lc = len(correct); Ld = [len(d) for d in distr]
    len_correct.append(Lc); len_distr.extend(Ld)
    longest = max(range(len(opts)), key=lambda j: len(opts[j]))
    shortest = min(range(len(opts)), key=lambda j: len(opts[j]))
    if longest == ci:
        longest_is_correct += 1
        margin_when_longest.append(Lc - max(Ld))
    if shortest == ci:
        shortest_is_correct += 1
    n_longer = sum(1 for x in Ld if x > Lc)
    n_shorter = sum(1 for x in Ld if x < Lc)
    if n_longer == 0:      rank_counter["longest"] += 1
    elif n_shorter == 0:   rank_counter["shortest"] += 1
    else:                  rank_counter["medium"] += 1
    # parentesi
    cpar = "(" in correct
    dpar = any("(" in d for d in distr)
    if cpar and not dpar:
        paren_correct_only += 1
        if len(examples["paren"]) < 6: examples["paren"].append(q)
    if cpar or dpar: paren_any += 1
    # eco lessicale
    sstem = stems(words(q["q"]))
    cstem = stems(words(correct))
    dstems = [stems(words(d)) for d in distr]
    c_shared = (cstem & sstem)
    d_shared_union = set().union(*dstems) & sstem if dstems else set()
    exclusive_echo = c_shared - d_shared_union
    if exclusive_echo:
        echo_correct += 1
        if len(examples["echo"]) < 6: examples["echo"].append((q, sorted(exclusive_echo)))
    overlap_correct.append(len(c_shared))
    overlap_distr.extend(len(x & sstem) for x in dstems)
    # fuori tema: distrattore che non condivide NIENTE con stem NÉ con la corretta
    cwords = set(words(correct))
    for d, ds in zip(distr, dstems):
        if len(set(words(d)) & (set(words(q["q"])) | cwords)) == 0:
            weak_offtopic += 1
            if len(examples["offtopic"]) < 8: examples["offtopic"].append((q, d))
            break
    # assoluti
    def has_abs(t):
        tl = strip_acc(t.lower())
        return any(re.search(r"\b"+re.escape(a)+r"\b", tl) for a in ABSOLUTES)
    if has_abs(correct): abs_in_correct += 1
    if any(has_abs(d) for d in distr): abs_in_distr += 1
    # posizione (lettera)
    pos_counter[chr(65+ci)] += 1
    # esempio lunghezza
    if longest == ci and (Lc - max(Ld)) > 25 and len(examples["length"]) < 6:
        examples["length"].append(q)

def stat(xs):
    n=len(xs); m=sum(xs)/n if n else 0
    sd=(sum((x-m)**2 for x in xs)/n)**.5 if n else 0
    return m, sd

n = len(single)
mc, sdc = stat(len_correct); md, sdd = stat(len_distr)
oc, _ = stat(overlap_correct); od, _ = stat(overlap_distr)

print("="*68)
print(f"DATASET: {len(data)} domande | risposta singola: {n} | multi-risposta: {len(multi)}")
print("="*68)
print("\n[1] LUNGHEZZA opzioni (caratteri)")
print(f"  corretta:   media {mc:5.1f}  sd {sdc:4.1f}")
print(f"  distrattori: media {md:5.1f}  sd {sdd:4.1f}")
print(f"  corretta e' la PIU' LUNGA: {longest_is_correct}/{n} = {100*longest_is_correct/n:4.1f}%  (atteso ~25%)")
print(f"  corretta e' la PIU' CORTA: {shortest_is_correct}/{n} = {100*shortest_is_correct/n:4.1f}%  (atteso ~25%)")
if margin_when_longest:
    mm,_=stat(margin_when_longest)
    print(f"  quando e' la piu' lunga, margine medio sul 2o: {mm:.1f} caratteri")

print("\n[1b] RANK DI LUNGHEZZA della corretta (target ~33% ciascuno)")
tr = sum(rank_counter.values())
for k in ("shortest","medium","longest"):
    v = rank_counter.get(k,0)
    print(f"  corretta = {k:8s}: {v:4d} = {100*v/tr:4.1f}%")

print("\n[2] PARENTESI")
print(f"  corretta con '(...)' e nessun distrattore: {paren_correct_only}/{n} = {100*paren_correct_only/n:4.1f}%")

print("\n[3] ECO LESSICALE (stem condivisi con la domanda)")
print(f"  overlap medio stem<->corretta:    {oc:.3f}")
print(f"  overlap medio stem<->distrattori: {od:.3f}")
print(f"  corretta con eco ESCLUSIVA (stem in comune con domanda che nessun distrattore ha): {echo_correct}/{n} = {100*echo_correct/n:4.1f}%")

print("\n[4] DISTRATTORI FUORI TEMA (proxy: 0 parole in comune con domanda+corretta)")
print(f"  domande con >=1 distrattore fuori tema: {weak_offtopic}/{n} = {100*weak_offtopic/n:4.1f}%")

print("\n[5] TERMINI ASSOLUTI (sempre/mai/solo/tutti/nessuno...)")
print(f"  presenti nella corretta:    {abs_in_correct}/{n} = {100*abs_in_correct/n:4.1f}%")
print(f"  presenti in un distrattore: {abs_in_distr}/{n} = {100*abs_in_distr/n:4.1f}%")

print("\n[6] POSIZIONE risposta corretta (lettera)")
tot_pos = sum(pos_counter.values())
for k in sorted(pos_counter):
    print(f"  {k}: {pos_counter[k]:4d} = {100*pos_counter[k]/tot_pos:4.1f}%")

if SHOW:
    def fmt(q):
        ci=q["correct"][0]
        s=f"    [{q['id']} {q['subject']}] {q['q'][:90]}\n"
        for j,o in enumerate(q["opts"]):
            mark=" <=OK" if j==ci else ""
            s+=f"       {chr(65+j)}) {o}{mark}\n"
        return s
    print("\n"+"="*68+"\nESEMPI\n"+"="*68)
    print("\n-- Bias LUNGHEZZA (corretta piu' lunga, margine >25) --")
    for q in examples["length"][:4]: print(fmt(q))
    print("\n-- Bias PARENTESI --")
    for q in examples["paren"][:4]: print(fmt(q))
    print("\n-- ECO LESSICALE --")
    for q,ex in examples["echo"][:4]: print(f"    (stem in eco: {ex})"); print(fmt(q))
    print("\n-- DISTRATTORE FUORI TEMA --")
    for q,d in examples["offtopic"][:5]: print(f"    (fuori tema: \"{d}\")"); print(fmt(q))

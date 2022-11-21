---
title: "Сокращения (abbreviations) в Pandoc"
date: "2021-09-01"
categories: 
  - "Программы"
tags: 
  - "pandoc"
---

# {{ $frontmatter.title }}

Pandoc позволяет автоматически добавлять неразрывные пробелы после сокращений. Список стандартных сокращений выводиться командой

```
pandoc --print-default-data-file=abbreviations
```

Вот этот список:

```
aet.
aetat.
al.
Apr.
Aug.
bk.
Bros.
c.
Capt.
cf.
ch.
chap.
chs.
Co.
col.
Corp.
cp.
d.
Dec.
Dr.
e.g.
ed.
eds.
esp.
f.
fasc.
Feb.
ff.
fig.
fl.
fol.
fols.
Fr.
Gen.
Gov.
Hon.
i.e.
ill.
Inc.
incl.
Jan.
Jr.
Jul.
Jun.
Ltd.
M.A.
M.D.
Mar.
Mr.
Mrs.
Ms.
n.
n.b.
nn.
No.
Nov.
Oct.
p.
Ph.D.
pp.
Pres.
Prof.
pt.
q.v.
Rep.
Rev.
s.v.
s.vv.
saec.
sec.
Sen.
Sep.
Sept.
Sgt.
Sr.
St.
univ.
viz.
vol.
vs.
```

Попробуем конвертировать файл

```
# Hello

## Text 1

Dr. Smith and his son... Dr. Smith and his son... Dr. Smith and his son... Dr. Smith and his son... Dr. Smith and his son... Dr. Smith and his son... Dr. Smith and his son... Dr. Smith and his son...

## Текст 2

тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924, тел. 438924.
```

командой

```
pandoc -o output.html -f markdown -t html -s input01.md
```

В результате, можно заметить что "Dr." никогда не остаётся в конце строки, без следующего слова. А вот "тел." остаётся.

![Пример неразрывного пробела при использовании сокращений](images/pandoc_abbr01.png)

Попробуем подключить свой файл сокращений командой `--abbreviations=`:

```
pandoc -o output.html -f markdown -t html -s --abbreviations=abbreviations.txt input01.md
```

Файл `abbreviations.txt` содержит одно сокращение

```
тел.
```

Теперь картина обратная, после "тел." строка не разрывается, а вот после "Dr." может быть перенос:

![Пример неразрывного пробела при использовании сокращений](images/pandoc_abbr02.png)

## Ссылки

- [Шаблоны Pandoc](https://pandoc.org/MANUAL.html)
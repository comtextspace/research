---
title: "Способы добавления метаданных в документ Pandoc"
date: "2021-01-18"
categories: 
  - "Программы"
tags: 
  - "pandoc"
---

# {{ $frontmatter.title }}

Pandoc позволяет добавить метеоданные к документу несколькими способами:

1. Консольные параметры при запуске;
2. YAML блок;
3. Файл с метаданными.

Эти три способа могут применяться одновременно. В этом случае параметры будут перетирать друг друга на основе их приоритета. У файла с метаданными самый низкий приоритет, затем идет YAML-блок и самый высокий приоритет у параметров при запуске Pandoc.

## Файл с метаданными

Пример файла с метаданными в формате [YAML](https://ru.wikipedia.org/wiki/YAML) `metadata.yaml`:

```
title: Заголовок metadata-file
```

Имя файла передаётся в параметре `--metadata-file` при запуске Pandoc:

```
pandoc -o output.html -f markdown -t html -s --metadata-file=metadata.yaml input01.md
```

После запуска в документе появится html заголовок `h1`, хотя в Markdown-документе не было заголовка первого уровня.

## YAML-блок

YAML-блок находится вначале исходного Markdown-файла:

```
---
title: Заголовок YAML-блок
---
```

Команда запуска не меняется:

```
pandoc -o output.html -f markdown -t html -s --metadata-file=metadata.yaml input02.md
```

Заголовок будет выведен из YAML-блока в Markdown-файле, а не из отдельного файла метаданных.

## Параметры

Метаданные указанные в параметрах запуска Pandoc, более приоритетные, чем YAML блок и файл метаданных. Для передачи параметров используются конструкции:

- `-M KEY[=VAL]`
- `--metadata=KEY[:VAL]`

Например

```
pandoc -o output.html -f markdown -t html -s --metadata-file=metadata.yaml -M "title=Заголовок параметры" input01.md
```

## Ссылки

- [Pandoc Manual](https://pandoc.org/MANUAL.html)

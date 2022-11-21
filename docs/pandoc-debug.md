---
title: "Отладка ошибок конвертации в Pandoc"
date: "2021-01-04"
categories: 
  - "Программы"
tags: 
  - "pandoc"
---

# {{ $frontmatter.title }}

Рассмотрим способы получения информации об ошибка при конвертации файлов через [Pandoc](https://pandoc.org/).

Попробуем конвертировать md-файл в html:

```bat
pandoc input01.md -f markdown -t html -s -o output.html
```

Появляется предупреждение:

```
[WARNING] This document format requires a nonempty <title> element.
  Defaulting to 'input01' as the title.
  To specify a title, use 'title' in metadata or --metadata title="...".
```

Файл всё равно будет конвертирован. Причем `pandoc` завершит работу без кода ошибки. Если нужно чтобы в случае предупреждения код ошибки был не равен 0, то используйте команду `--fail-if-warnings`:

```bat
pandoc input01.md --fail-if-warnings -f markdown -t html -s -o output.html

echo %errorlevel%
```

Результатом будет:

```
[WARNING] This document format requires a nonempty <title> element.
  Defaulting to 'input01' as the title.
  To specify a title, use 'title' in metadata or --metadata title="...".
Failing because there were warnings.

echo 3
3
```

Код ошибки 3 — [специальный код ошибки](https://pandoc.org/MANUAL.html#exit-codes) для предупреждений.

Параметр `--quiet` скрывает предупреждения:

```bat
pandoc input01.md --quiet -f markdown -t html -s -o output.html
```

Параметры `--fail-if-warnings` и `--quiet` могут работать одновременно: предупреждения не будут выводится, но код ошибки изменится.

Для более детального вывода испольуйте параметр `--verbose`:

```bat
pandoc input01.md --verbose -f markdown -t html -s -o output.html
```

Дополнительно будут выведены информационные сообщения:

```
[INFO] No value for 'lang' was specified in the metadata.
  It is recommended that lang be specified for this format.
[WARNING] This document format requires a nonempty <title> element.
  Defaulting to 'input01' as the title.
  To specify a title, use 'title' in metadata or --metadata title="...".
```

Детальный вывод особенно полезен при отладке конвертации в PDF.

Все виды сообщений можно дополнительно вывести в файл. Имя файла задаётся параметром `--log=FILE_NAME`:

```bat
pandoc input01.md --verbose --log=log.txt -f markdown -t html -s -o output.html
```

Файл будет содержать данные в JSON:

```json
[
    {
        "type": "NoLangSpecified",
        "verbosity": "INFO"
    },
    {
        "type": "NoTitleElement",
        "verbosity": "WARNING",
        "fallback": "input01"
    }
]
```

## Ссылки

- [Pandoc manual](https://pandoc.org/MANUAL.html)

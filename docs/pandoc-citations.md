---
title: "Pandoc. Оформление цитат и библиографии"
date: "2022-12-06"
categories: 
  - "Программы"
tags: 
  - "pandoc"
---

# {{ $frontmatter.title }}

Pandoc может оформлять цитаты и ссылки на библиографию с использованием Citations Style Language. Режим автоматической обработки библиографии включается опцией `--citeproc` (`-C`). 

Для добавления ссылок на библиографию нужны три действия:

* Разметить цитаты в документе
* Подготовить файл с библиографическими данными
* Выбрать CSL-стиль

## Разметка цитат

Для ссылки не элемент библиографии используются квадратные скобки и следующий синтаксис:

```text
Blah blah [@doe99; @smith2000; @smith2004].
```

Часть после символа `@` — идентификатор библиографической записи из файла с библиографией. Точка с запятой отделяют несколько элементов в одной ссылке.

Способ отображения такой ссылки будет зависеть от CSL-стиля. При использовании стиля автор-дата ссылка будет выглядеть так:

```
Blah blah (Doe 1999, Smith 2000, 2004).
```

А в стиле с примечаниями так:

```
Blah blah.[^1]

[^1]:  John Doe, "Frogs," *Journal of Amphibians* 44 (1999); Susan Smith, "Flies," *Journal of Insects* (2000); Susan Smith, "Bees," *Journal of Insects* (2004).
```

Дополнительно, в квадратных скобках может быть указан префикс, локатор и суффикс:

```
[смотри @adlerKakChitatKnigi2020 стр. 4 и другие книги автора]
```

* `смотри` — префикс
* `стр. 4` — локатор
* `и другие книги автора` — суффикс

Локатор используется для указания страниц, глав или других элементов книги. Локатор приводится к виду указанному в файле со стилем с использованием файлов локализации. Файлы локализации нужны, так как для разных языков может быть разных набор локаторов, например, могут использоваться `стр.` для русского языка и `page` для английского. Префикс и суффикс указывают произвольную дополнительную информацию.

Такая ссылка может быть преобразована в такой вид:

```
[смотри Адлер, 2020, с. 4 и другие книги автора]
```

## Библиографические данные

Библиографические данные — список книги или других материалов на которых даны ссылки в документе. Библиографические данные можно предоставить через поле `bibliography` в [метеоданных](pandoc-metadata.md) или через файл переданный в опции `--bibliography` при запуске Pandoc.

Поддерживается несколько форматов

| Формат   | Расширение файла |
| -------- | ---------------- |
| BibLaTeX | .bib             |
| BibTeX   | .bibtex          |
| CSL JSON | .json            |
| CSL YAML | .yaml            |
| RIS      | .ris             |

Пример файла с библиографией в CLS JSON:

```json
[
    {
        "id": "adlerKakChitatKnigi2020",
        "type": "book",
        "publisher": "МИФ",
        "title": "Как читать книги",
        "author": [
            {
                "family": "Адлер",
                "given": "Мортимер"
            }
        ],
        "issued": {
            "date-parts": [
                [
                    "2020"
                ]
            ]
        }
    },
    {
        "id": "engelsLyudvigFeyerbahKonec1888",
        "type": "book",
        "title": "Людвиг Фейербах и конец классической немецкой философии",
        "author": [
            {
                "family": "Энгельс",
                "given": "Фридрих"
            }
        ],
        "issued": {
            "date-parts": [
                [
                    "1888"
                ]
            ]
        }
    }
]
```

Идентификаторы книг в этом формате задаются в полях `id` объектов:

```
"id": "adlerKakChitatKnigi2020",
...
"id": "engelsLyudvigFeyerbahKonec1888",
```

Команда для запуска pandoc с использованием файла с библиографией:

## Файл со стилем CSL

Способ форматирования цитат определяется файлом CSL-стиля. Файл задаётся опцией `--csl`. Если файл не указать, то используется стиль по умочанию [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html) (author-date format). 

Для примера рассмотрим три стиля из [репозитория стилей](https://github.com/citation-style-language/styles):

* `gost-r-7-0-5-2008.csl`
* `gost-r-7-0-5-2008-numeric.csl`
* `gost-r-7-0-5-2008-numeric-alphabetical.csl`

Исходный файл `book.md`:

```md
# Lorem ipsum

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque.[@engelsLyudvigFeyerbahKonec1888]

Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Pretium quam vulputate dignissim suspendisse in est ante [@adlerKakChitatKnigi2020]. Nisl tincidunt eget nullam non nisi est sit. Viverra justo nec ultrices dui. Dui id ornare arcu odio ut sem nulla pharetra [смотри @adlerKakChitatKnigi2020 стр. 4 и другие книги автора]. Morbi tempus iaculis urna id volutpat lacus laoreet non. Hac habitasse platea dictumst quisque sagittis purus sit amet.

## Библиография
```

Команды для запуска pandoc:

```bash
pandoc book.md --citeproc -s -o book1.rtf --bibliography=bib.json --csl=gost-r-7-0-5-2008.csl

pandoc book.md --citeproc -s -o book2.rtf --bibliography=bib.json --csl=gost-r-7-0-5-2008-numeric.csl

pandoc book.md --citeproc -s -o book3.rtf --bibliography=bib.json --csl=gost-r-7-0-5-2008-numeric-alphabetical.csl
```

Получаем три варианта отображения библиографии.

![Пример стиля gost-r-7-0-5-2008.csl](/images/pandoc/pandoc_citeproc_01.png)

![Пример стиля gost-r-7-0-5-2008-numeric.csl](/images/pandoc/pandoc_citeproc_02.png)

![Пример стиля gost-r-7-0-5-2008-numeric-alphabetical.csl](/images/pandoc/pandoc_citeproc_03.png)

## Ссылки

- [Pandoc — Pandoc User’s Guide — Citations](https://pandoc.org/MANUAL.html#citations)
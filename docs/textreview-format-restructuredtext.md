---
title: "Форматы: reStructuredText"
date: "2024-11-22"
categories:
  - "Текстология"
tags:
  - "reStructuredText"
---

# {{ $frontmatter.title }}

**22.11.2024**

[reStructuredText](https://docutils.sourceforge.io/rst.html) — облегченный язык разметки, используется, в основном для написания технической документации, является составной частью написанного на Python набора программ [Docutils](https://docutils.sourceforge.io/index.html).

[[TOC]]

## Ссылки

* [reStructuredText Markup Specification](https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html)
* [Wikipedia — reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText)
* [Quick reStructuredText](https://docutils.sourceforge.io/docs/user/rst/quickref.html)
* [Песочница reStructuredText](https://waldyrious.net/rst-playground/)

## Абзацы

Абзацы разделяются пустыми строками. Внутри абзаца могут быть переводы строки, они интерпретируются как пробелы (без принудительного перевода строки).

```rest
This is a paragraph.

Paragraphs line up at their left
edges, and are normally separated
by blank lines.
```

## Списки

Элементы списков могут состоять из нескольких абзацев.

```rest
- This is the first bullet list item.  The blank line above the
  first list item is required; blank lines between list items
  (such as below this paragraph) are optional.

- This is the first paragraph in the second item in the list.

  This is the second paragraph in the second item in the list.
  The blank line above this paragraph is required.  The left edge
  of this paragraph lines up with the paragraph above, both
  indented relative to the bullet.

  - This is a sublist.  The bullet lines up with the left edge of
    the text blocks above.  A sublist is a new list so requires a
    blank line above and below.

- This is the third item of the main list.

This paragraph is not part of the list.
```

Такая же структура отступов и в других элементах применяется для того чтобы оформлять вложенные структуры.

Нумерованные списки поддерживают множество различных видов нумерации:

> suffixed with a period: "1.", "A.", "a.", "I.", "i.".
> surrounded by parentheses: "(1)", "(A)", "(a)", "(I)", "(i)".
> suffixed with a right-parenthesis: "1)", "A)", "a)", "I)", "i)".

## Список определений

Список определений так же может состоять из нескольких абзацев.

```rest
term 1
    Definition 1.

term 2
    Definition 2, paragraph 1.

    Definition 2, paragraph 2.

term 3 : classifier
    Definition 3.

term 4 : classifier one : classifier two
    Definition 4.
```

## Список полей

Примечательный элемент разметки. Применяется для добавления в документ метаинформации. В Markdown ту же роль выполняет [Frontmatter](https://jekyllrb.com/docs/front-matter/).

```rest
:Date: 2001-08-16
:Version: 1
:Authors: - Me
          - Myself
          - I
:Indentation: Since the field marker may be quite long, the second
   and subsequent lines of the field body do not have to line up
   with the first line, but they must be indented relative to the
   field name marker, and they must line up with each other.
:Parameter i: integer
```

## Блок без форматирования

Блок без форматирования — это блок следующий за параграфом оканчивающимся на `::`.

```rest
Paragraph:

::

    Literal block
```

Второй вариант:

```rest
Paragraph: ::

    Literal block
```

Здесь же пример синтаксической диаграммы, такие диаграммы используются в документации reStructuredText.

```rest
+------------------------------+
| paragraph                    |
| (ends with "::")             |
+------------------------------+
   +---------------------------+
   | indented literal block    |
   +---------------------------+
```

Похожий на блок без форматирования элемент, но выделенный отдельно: все строки начинаются с символа `|`. Подходит для форматирования стихов и песен.

```rest
| Lend us a couple of bob till Thursday.
| I'm absolutely skint.
| But I'm expecting a postal order and I can pay you back
  as soon as it comes.
| Love, Ewan.
```

```rest
Take it away, Eric the Orchestra Leader!

    | A one, two, a one two three four
    |
    | Half a bee, philosophically,
    |     must, *ipso facto*, half not be.
    | But half the bee has got to be,
    |     *vis a vis* its entity.  D'you see?
    |
    | But can a bee be said to be
    |     or not to be an entire bee,
    |         when half the bee is not a bee,
    |             due to some ancient injury?
    |
    | Singing...
```

## Цитаты

Цитаты выделяются отступом, без дополнительных спецсимволов. Автора цитаты можно указать под цитатой, используя `--`, `---` или `—`.

```rest
This is an ordinary paragraph, introducing a block quote.

    "It is my business to know things.  That is my trade."

    -- Sherlock Holmes
```

## Таблицы

Форматирование таблиц:

```rest
+--------------+----------+-----------+-----------+
| row 1, col 1 | column 2 | column 3  | column 4  |
+--------------+----------+-----------+-----------+
| row 2        |                                  |
+--------------+----------+-----------+-----------+
| row 3        |          |           |           |
+--------------+----------+-----------+-----------+
```

Есть упрощённый вариант

```rest
=====  =====  =======
  A      B    A and B
=====  =====  =======
False  False  False
True   False  False
False  True   False
True   True   True
=====  =====  =======
```

## Примечания

Для примечаний и некоторых других элементов используется особый блок: начало блока состоит из двух точек и пробела.

```rest
[#]_ is a reference to footnote 1, and [#]_ is a reference to
footnote 2.

.. [#] This is footnote 1.
.. [#] This is footnote 2.
.. [#] This is footnote 3.

[#]_ is a reference to footnote 3.
```

## Директивы

Директивы — механизм расширения формата, без добавления нового элемента синтаксиса.

```rest
+-------+-------------------------------+
| ".. " | directive type "::" directive |
+-------+ block                         |
        |                               |
        +-------------------------------+
```

Примеры директив:

```rest
.. figure:: larch.png

   The larch.
```

```rest
.. note:: This is a paragraph

   - Here is a bullet list.
```

Изображения являются директивой и [некоторые другие возможности](https://docutils.sourceforge.io/docs/ref/rst/directives.html) тоже реализованы через директивы.

```rest
.. image:: picture.jpeg
   :height: 100px
   :width: 200 px
   :scale: 50 %
   :loading: embed
   :alt: alternate text
   :align: right
```

## Итоги

Формат reStructuredText отлично проработан и формализован. Это не удивительно, так как он используется для документирования кода на Python и есть даже связанные с ним PEP ([PEP 258](https://peps.python.org/pep-0258/), [PEP 12](https://peps.python.org/pep-0012/)). Формат больше подходит для документации к программным продуктам, чем к обычным книгам, так как он не разрабатывался для форматирования книг. Не хватает элементов, например, эпиграфов, подписей к изображениям и других. Формат в большей степени ориентирован на чтение непосредственно в нём, когда он используется в исходном коде. Кроме этого, конечно, поддерживается конвертация документации в несколько форматов: HTML, Man Pages, LaTeX, ODF. Для других форматов можно использовать [pandoc](https://pandoc.org/).
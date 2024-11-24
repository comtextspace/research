---
title: "Форматы: AsciiDoc"
date: "2024-11-22"
categories:
  - "Текстология"
tags:
  - "AsciiDoc"
---

# {{ $frontmatter.title }}

**24.11.2024**

[AsciiDoc](https://asciidoc.org) — облегченный язык разметки, ориентирован, в первую очередь, на технические тексты. Формат имеет очень широкие возможности и [подробную документацию](https://docs.asciidoctor.org/asciidoc/latest/). Переписывать документацию не имеет смысла, поэтому далее будут отмечены только некоторые примечательные особенности формата.

[[TOC]]

## Ссылки

* [Asciidoctor](https://docs.asciidoctor.org/asciidoctor/latest/) — инструмент для конвертации AsciiDoc в другие форматы;
* [Awesome AsciiDoc](https://gitlab.eclipse.org/eclipse-wg/asciidoc-wg/asciidoc.org/-/blob/main/awesome-asciidoc.adoc);
* [AsciiDoc Syntax Quick Reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/);
* [Compare AsciiDoc to Markdown](https://docs.asciidoctor.org/asciidoc/latest/asciidoc-vs-markdown/).

## Блоки

Документ AsciiDoc состоит из блоков. Блоки бывают разных видов. Есть возможность указывать заголовок блока, идентификатор блока, стиль и атрибуты блока.

Самый простой блок — абзац. Такие блоки разделяются пустыми строками.

```asciidoc
Первый абзац.

Второй абзац.
```. [[step-1]]Dowинаются и заканчиваются специальной для каждого вида блока последовательностью символов, например:

```asciidoc
Text in your document.

****
This is content in a sidebar block.

This is more content in the sidebar block.
****
```

Заголовок блока — строка перед блоком, которая начинается с точки:

```asciidoc
.This is the title of a sidebar block
****
This is the content of the sidebar block.
****
```

Атрибуты блока задаются в квадратных скобках перед блоком:

```asciidoc
.Specify GitLab CI stages 
[source,yaml] 
----
image: node:16-buster
stages: [ init, verify, deploy ]
----
```

Допустимы сложные функции, такие как переопределение заголовка блока и автоматическая нумерация (например, «Пример 1», «Пример 2» и т. д.).

```asciidoc
.Block Title
[caption="Example {counter:my-example-number:A}: "]
====
Block content
====
```

Идентификатор блока устанавливается в квадратных скобках с использованием символа `#`:

```asciidoc
[#the-id-of-this-block]
====
Content of delimited example block
====
```

## Атрибуты

Формат имеет возможность установки аттрибутов как всему документу

```asciidoc
= My Document
:imagesdir: ./images
:iconsdir: ./icons
:stylesdir: ./styles
:scriptsdir: ./js
```

так и отдельным элементам, как блочным

```asciidoc
[#rules.prominent%incremental]
* Work hard
* Play hard
* Be happy
```

так и инлайновым

```asciidoc
[#idname.rolename]*text with id and role*
```

## Секции

Секции похожи на заголовки Markdown, но значительно более функциональны.

```asciidoc
= Document Title (Level 0)

== Level 1 Section Title

=== Level 2 Section Title

==== Level 3 Section Title

===== Level 4 Section Title

====== Level 5 Section Title

== Another Level 1 Section Title
```

В формате указан способ автоматического формирования идентификатора секции на основе заголовка секции. Например, по умолчанию для секции

```asciidoc
== Wiley & Sons, Inc.
```

Будет сгенерирован идентификатор `_wiley_sons_inc`. Есть возможность отключать автоматическую генерацию идентификаторов или задавать произвольные идентификаторы. Есть возможность автоматической генерации нумерации секций.

## Параграфы

Переводы строки внутри параграфа игнорируются при конвертации. Принудительных перевод строки можно сделать с помощью символа `+` или с применением атрибутов блока.

```asciidoc
Rubies are red, +
Topazes are blue.

[%hardbreaks]
Ruby is red.
Java is beige.
```

Некоторые аспекты внешнего вида текста регулируются специальными атрибутами, которые называются ролями.

```asciidoc
[.text-center]
This text is centered, so it must be important.
```

## Макросы

Для особых случаев применяются макросы. Они бывают двух видов: блочные и инлайновые. Изображения и примечания реализованы через макросы. Блочный макрос начинается с названия, затем идут два символа `:`, затем аргументы и список атрибутов.

```asciidoc
Content in document.

image::sunset.jpg[]  

Content in document
```

К изображению может быть добавлен заголовок через заголовок блока или через атрибуты.

```asciidoc
.A mountain sunset 
[#img-sunset,link=https://www.flickr.com/photos/javh/5448336655] 
image::sunset.jpg[Sunset,200,100] 
```

Инлайновые макросы выглядят так же, только используется один символ `:`, так выглядят примечания:

```asciidoc
The hail-and-rainbow protocol can be initiated at five levels:

. doublefootnote:[The double hail-and-rainbow level makes my toes tingle.]  
. tertiary
. supernumerary
. supermassive
. apocalyptic

A bold statement!footnote:disclaimer[Opinions are my own.] 

Another outrageous statement.footnote:disclaimer[]
```

## Списки

Вложенность маркированных и нумерованных списков определяется количеством символов разметки.

```asciidoc
.Possible DefOps manual locations
* West wood maze
** Maze heart
*** Reflection pool
** Secret exit
* Untracked file in git repository
```

```asciidoc
. Step 1
. Step 2
.. Step 2a
.. Step 2b
. Step 3
```

Поддерживаются различные способы нумерации в нумерованных списках.

## Таблицы

Кроме базового синтаксиса таблиц

```asciidoc
[cols="1,1"]
|===
|Cell in column 1, row 1 
|Cell in column 2, row 1 

|Cell in column 1, row 2
|Cell in column 2, row 2

|Cell in column 1, row 3
|Cell in column 2, row 3 
|=== 
```

есть много других возможностей, включая вложенные таблицы и использование формата CSV.

## Цитаты

Автора цитаты можно указать через атрибуты блока.

```asciidoc
.After landing the cloaked Klingon bird of prey in Golden Gate park: 
[quote,Captain James T. Kirk,Star Trek IV: The Voyage Home]   
Everybody remember where we parked.
```

Так же поддерживаются цитаты в стиле Markdown.

```asciidoc
> I hold it that a little rebellion now and then is a good thing,
> and as necessary in the political world as storms in the physical.
> -- Thomas Jefferson, Papers of Thomas Jefferson: Volume 11
```

## Итоги

Формат AsciiDoc значительно лучше проработан и стандартизован чем Markdown, для которого каждый парсер и организация делает свои расширения. Формат подходит для создания очень сложных документов: есть возможности кастомизации оглавления, вставки одного документа в другой и др.
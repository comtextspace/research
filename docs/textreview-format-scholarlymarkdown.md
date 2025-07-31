---
title: "Форматы: ScholarlyMarkdown"
date: "2025-07-31"
categories: 
  - "текстология"
tags: 
  - "форматы"
---

# {{ $frontmatter.title }}

**31.07.2025**

[ScholarlyMarkdown](http://scholarlymarkdown.com) — формат разметки научных текстов в стиле Markdown. Он находится на экспериментальной стадии: не завершён и не полный, но представляет интерес благодаря своей ориентации на научные публикации.

> ScholarlyMarkdown is a syntax/standard/best-practice of scholarly and academic communication that is web-first, semantic XML-second, and LaTeX/Word a close third. Its main goal is to produce a semantically model of a scholarly article based on Markdown input, and translate it to a variety of formats that is suitable for both online scholarly communication, archiving, and publication.

ScholarlyMarkdown сохраняет обратную совместимость с GitHub-Flavored Markdown и Pandoc Markdown. Новые элементы добавлены так, чтобы не конфликтовать с уже существующей разметкой.

Конвертер [Scholdoc](https://github.com/timtylin/scholdoc) ([документация](http://scholdoc.scholarlymarkdown.com)), преобразующий ScholarlyMarkdown в HTML5, LaTeX и Docx (OOML), не обновлялся более 10 лет. Scholdoc является форком Pandoc.

[[TOC]]

## Математические блоки

Для математических блоков вместо символов `$` используется оформление, аналогичное блоку кода. Чтобы было понятно, что это формулы, а не код, указывается название языка — `math`.

```math #yourmathlabel
    \textit{insert latex math code here}}
```

Такой блок будет отображён следующим образом:

![](/images/textreview-format-scholarlymarkdown-1.png)

То же самое — с инлайновыми математическими выражениями:

```
текст ``a+b=c`` текст
```

Идентификатор `#yourmathlabel` позволяет ссылаться на формулу далее по тексту. Ссылка может быть двух видов: 

* В квадратных скобках `[#yourmathlabel]` — отобразится как `1`
* В круглых скобках `(#yourmathlabel)` — отобразится как `(1)`

## Изображения

Возможности вставки изображений значительно расширены. Доступны подписи, группировка и плавающие блоки (floats). 

Пример разметки для блока из трёх изображений: 

```
#### Figure: this text is ignored {#figure2}

![look at me](sealbaby.jpg){#sealA width=50%}\
![and also me](sealbaby.jpg){#sealB width=30%}
![](sealbaby.jpg){#sealC width=same}

Caption: Look at all my baby seals!
```

Такой блок будет отображён следующим образом:

![](/images/textreview-format-scholarlymarkdown-2.png)

На изображения, как и на блоки кода, можно ссылаться по указанным идентификаторам.

## Заключение

Разметка изображений в ScholarlyMarkdown может быть адаптирована для использования в текстологическом формате. Однако есть существенный недостаток: разные электронные форматы обладают разными возможностями, и не все из них способны корректно отобразить такую разметку. Нумерация изображений, формул и блоков кода, а также ссылки на них — это тоже полезный элемент разметки.
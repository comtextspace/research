---
title: "Шаблоны и переменные Pandoc"
date: "2021-01-21"
categories: 
  - "Программы"
tags: 
  - "pandoc"
---

# {{ $frontmatter.title }}

При генерации [целого документа](pandoc-basic.md) (параметр `-s`) Pandoc выводит данные в шаблон. Для каждого выходного формата шаблоны разные. Чтобы посмотреть шаблон используйте команду

```
pandoc -D *FORMAT*
```

Например

```
pandoc -D markdown
```

Вывод будет следующий

```
$if(titleblock)$ $titleblock$

$endif$ $for(header-includes)$ $header-includes$

$endfor$ $for(include-before)$ $include-before$

$endfor$ $if(toc)$ $table-of-contents$

$endif$ $body$ $for(include-after)$

$include-after$ $endfor$
```

Последние версии всех шаблонов хранятся в [репозитории](https://github.com/jgm/pandoc-templates/).

Можно использовать не только стандартный шаблон, а сделать свой. Создадим файл `template01.md` с самым простым шаблоном, который просто выведет весь документ:

```
$body$
```

И запустим конвертацию с параметром `--template`:

```
pandoc -o output.md -f markdown -t markdown -s --template template01.md input01.md
```

В шаблонах можно использовать переменные, такие как title, например, заданные в [файле метаданных](pandoc-metadata.md). Изменим шаблон:

```
# $title$

$body$
```

И добавим `metadata.yaml`:

```
title: Заголовок
```

Запускаем командой:

```
pandoc -o output.md -f markdown -t markdown -s --template template02.md --metadata-file=metadata.yaml input01.md
```

В результате, получаем заполненный заголовок.

Переменные можно задавать через параметры

- `-V KEY[=VAL]`
- `--variable=KEY[:VAL]`

Снова изменим шаблон

```
* $item1$
* $item2$

$body$
```

И добавим переменные:

```
pandoc -o output.md -f markdown -t markdown -s --template template03.md -V item1=Apple -V item2=Tomato input01.md
```

На выходе получаем

```
* Apple
* Tomato

[текст документа]
```

## Ссылки

- [Шаблоны Pandoc](https://pandoc.org/MANUAL.html#templates)

---
title: "Lua-фильтры в Pandoc"
date: "2023-11-03"
categories:
  - "Программы"
tags:
  - "pandoc"
---

# {{ $frontmatter.title }}

Pandoc содержит возможность 

AST 
как посомтреть AST JSON 

фильтры

пример фильтра на Lua

обработчики запускается на элементе AST с названием функции

результат функции nil или измененный элемент.

Таким способом можно дорабатывать как импорт из любого формата так и экспорт в любой формат.


[Репозиторий с фильтрами для Comtext](https://github.com/comtextspace/pandoc-filter-comtext).

## Ссылки

* [Learn Lua in Y minutes](https://learnxinyminutes.com/docs/lua/)
* [Pandoc Filters Wiki](https://github.com/jgm/pandoc/wiki/Pandoc-Filters)
* [Pandoc Documentation. Pandoc filters](https://pandoc.org/filters.html)
* [Pandoc Documentation. Pandoc Lua Filters](https://pandoc.org/lua-filters.html)
* [Pandoc Documentation. Creating Custom Pandoc Readers in Lua](https://pandoc.org/custom-readers.html)
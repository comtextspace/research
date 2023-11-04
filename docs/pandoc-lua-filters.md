---
title: "Lua-фильтры в Pandoc"
date: "2023-11-03"
categories:
  - "Программы"
tags:
  - "pandoc"
---

# {{ $frontmatter.title }}

Pandoc поддерживает большое количество форматов разметки, как для входных данных, так и для выхода. Конвертация основана на том, что входные данные преобразуются в определённое внутреннее представление, а результат получается переводом из внутреннего представления в выходной формат.

Внутренний формат — [абстрактное синтаксическое дерево](https://ru.wikipedia.org/wiki/Абстрактное_синтаксическое_дерево). Чтобы увидеть его в виде JSON используете следующую команду:

```
pandoc -o book.json book.md
```

Pandoc позволяет внести изменения в AST с помощью фильтров. Таким способом можно добиться поддержки своего формата, такого как [Comtext](format-comtext.md). Фильтры можно писать на разных языка программирования, однако, фильтры на [Lua](https://www.lua.org/) выделяются тем, что не требуют дополнительных программ, так как интерпретатор Lua встроен в Pandoc. 

Следующий фильтр удаляет из AST разметку номеров страниц в формате Comtext.

```
local text = pandoc.text

local function is_page_number(page_number_start, space, page_number_end)
  return page_number_start and page_number_start.t == 'Str'
    and page_number_end and page_number_end.t == 'Str'
    and space and space.t == 'Space'
    and page_number_start.text == '[#'
    and page_number_end.text:sub(-1) == ']'
end

local function is_inline_page_number(page_number_start, space, page_number_end)
  return page_number_start and page_number_start.t == 'Str'
    and page_number_end and page_number_end.t == 'Str'
    and space and space.t == 'Space'
    and page_number_start.text:sub(-2) == '[#'
    --and page_number_end.text:sub(-1) == ']'
end

function Inlines (inlines)
  -- Go from end to start to avoid problems with shifting indices.
  for i = #inlines-2, 1, -1 do
    if is_page_number(inlines[i], inlines[i+1], inlines[i+2]) then
      inlines:remove(i+2)
      inlines:remove(i+1)
      inlines:remove(i)
    elseif is_inline_page_number(inlines[i], inlines[i+1], inlines[i+2]) then 
      inlines[i].text = inlines[i].text:sub(1, -3)
      inlines[i+2].text = inlines[i+2].text:gsub('(.-])', '')

      inlines:remove(i+1)
    end
  end
  return inlines
end
```

В Lua-фильтрах каждая глобальная функция сравнивается с названием названиями типов элементов синтаксического дерева. Если есть совпадающие то они вызываются для всех элементов этого типа. Если функция возвращает `nil`, то элемент остаётся без изменения. Если функция возвращает новый элемент, то этот элемент обновляется в исходном дереве.

В примере выше, функция `Inlines` вызывается для всех абзацев и содержит в себе коллекцию со словами внутри абзаца. Во время последовательного перебора элементов происходит поиск тега `[# номер_страницы]` и если такой обнаруживается, то эти элементы удаляются. Особый случай представляет собой разрыв страницы на середине слова.

## Ссылки

* [Репозиторий с фильтрами для Comtext](https://github.com/comtextspace/pandoc-filter-comtext).
* [Learn Lua in Y minutes](https://learnxinyminutes.com/docs/lua/)
* [Pandoc Filters Wiki](https://github.com/jgm/pandoc/wiki/Pandoc-Filters)
* [Pandoc Documentation. Pandoc filters](https://pandoc.org/filters.html)
* [Pandoc Documentation. Pandoc Lua Filters](https://pandoc.org/lua-filters.html)
* [Pandoc Documentation. Creating Custom Pandoc Readers in Lua](https://pandoc.org/custom-readers.html)
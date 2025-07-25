
# Формат Comtext

ComText — формат хранения, обработки и передачи текстологических данных. Он ориентирован на международное взаимодействие и упрощает обмен информацией. ComText особенно полезен при:

* переводах с одного источника на разные языки, а также при сравнении различных переводов;
* сопоставлении разных изданий одного текста;
* работе с источниками в виде фотокопий;
* конвертации текстов в современные форматы, совместимые с любыми электронными устройствами;
* поиске работ (статей, книг и других материалов) и поиске внутри текстов;
* составлении и оформлении списков литературы и библиографических ссылок;
* создании перекрёстных ссылок между текстами, а также формировании указателей имён и тематических указателей.

ComText не описывает реализацию программных систем, а обеспечивает совместимость систем, построенных на его основе, — то есть возможность обмена данными между ними. Программные решения, реализующие ComText, могут быть созданы на разных технологических стеках и соответствовать стандарту в той или иной степени — в зависимости от задач, ресурсов и возможностей разработчиков. Стандарт включает базовые рекомендации по реализации, но их следует воспринимать скорее как советы, чем как строгие предписания.

В отдельных пунктах указаны рекомендации для совместимости со сборщиком сайта [ComtexBuilder](https://github.com/comtextspace/comtext_builder).

[[toc]]

## Версия

Версия формата следует принципам [семантического версионирования](https://semver.org/).

Текущая версия: 2rc1.0.0. (версия в разработке)

Ссылки на другие версии см. на странице [История изменений](/format-comtext-changelog).

## Кодировка

Все файлы должны быть закодированы в UTF-8.

Для обозначения конца строки должен использоваться символ [LF](https://symbl.cc/en/000A/).

## Метаинформация

В начале файла **рекомендуется** указать метаданные ([Frontmatter](https://www.seancdavis.com/posts/wtf-is-frontmatter/)). Метаданные оформляются в формате [YAML](https://ru.wikipedia.org/wiki/YAML) и отделяются от основного текста тремя тире `---`.

```
---
format: comtext
version: 1.5.0
title: Название книги
author:
- Иван Петров
lang: ru-RU
---
```

Ниже приведены описания полей метаинформации.

### format

Обязательное. Указывает формат и всегда содержит значение `comtext`.

### version

Обязательное. Указывает версию формата.

### title

Обязательное. Заголовок книги.

### author

Обязательное. Список авторов книги.

Имена могут быть указаны в трех форматах:

* `имя отчество фамилия`
* `имя фамилия`
* `фамилия или псевдоним`

Примеры:

```
---
author:
- Иван Васильевич Петров
- Иван Петров
- И. В. Петров
- И. Петров
- Петров
- Аристотель
---
```

### lang

Не обязательное. Основной язык книги. Строка в формате [BCP 47](https://www.rfc-editor.org/info/bcp47).

Поле используется при конвертации в форматы электронных книг.

### cover-image

Не обязательное. Имя файла с изображением обложки книги.

Поле используется при конвертации в форматы электронных книг.

## Описание разметки

Разметка в основном соответствует Markdown, но с некоторыми дополнениями. Следуйте описанному ниже синтаксису — так книги будут корректно конвертироваться в любые форматы.

### Абзацы

Абзацы разделяются пустой строкой.

```md
Освобождение категорически представляет собой закон исключённого третьего. Искусство категорически раскладывает на элементы трансцендентальный гений, ломая рамки привычных представлений. Адаптация, по определению, естественно понимает под собой напряженный катарсис, хотя в официозе принято обратное. Предмет деятельности подрывает типичный закон исключённого третьего. Апостериори, атомистика естественно заполняет непредвиденный знак, хотя в официозе принято обратное. Антропосоциология индуцирует конфликт.

Сомнение, как следует из вышесказанного, индуцирует гедонизм. Катарсис преобразует дедуктивный метод. Любовь творит непредвиденный дуализм. Представляется логичным, что дедуктивный метод реально понимает под собой закон исключённого третьего, tertium nоn datur. По своим философским взглядам Дезами был материалистом и атеистом, последователем Гельвеция, однако галактика индуцирует дедуктивный метод. Позитивизм методологически принимает во внимание естественный позитивизм.

Ощущение мира индуктивно преобразует мир. Актуализация трансформирует данный гравитационный парадокс. Дедуктивный метод, как принято считать, неоднозначен. Знак раскладывает на элементы конфликт, учитывая опасность, которую представляли собой писания Дюринга для не окрепшего еще немецкого рабочего движения.
```

Дополнительная информация:

* [Описание абзацев в Pandoc](https://pandoc.org/MANUAL.html#paragraphs)

### Заголовки

Заголовки начинаются с символа решётки `#`. Количество решёток определяет уровень заголовка.

```md
# Заголовок первого уровня

## Заголовок второго уровня

### Заголовок третьего уровня

#### Заголовок четвертого уровня

##### Заголовок пятого уровня

###### Заголовок шестого уровня
```

Требования:

* Заголовки книг начинаются с первого уровня. Заголовок первого уровня — заглавие книги;
* Заголовки должны идти последовательно, без пропусков уровней: после заголовка уровня `n` может идти только заголовок уровня `n+1` или ниже;
* После последнего символа `#` должен стоять ровно один пробел;
* Допускается только шесть уровней заголовков;
* Заголовок не должен заканчиваться знаками `,.:;`.

### Курсив

Курсив выделяется одиночными звёздочками (`*`):

```md
Этот текст *написан курсивом*.
```

### Полужирный

Полужирный шрифт выделяется двойными звёздочками (`**`):

```md
Этот текст **написан полужирным шрифтом**.
```

### Полужирный и курсив одновременно

Полужирный шрифт одновременно с курсивом выделяется тремя звёздочками (`***`):

```md
Этот текст ***написан курсивом и полужирным шрифтом***.
```

### Разрядка

[Разрядка](https://ru.wikipedia.org/wiki/Разрядка_(типографика)) выделяется двумя подчёркиваниями (`__`):

```md
Этот текст __написан разрядкой__.
```

### Подчёркивание

Подчёркнутый текст выделяется одиночным подчёркиванием (`_`):

```md
Этот текст _выделен подчёркиванием_.
```

### Списки

Между маркером списка и содержанием элемента списка должен быть ровно один пробел.

#### Маркированные списки

Маркированные списки оформляются звёздочкой и пробелом в начале строки.

```md
* Апельсины
* Лимоны
* Яблоки
```

#### Нумерованные списки

Нумерованные списки оформляются цифрой, точкой и пробелом в начале строки.

```md
1. Апельсины
2. Лимоны
3. Яблоки
```

Если абзац начинается с цифры, но не является элементом списка, то для экранирования списка используйте обратный слеш (`\`) перед точкой:

```md
1\. это начало абзаца, а не список
```

#### Вложенные списки

Списки могут быть вложенными. Каждого уровень списка выделяется добавлением двух пробелов. Между уровнями элементами списка разных уровней должна быть пустая строка.

```md
* Инструменты

  * Молоток
  * Отвёртка

1. Кружок M3

  1. Участник 1
  1. Участник 2
```

### Цитаты

Цитаты выделяются символом `>` и одним пробелом в начале строки. Автор цитаты указывается на отдельной строке с пометкой `--`.

```md
> Люди всегда были и всегда будут глупенькими жертвами обмана и самообмана в политике, пока они не научатся за любыми нравственными, религиозными, политическими, социальными фразами, заявлениями, обещаниями разыскивать интересы тех или иных классов.
> -- В. Ленин
```

Требование pandoc: 
[Требование pandoc](https://pandoc.org/MANUAL.html#block-quotations): цитата должна начинаться с новой строки, перед ней должна быть пустая строка.

```md
Знаменитая цитата Ленина:

> Люди всегда были и всегда будут глупенькими жертвами обмана и самообмана в политике, пока они не научатся за любыми нравственными, религиозными, политическими, социальными фразами, заявлениями, обещаниями разыскивать интересы тех или иных классов.
```

Чтобы разделить цитату на абзацы, используется пустая строка с символом `>`:

```
> Первый абзац
>
> Второй абзац
```

Если цитата — стихотворение, и нужно сохранить строковый, а не абзацный интервал, используйте принудительный перенос. Для этого **в конце строки** добавляется пробел и обратный слеш (`\`):

```md
Стихотворение:

> Ешь ананасы, \
> рябчиков жуй, \
> день твой последний \
> приходит, буржуй.
```

### Сноски (примечания)

Сноски оформляются с помощью квадратных скобок и символа `^`:

```md
И дальше: «Надо создать в России изучение и преподавание системы Тейлора, систематическое испытание и приспособление ее»[^3]. Конечно, ударение в работе по увеличению продуктивности живого человеческого труда в условиях Советского государства мы должны делать на повышении квалификации труда и улучшении его качества путем применения добытых наукой и практикой приемов работ, экономящих затрату человеческой энергии.

[^3]: В. И. Ленин. Поли. собр. соч., т. 36, с. 180, 190.
```

Сноски размещаются сразу после абзаца к которому они относятся, за исключением случая когда на одну сноску несколько ссылок, в этом случае сноски можно разместить в конце книги.

Если сносок несколько, то они должны быть разделены пустой строкой.

```
[^1]: первая сноска.

[^2]: вторая сноска.
```

#### Виды сносок

Существует два типа сносок:

* Авторские (`Авт.`)
* Редакторские (`Ред.`)

Тип указывается в конце текста сноски. Для многострочной сноски — в конце последнего абзаца:

```
[^1]: авторское примечание. Авт.

[^2]: редакторское примечание. Ред.
```

Регистр и форматирование не имеют значения. Следующие варианты эквивалентны:

```
[^1]: авторское примечание. авт.

[^1]: авторское примечание. *Авт.*

[^1]: авторское примечание. **Авт.**
```

Если тип сноски не указан явно, то она считается авторской.

#### Многострочные сноски

Если сноска содержит несколько абзацев, каждый последующий абзац начинается с четырёх пробелов. Между абзацами — пустая строка.


```md
Эта книга предлагает новую интерпретацию рождения, эволюции и смерти СССР. В значительной степени мы полагаемся на имеющуюся литературу. Однако «излишковая»[^2] теория класса, которую мы находим у Маркса и используем для анализа советской истории, резко отличается от теорий, используемых как ее защитниками, так и ее критиками.

[^2]: В оригинале «the «surplus» theory of class». По всей видимости, в англоязычной литературе помимо категорий «surplus value» (прибавочная стоимость), «surplus product» (прибавочный продукт), «surplus labour» (прибавочный труд) и т. д. имеется понятие «surplus», являющееся *родовым* по отношению к вышеупомянутым понятиям. Как мы видим, в русскоязычной марксистской литературе на сегодняшний день сложилась норма перевода прилагательного «surplus» как «прибавочный (-ая)» и в этом смысле понятие «the „surplus“ theory of class» стоило перевести как «„прибавочная“ теория класса».

    Однако, как читатель увидит далее, эта теория класса, развиваемая Резником и Вольфом, получила свое название из-за того, что она, в отличие от других теорий класса, во главу угла ставит «social organization of the surplus» — общественный способ того, как в том или ином обществе организованы производство и распределение результатов труда, которые остаются за вычетом того, что требуется для простого воспроизводства этого общества. Как мы видим, в данном контексте «surplus» используется как существительное.

    Поскольку Резник и Вольф говорят об этой категории в смысле общего как для капитализма, так и для коммунизма, то нами принято решение везде в тексте переводить «surplus», когда оно употребляется как существительное, как «излишек», когда оно употребляется как прилагательное в устойчивых выражениях (surplus value, surplus product, surplus labour etc.), — как «прибавочный (-ая)»; и наконец, когда оно употребляется как прилагательное в неологизмах (surplus theory of class), — как «излишковый».
```

### Горизонтальная линия

Горизонтальная линия — три [дефиса](https://symbl.cc/ru/002D/), отделённые пустыми строками:

```md

---

```

### Библиография

Ссылки на библиографию оформляются следующим способом

```
[@идентификатор_книги, дополнительная_информация]
```

* `идентификатор_книги` может состоять из букв, цифр и символа подчёркивания `_`. Идентификатор книги не может начинаться с цифры;
* `дополнительная_информация` не обязательна и может состоять из указания номера страниц или глав книги.

Пример без дополнительной информации

```
пределов поставленных развитию продуктивных сил человека капиталом [@marxCapitalVol1] является
```

Пример с дополнительной информацией

```
пределов поставленных развитию продуктивных сил человека капиталом [@marxCapitalVol1, с. 143] является
```

Такой формат ссылок соответствует [стандарту Pandoc](https://pandoc.org/demo/example19/Extension-citations.html).

Библиографический список рекомендуется размещать в конце книги. Отличие от сносок — только в символе `@`:

```
[@marxCapitalVol1]: К. Маркс. Капитал, том 1.
```

### Формулы

Формулы записываются на [LaTeX](https://ru.wikipedia.org/wiki/LaTeX). Есть два способа встраивания: в строке и отдельным блоком.

Для встраивания в строку используются одинарные доллары `$`:

```md
Квадратное уравнение $x^2 + x + 3 = 2$ демонстрирует зависимость между...
```

Для отдельного блока — двойные доллары `$$`:

```md
$$
\frac{K+p'K}{K_1+p'K_1} = \frac{K(1+p')}{K_1(1+p')} = \frac{K}{K_1}
$$
```

#### Особенности ComtextBuilder

В ComtextBuilder для визуализации формул используется [KaTeX](https://katex.org).

Более подробно о LaTeX можно прочитать в любой специализированной книге, например, [этой](https://www.mccme.ru/free-books/llang/newllang.pdf).

### Блок кода

Блоки кода оформляются тремя обратными кавычками.

````
```
  var a = 23;
```
````

### Изображения

Синтаксис добавления изображений:

```
![Подпись изображения](имя_файла_изображения)
```

Пример
```
![1. Схема товарного обращения по Кенэ](/img/рубин-исаак-ильич-история-экономической-мысли-1.png)
```

#### Рекомендации

Для схем и диаграмм лучше всего использовать векторные изображения в формате [SVG](https://ru.wikipedia.org/wiki/SVG). Если возможности использовать векторные изображения нет, то чаще всего лучшим выбором будет формат [PNG](https://ru.wikipedia.org/wiki/PNG).

Для фотография растровые изображения в формате [JPEG](https://ru.wikipedia.org/wiki/JPEG).

#### Особенности ComtextBuilder

Подпись изображения отображается под изображением.

Пробелы в названиях файлов лучше не использовать и заменять их на [дефис](https://symbl.cc/ru/002D/).

Файл изображения должен находится в каталоге `img` рядом в файлом книги. Путь к изображению должен быть абсолютный начиная с `/img/`. Начало названия файла изображения должно совпадать с названием файла книги.

Пример для книги в файле `рубин-очерки-по-теории-стоимости-маркса.md`:

```md
![Диаграмма 1](/img/рубин-очерки-по-теории-стоимости-маркса-1.png)

![Диаграмма 2](/img/рубин-очерки-по-теории-стоимости-маркса-2.png)
```

Изображения с текстом описания равным `cover` вырезается при конвертации в электронные книги, для установки обложки используется поле метаданных `cover-image`.

### Номера страниц

Номера страниц указываются так:

```
[# номер_страницы]
```

Например:

```
Первый применяется для взвешивания [# 23] особенно ценных товаров, как золото...
```

Номер страницы может разрывать абзац или даже слово. Если слово разрывается, номер вставляется внутрь без лишних пробелов:

```
Первый применяется для взвеши[# 23]вания особенно ценных товаров, как золото...
```

Если абзац заканчивается на границе страницы, номер ставится после текста:

```
Первый применяется для взвешивания ... таких как золото. [# 23]

Второй абзац
```

### Экранирование символов

Чтобы отобразить символ разметки как обычный текст, используйте обратный слеш `\`.

```
Следующий символ \* не является элементом разметки и отобразится как обычный символ.
То же самое с квадратными скобками \[# 44\]
```

### Служебные комментарии

Для временных заметок, например, фрагментов, требующих доработки, используется конструкция `comment`.

```
[comment текст комментария]
```

Пример

```
ŭĵ [comment не знаю, что это за символы]
```

Конструкция `comment`, обычно, должна вырезаться средствами отображения книг на этапе конвертации.

## Что нельзя использовать

### Неописанные элементы разметки

Не используйте элементы разметки, не описанные выше. Они могут не поддерживаться ComtextBuilder или Pandoc.

## Рекомендации

### Выделения

Если нужно выделить полужирным несколько слов подряд, выделяйте весь блок целиком, а не каждое слово отдельно.

Правильно:

```md
**Равенство капиталов** означает **неравенство труда**.
```

Неправильно: 

```md
**Равенство** **капиталов** означает **неравенство** **труда**.
```

### Пробелы

За исключением таблиц и примечаний из нескольких абзацев, не используйте несколько пробелов подряд. Абзацы не должны заканчиваться пробелами.

### Переводы строк

Разделяйте абзацы, заголовки и другие элементы пустыми строками. Не оставляйте более одной пустой строки подряд.
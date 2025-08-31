# Инструкция по типографике и Unicode

```
Версия документа: 0.1 (29.08.2025)
```

Следующая инструкция определяет правила типографики для вычитки текстов с использованием Unicode.

[[TOC]]

## Как вводить символы которых нет на клавиатуре

Дальнейшие инструкции связанные с вводом ориентированы на Linux. Для Windows сходные возможности могут быть реализованы установкой специальных раскладок, таких как [Strata](https://way23.ru/раскладка-клавиатуры-strata.html) или [Типографской раскладки Ильи Бирмана](https://way23.ru/установка-типографской-раскладки-на-wind.html).

В дистрибутивах Linux раскладка может быть настроена без установки дополнительных программ. Несколько инструкций для ParrotOS ниже.

* [Настройка раскладки клавиатуры в Parrot OS](https://way23.ru/parrot_os_keyboard_layout.html)
* [Настройка раскладки Эсперанто и дополнительных типографических символов в ParrotOS](https://way23.ru/parrotos-esperanto-layout.html)
* [Установка шрифтов в ParrotOS](https://way23.ru/parrotos-install-font.html)

Для особенно сложных случаев помогает отдельная утилита [Espanso]((https://way23.ru/espanso-ввод-спецсимволов.html).

Дополнительно можно найти множество других инструкций на эту тему, например следующие

* [How to Insert En Dash (–) and Em Dash (—) on Linux](https://ladedu.com/how-to-insert-en-dash-and-em-dash-on-linux)

## Тире, дефис и похожие символы

* `-` — дефис ([Hyphen-Minus](https://symbl.cc/en/002D/))
* `—` — тире ([Em Dash](https://symbl.cc/en/2014/))
* `–` — короткое тире ([En Dash](https://symbl.cc/en/2013/))
* `−` — минус ([Minus Sign](https://symbl.cc/en/2212/))

Короткое тире ставится используется только в диапазонах: `20–24 стр.`, `20.04.2025–24.04.2025`.

Минус используется только в математических формулах.

TODO нужно ли ставить пробел между запятой и тире?

Отдельно выделяется символ мягкого переноса ([Soft Hyphen](https://symbl.cc/en/00AD/)). Этот символ не следует использовать в исходных текстах, он может быть добавлен автоматически ([https://habr.com/ru/post/138088/](Алгоритм Ляна-Кнута для расстановки мягких переносов)). 

### Дополнительно

* [gramota.ru — Черточки и палочки: как сделать правильный выбор между тире, еще тире, дефисом и минусом](https://gramota.ru/journal/stati/pravila-i-normy/defis-i-tire-kak-vybrat-i-postavit-pravilnyy-znak-v-tekste)
* [gramota.ru — Правила русской орфографии и пунктуации (В. В. Лопатин) — Дефис](https://gramota.ru/biblioteka/spravochniki/pravila-russkoy-orfografii-i-punktuatsii/defis)
* [gramota.ru — Правила русской орфографии и пунктуации (С. Г. Бархударов, 1956) — Тире](https://gramota.ru/biblioteka/spravochniki/pravila-russkoj-orfografii-i-punktuacii/tire)
* [gramota.ru — Правила русской орфографии и пунктуации (С. Г. Бархударов, 1956) — Дефис](https://gramota.ru/biblioteka/spravochniki/pravila-russkoy-orfografii-i-punktuatsii/defis)
* [type.today — Справочник: тире](https://type.today/ru/journal/dash)
* [Ководство — § 158. Короткое тире](https://www.artlebedev.ru/kovodstvo/sections/158/)
* [Ководство — § 97. Тире, минус и дефис, или Черты русской типографики](https://www.artlebedev.ru/kovodstvo/sections/97/)
* [Бюро — Короткое или длинное тире?](https://bureau.ru/soviet/20220807/)

## Пробелы

* ` ` — 
* ` ` — неразрывный пробел
* ` ` — узкий неразрывный пробел
* `` — 
* `` — 
* `` — 

В исходных текстах должны использоваться только обычные пробелы ` ` ([]()). Другие виды пробелов должны подставляться в текст автоматическими инструментами.

### Дополнительно

* [type.today — Справочник: пробелы](https://type.today/ru/journal/spaces)

## Кавычки

* `« »` — кавычки «ёлочки» ([Left-Pointing Double Angle Quotation Mark](https://symbl.cc/en/00AB/) и [Right-Pointing Double Angle Quotation Mark](https://symbl.cc/en/00BB/))
* `„ “` — кавычки «лапки» ([Double Low-9 Quotation Mark](https://symbl.cc/en/201E/) и [Left Double Quotation Mark](https://symbl.cc/en/201C/))
* `‘ ’` — английские одиночные кавычки ([марровские](https://ru.wikipedia.org/wiki/Марр,_Николай_Яковлевич) кавычки) ([Left Single Quotation Mark](https://symbl.cc/en/2018/) и [Right Single Quotation Mark](https://symbl.cc/en/2019/))

Как основные используются кавычки «ёлочки». Если нужны вложенные кавычки, то применяются кавычки «лапки» Например: «он прочитал „Капитал“ за неделю».

Марровские кавычки используются только в специализированной лингвистической литературе вроде словарей. Марровские кавычки не должны использоваться в обычных текста.

### Дополнительно

* [gramota.ru — Правила русской орфографии и пунктуации (С. Г. Бархударов, 1956) — Кавычки](https://gramota.ru/biblioteka/spravochniki/pravila-russkoj-orfografii-i-punktuacii/kavychki)
* [gramota.ru — Письмовик — В чем разница между кавычками разного рисунка?](https://gramota.ru/biblioteka/spravochniki/pismovnik/v-chem-raznitsa-mezhdu-kavychkami-raznogo-risunka)
* [Ководство — § 104. Кавычки](https://www.artlebedev.ru/kovodstvo/sections/104/)
* [Кавычки «ёлочки» или „лапки“, какие кавычки использовать в русских и англоязычных текстах?](https://habr.com/en/articles/865866/)
* [type.today — Справочник: кавычки](https://type.today/ru/journal/quotes)
* [Википедия — Кавычки](https://ru.wikipedia.org/wiki/Кавычки)

## Многоточие

* `…` — многоточие ([Horizontal Ellipsis](https://symbl.cc/en/2026/))

Многоточие ставится вместо использования трех точек `...`.

### Дополнительно

* [Ководство — § 164. Многоточие](https://www.artlebedev.ru/kovodstvo/sections/164/)

## Ударение

Символ ударения ([Combining Acute Accent](https://symbl.cc/en/0301/)) добавляется к символам букв. Гласные русского языка с символом ударения:

* `а́` — буква `а` с ударением
* `е́` — буква `е` с ударением
* `ё́` — буква `ё` с ударением
* `и́` — буква `и` с ударением
* `о́` — буква `о` с ударением
* `у́` — буква `у` с ударением
* `ы́` — буква `ы` с ударением
* `э́` — буква `э` с ударением
* `ю́` — буква `ю` с ударением
* `я́` — буква `я` с ударением

Приведенные выше буквы — это буквы русского языка с добавленным знаком ударения. Их нельзя путать с другими буквами, хотя они и могут выглядеть одинаково. Например, `é` ([Latin Small Letter E with Acute](https://symbl.cc/en/00E9/)) это не буква `е́` ([Cyrillic Small Letter Ie](https://symbl.cc/en/0435/) и [Combining Acute Accent](https://symbl.cc/en/0301/)).

### Дополнительно

* [Википедия — Ударение](https://ru.wikipedia.org/wiki/Ударение)
* [Википедия — Акут](https://ru.wikipedia.org/wiki/Акут)
* [Википедия — Знак ударения](https://ru.wikipedia.org/wiki/Знак_ударения)
* [gramota.ru — Правила русской орфографии и пунктуации (В. В. Лопатин) — Знак ударения](https://gramota.ru/biblioteka/spravochniki/pravila-russkoy-orfografii-i-punktuatsii/znak-udareniya)

## Апостроф

Как апостроф используется символ `’` ([Right Single Quotation Mark](https://symbl.cc/en/2019/)). Этот же символ используется в качестве закрывающей английской кавычки (марровские кавычки).

Символ `’` ([Right Single Quotation Mark](https://symbl.cc/en/2019/)) следует отличать от `'` ([Apostrophe](https://symbl.cc/en/0027/)), как апостроф в русскоязычной типографике используется только первый из них.

Апостроф используется при передачи иностранных фамилий с начальными буквами `Д` и `О`.

* `Д’Аламбер`
* `О’Брайен`

### Дополнительно

* [gramota.ru — Правила русской орфографии и пунктуации (В. В. Лопатин) — Апостроф](https://gramota.ru/biblioteka/spravochniki/pravila-russkoy-orfografii-i-punktuatsii/apostrof)
* [Википедия — Апостроф](https://ru.wikipedia.org/wiki/Апостроф)

## Надстрочные и подстрочные индексы

В Unicode есть символы для указания подстрочных и надстрочных индексов. Их можно использовать для разметки химических и математических формул, а так же других случаев когда нужны индексы.

Пример:

* `2⁶ = 64`
* `м³`
* `H₂O`
* `U₂₃₅` — уран-235
* MEGA²
* (К., III², с. 289—290)

Список подстрочных и надстрочных цифр Unicode:

* `¹` — [Superscript One](https://symbl.cc/en/00B9/)
* `²` — [Superscript Two](https://symbl.cc/en/00B2/)
* `³` — [Superscript Three](https://symbl.cc/en/00B3/)
* `⁴` — [Superscript Four](https://symbl.cc/en/2074/)
* `⁵` — [Superscript Five](https://symbl.cc/en/2075/)
* `⁶` — [Superscript Six](https://symbl.cc/en/2076/)
* `⁷` — [Superscript Seven](https://symbl.cc/en/2077/)
* `⁸` — [Superscript Eight](https://symbl.cc/en/2078/)
* `⁹` — [Superscript Nine](https://symbl.cc/en/2079/)
* `⁰` — [Superscript Zero](https://symbl.cc/en/2070/)
* `₁` — [Subscript One](https://symbl.cc/en/2081/)
* `₂` — [Subscript Two](https://symbl.cc/en/2082/)
* `₃` — [Subscript Three](https://symbl.cc/en/2083/)
* `₄` — [Subscript Four](https://symbl.cc/en/2084/)
* `₅` — [Subscript Five](https://symbl.cc/en/2085/)
* `₆` — [Subscript Six](https://symbl.cc/en/2086/)
* `₇` — [Subscript Seven](https://symbl.cc/en/2087/)
* `₈` — [Subscript Eight](https://symbl.cc/en/2088/)
* `₉` — [Subscript Nine](https://symbl.cc/en/2089/)
* `₀` — [Subscript Zero](https://symbl.cc/en/2080/)

Кроме цифры доступны подстрочные и надстрочные математические операторы:

* `⁻` — [Superscript Minus](https://symbl.cc/en/207B/)
* `⁺` — [Superscript Plus Sign](https://symbl.cc/en/207A/)
* `⁽` — [Superscript Left Parenthesis](https://symbl.cc/en/207D/)
* `⁾` — [Superscript Right Parenthesis](https://symbl.cc/en/207E/)
* `⁼` — [Superscript Equals Sign](https://symbl.cc/en/207C/)
* `₊` — [Subscript Plus Sign](https://symbl.cc/en/208A/)
* `₋` — [Subscript Minus](https://symbl.cc/en/208B/)
* `₍` — [Subscript Left Parenthesis](https://symbl.cc/en/208D/)
* `₎` — [Subscript Right Parenthesis](https://symbl.cc/en/208E/)
* `₌` — [Subscript Equals Sign](https://symbl.cc/en/208C/)

Примеры использования:

* `Ca²⁺`
* `Na⁺`
* `SO₄²⁻`
* `f⁽⁰⁾(x) = f(x)`

Все указанные символы можно посмотреть в коллекции [Superscript and Subscript Numbers](https://symbl.cc/en/collections/superscript-and-subscript-numbers/).

TODO кроме этого есть ещё ряд надстрочных и подстрочных буквенных символов.

## Дроби

В Unicode есть 19 отдельных символов для часто используемых дробей.

* `½` — [Vulgar Fraction One Half](https://symbl.cc/en/00BD/)
* `⅓` — [Vulgar Fraction One Third](https://symbl.cc/en/2153/)
* `¼` — [Vulgar Fraction One Quarter](https://symbl.cc/en/00BC/)
* `⅕` — [Vulgar Fraction One Fifth](https://symbl.cc/en/2155/)
* `⅙` — [Vulgar Fraction One Sixth](https://symbl.cc/en/2159/)
* `⅐` — [Vulgar Fraction One Seventh](https://symbl.cc/en/2150/)
* `⅛` — [Vulgar Fraction One Eighth](https://symbl.cc/en/215B/)
* `⅑` — [Vulgar Fraction One Ninth](https://symbl.cc/en/2151/)
* `⅒` — [Vulgar Fraction One Tenth](https://symbl.cc/en/2152/)
* `⅔` — [Vulgar Fraction Two Thirds](https://symbl.cc/en/2154/)
* `⅖` — [Vulgar Fraction Two Fifths](https://symbl.cc/en/2156/)
* `¾` — [Vulgar Fraction Three Quarters](https://symbl.cc/en/00BE/)
* `⅗` — [Vulgar Fraction Three Fifths](https://symbl.cc/en/2157/)
* `⅜` — [Vulgar Fraction Three Eighths](https://symbl.cc/en/215C/)
* `⅘` — [Vulgar Fraction Four Fifths](https://symbl.cc/en/2158/)
* `⅚` — [Vulgar Fraction Five Sixths](https://symbl.cc/en/215A/)
* `⅝` — [Vulgar Fraction Five Eighths](https://symbl.cc/en/215D/)
* `⅞` — [Vulgar Fraction Seven Eighths](https://symbl.cc/en/215E/)

Кроме того с помощью символов надстрочных и подстрочных индексов можно писать дроби не входящие в этот список. Для этого есть два вспомогательных символа.

* `⅟` — [Fraction Numerator One](https://symbl.cc/en/215F/)
* `⁄` — [Fraction Slash](https://symbl.cc/en/2044/)

Примеры использования:

* `⅟₁₀₀`
* `⅟₁₃`
* `¹²⁄₁₅`

Обратите внимание, что символ `⁄` ([Fraction Slash](https://symbl.cc/en/2044/)) это отличный символ от `/` ([Solidus](https://symbl.cc/en/002F/)).

## Штрих (производная) и градус

* `′` — штрих ([Prime](https://symbl.cc/en/2032/))
* `″` — двойной штрих ([Double Prime](https://symbl.cc/en/2033/))
* `‴` — тройной штрих ([Triple Prime](https://symbl.cc/en/2034/))
* `°` — знак градуса ([Degree Sign](https://symbl.cc/en/00B0/))

Штрих имеет различный смысл в различных контекстах: угловая минута и угловая секунда в геометрии, производные в математическом анализе, для обозначения различных условных обозначения используя одну букву и разное количество штрихов.

Символ штрих `′` ([Prime](https://symbl.cc/en/2032/)) следует отличать от похожих символов `'` ([Apostrophe](https://symbl.cc/en/0027/)), `‘` ([Left Single Quotation Mark](https://symbl.cc/en/2018/), `’` [Right Single Quotation Mark](https://symbl.cc/en/2019/)), `´` ([Acute Accent](https://symbl.cc/en/00B4/)) и других. Аналогично двойной штрих `″` ([Double Prime](https://symbl.cc/en/2033/)) не следует путать с `"` ([Quotation Mark](https://symbl.cc/en/0022/)).

Примеры:

* Если два товара произведены при помощи капиталов `K` и `K₁`, то цена производства первого товара равна `K + p′K`, второго `K₁ + p′K₁`.
* `f″(x)`
* `55° 46′ 30″ N` — 55 градусов, 46 минут, 30 секунд северной широты

### Дополнительно

* [Штрихи, штришки и штришочки](https://habr.com/ru/post/25531/)
* [Википедия — Штрих](https://ru.wikipedia.org/wiki/Штрих_(письмо))
* [Википедия — Знак градуса](https://ru.wikipedia.org/wiki/Знак_градуса)

## Математические символы

* `+` —
* `` — минус 
* `±` — 
* `×` — 
* `÷` — 

* `a × b`

## Другие знаки

* `.` — точка ([Full Stop](https://symbl.cc/en/002E/))
* `,` — запятая ([Comma](https://symbl.cc/en/002C/))
* `!` — восклицательный знак ([Exclamation Mark](https://symbl.cc/en/0021/))
* `?` — вопросительные знак ([Question Mark](https://symbl.cc/en/003F/))
* `:` — двоеточие ([Colon](https://symbl.cc/en/003A/))
* `;` — точка с запятой ([Semicolon](https://symbl.cc/en/003B/))
* `/` — косая черта ([Solidus](https://symbl.cc/en/002F/))

### Дополнительно

* [gramota.ru — Правила русской орфографии и пунктуации (В. В. Лопатин) — Косая черта](https://gramota.ru/biblioteka/spravochniki/pravila-russkoy-orfografii-i-punktuatsii/kosaya-cherta)
* [Википедия — Косая черта](https://ru.wikipedia.org/wiki/Косая_черта)
* [type.today — Справочник: •.,:;…!?·](https://type.today/ru/journal/dots)

## Особые символы

* `§` — параграф ([Section Sign](https://symbl.cc/en/00A7/))
* `№` — номер ([Numero Sign](https://symbl.cc/en/2116/))

Символы валют:

* `$` — Доллар ([Dollar Sign](https://symbl.cc/en/0024/))
* `€` — Евро ([Euro Sign](https://symbl.cc/en/20AC/))
* `₽` — Рубль ([Ruble Symbol](https://symbl.cc/en/20BD/))

## Чего нехватает

* С учётом того что часто бывают цитаты или названия на других языках, полезно было бы описание для немецкого, английского и испанского языков.


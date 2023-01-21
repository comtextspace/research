# Заметки по поводу схемы ФЗР

Схема базы данных Фроша-Загорского-Радкевичюте (ФЗР-схема) разработана с целью упростить коллективную международную работу над текстами, в первую очередь способствующему развитию теоретического мышления. Детальное описание схемы находится в следующих статьях:

* [О воспитательном значении текстологической работы](https://comtext.space/о_воспитательном_значении_текстологической_работы.html)

* [Что не так с текстологией и как исправить ситуацию](https://comtext.space/что_не_так_с_текстологией_и_как_исправить_ситуацию.html)

* [Технические аспекты цифровой текстологии](https://research.comtext.space/технические-аспекты-текстологии.html)

Надеемся, что следующие размышления могут быть полезны, для поиска путей развития ФЗР-схемы.

[[toc]]

## Стандарты оформления схемы базы данных

Для удобства разработки и использования базы данных применяются соглашение о форматировании кода и соглашение о именовании объектов. Стандарты упрощают понимание кода, так как код становится унифицирован. В некоторых случаях есть общепринятые стандарты, в других стандарт вырабатывается проектом или группой разработчиков.

В качестве стандарта наименований для ФЗР предлагаем следующее:

1\. Название всех объектов базы данных дается на Эсперанто.

2\. Для идентификаторов используется стиль `upper_snake_case`: все символы в нижнем регистре, для разделителей используется символ подчеркивания `_`.

Такой подход позволит избавится от кавычек в коде приложения и скриптах.

Пример, сейчас таблица создается так:

```
CREATE TABLE Lingvoj
(
    ISO 639-3      char(3) PRIMARY KEY,
    Nomo originala text NOT NULL,
    Nomo           text,
    Familio        int  NOT NULL,
    ISO 639-1      char(2),
    CONSTRAINT Lingvoj_Lingva_familioj_FK FOREIGN KEY (Familio) REFERENCES Lingva familioj (Kodo)
);
```

А так в соответствии с этим правилом:

```
CREATE TABLE lingvoj
(
    iso_639_3      char(3) PRIMARY KEY,
    nomo_originala text NOT NULL,
    nomo           text,
    familio        int  NOT NULL,
    iso_639_1      char(2),
    CONSTRAINT lingvoj_lingva_familioj_fk FOREIGN KEY (familio) REFERENCES lingva_familioj (Kodo)
);
```

3\. Все названия должны быть в единственном числе. Это правило связано, с тем, что оно может облегчить чтение схемы на малознакомом языке.

Пример, сейчас таблица создается так:

```
CREATE TABLE Libroj - nomoj
(
    Libro  uuid        NOT NULL,
    Lingvo varchar(3)  NOT NULL,
    Nomo   text        NOT NULL,
    Uzanto varchar(64) NOT NULL DEFAULT user,
    Tempo  timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT Libroj_nomoj_pk PRIMARY KEY (Libro, Lingvo),
    CONSTRAINT Libroj_nomoj_Libroj_FK FOREIGN KEY (Libro) REFERENCES Libroj (Kodo),
    CONSTRAINT Libroj_nomoj_Lingvoj_FK FOREIGN KEY (Lingvo) REFERENCES Lingvoj (ISO 639-3)
);
```

А так в соответствии с этим правилом:

```
CREATE TABLE libro_nomo
(
    libro  uuid        NOT NULL,
    lingvo varchar(3)  NOT NULL,
    nomo   text        NOT NULL,
    uzanto varchar(64) NOT NULL DEFAULT user,
    tempo  timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT libro_nomo_pk PRIMARY KEY (libro, lingvo),
    CONSTRAINT libro_nomo_libroj_fk FOREIGN KEY (libro) REFERENCES libro (kodo),
    CONSTRAINT libro_nomo_lingvoj_fk FOREIGN KEY (lingvo) REFERENCES lingvo (iso_639_3)
);
```

4\. Именование первичных и внешних ключей должно подчинятся следующим правилам:

* Первичные ключи — [название таблицы]_[список полей ключа]_pk
* Внешние ключи — [название таблицы]_[список полей ключа]_pk

Пример, сейчас таблица создается так:

```
CREATE TABLE Paragrafoj - notoj
(
    Paragrafo   uuid        NOT NULL,
    Aŭtora      bool        NOT NULL,
    Kodo_de_Div text        NOT NULL,
    Uzanto      varchar(64) NOT NULL DEFAULT user,
    Tempo       timestamptz NOT NULL DEFAULT now(),
    Fonto       uuid        NOT NULL,
    CONSTRAINT Paragrafoj_notoj_Paragrafoj_FK FOREIGN KEY (Paragrafo) REFERENCES Paragrafoj (Kodo),
    CONSTRAINT Paragrafoj_notoj_Paragrafoj_FK1 FOREIGN KEY (Fonto) REFERENCES Paragrafoj (Kodo)
);
```

А так в соответствии с этим правилом:

```
CREATE TABLE paragrafo_noto
(
    paragrafo   uuid        NOT NULL,
    aŭtora      bool        NOT NULL,
    kodo_de_div text        NOT NULL,
    uzanto      varchar(64) NOT NULL DEFAULT user,
    tempo       timestamptz NOT NULL DEFAULT now(),
    fonto       uuid        NOT NULL,
    CONSTRAINT paragrafo_noto_paragrafo_fk FOREIGN KEY (paragrafo) REFERENCES paragrafo (kodo),
    CONSTRAINT paragrafo_noto_fonto_fk FOREIGN KEY (fonto) REFERENCES paragrafo (kodo)
);
```

5\. Ко всем таблицам и к каждому полю таблицы должны быть обязательные комментарии на Эсперанто. Для полей с внешними ключами рекомендовано указание таблицы на которую ссылается поле.

Комментарии позволяют быстрее разбираться в схеме и будут способствовать изучению языка.

Пример добавления комментариев:

```
COMMENT ON TABLE public.lingvo IS 'Listo de lingvoj';

COMMENT ON COLUMN public.lingvo.nomo_originala IS 'Nomo en originala lingvo';
COMMENT ON COLUMN public.lingvo.nomo IS 'Nomo en Esperanto';
COMMENT ON COLUMN public.lingvo.familio IS 'Lingva familio, ligo al lingva_familio (kodo)';
```

6\. Сейчас для таблиц используется схема `public`, эта схема применяется по умолчанию в PG, если схема явно не указано. При развитии базы данных может быть удобно разделить таблицы на несколько схем. В отдельную схему часто помещают нередактируемые таблицы-справочники (обычно их называют нормативно-справочная информация): справочник языков, справочник стран и тому подобные. Так же в отдельную схему могут быть выделены таблицы не относящиеся напрямую к текстологии но необходимые для работы программы: таблица пользователей, таблица прав доступа и подобные. Разделение таблиц на схемы упрощает понимание общей структуры базы данных и последующее администрирование.



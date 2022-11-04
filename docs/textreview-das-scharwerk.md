---
title: "Текстобзор: Das Scharwerk"
date: "2022-10-15"
categories:
  - "текстология"
tags:
  - "текстобзор"
---

# {{ $frontmatter.title }}

**15.10.2022**

[[toc]]

## Описание

[Das Scharwerk](https://github.com/scharwerk/scharwerk) — программа для вычитки книг сделанная для оцифровки и вычитке Капитала на украинском языке.

Код проекта открыт и находится в [репозитории на GitHub](https://github.com/scharwerk/scharwerk). Описание технических особенностей проекта из репозитория:

> - Rails for backend and Angular 1 for frontend
> - We use github as text storage, and version control system
> - Login via Facebook only
> - For background processing we use Sidekiq(it commits texts to github asynchronously)

Система написана на [Ruby](https://www.ruby-lang.org/en/) с использованием фреймворка [Ruby on Rails](https://rubyonrails.org), для фронта используется [Angular](https://angular.io). Запустить систему не удалось, простого механизма разворачивания в виде [Docker-образа](https://www.docker.com) нет, для ручного разворачивания тоже нет полной документации. Так как рабочего контура в открытом доступе тоже нет, то по внешнему виду можно судить только по скриншоту из репозитория.

![](images\textreview\das-scharwerk\scharwerk_01.jpg)

Внешний вид стандартный для таких систем (похожий, например у [Distributed Proofreaders](textreview-gutenberg.md)) — редактор разделен на две области: скан страницы из книги и область для исправления опечаток. Слева панель с кнопками для быстрого ввода типографических элементов.

Результаты вычитки хранятся на GitHub. Использование [системы контроля версий](https://ru.wikipedia.org/wiki/Система_управления_версиями) для хранения результатов — очень прогрессивный подход.

База данных [PostgreSQL](https://www.postgresql.org) тоже используется в проекте для хранения промежуточных результатов. Схему можно рассмотреть через модели [ORM](https://ru.wikipedia.org/wiki/ORM), размешенные в коде проекта.

```ruby
create_table "pages", force: :cascade do |t|
    t.string   "path"
    t.text     "text"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "task_id"
    t.integer  "status",     default: 0, null: false
  end

  create_table "restrictions", force: :cascade do |t|
    t.integer "user_id"
    t.integer "task_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.integer  "status",     default: 0, null: false
    t.integer  "stage",      default: 0, null: false
    t.integer  "part",       default: 0, null: false
    t.integer  "user_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "order"
    t.string   "path"
    t.integer  "build",      default: 0, null: false
    t.string   "commit_id"
  end
```

Основаня таблица — страницы (`pages`) с полями для хранения адреса скана (`path`) и вычитанного текста (`text`). Таблицы `task` и `restrictions`, вероятно, применяется для управления вычиткой, чтобы у разных участников не пересекались задачи по вычитке или форматированию, возможно, эти таблицы связаны с [issue](https://github.com/marx-in-ua/das-kapital/issues) на Github.

Такая простая схема возможна из-за того что база данных применяется в связке с системой контроля версий. Например, нет необходимости хранить в БД историю изменений, ведь по идентификатору коммита (`commit_id`) можно сделать ссылку по которой будут видны различия в двух версиях через GitHub.

Вычитка происходит в формате [LaTeX](https://ru.wikipedia.org/wiki/LaTeX). Этот подход хорош, если поставлена задача получить хороший PDF файл подходящий для печати или публикации. LaTeX ближе к [облегченным форматам разметки](технические-аспекты-текстологии.md) чем HTML и его недостатком для текстологической работы является только значительная концентрация на визуальном оформлении, необходимая только если требуется печать книги.

Краткое описание рабочего процесса по вычитке из репозитория:

> Book digitization workflow::
>
> 1. Set up. Admin load book screenshots and raw scanned text.
> 2. Proof reading. On this stage, users compare text in editor with scans.
> 3. Latex markup. The text editor contain basic latex commands, for more specific tasks like tables use pure latex.

## Результаты работы

Результаты работы находятся [отдельном репозитории](https://github.com/marx-in-ua/das-kapital). В [каталоге tex](https://github.com/marx-in-ua/das-kapital/tree/master/tex) находятся исходники книг в LaTeX, там же есть файл [readme.md](https://github.com/marx-in-ua/das-kapital/blob/master/tex/README.md) с инструкцией по сборке PDF. Для сборки используется [образ с Docker с LaTeX](https://github.com/blang/latex-docker) и сборка автоматизирована с помощью bash-скриптов. Три тома капитала удалось успешно собрать по описанной в readme инструкции.

Фрагменты из готовых PDF:

![](images\textreview\das-scharwerk\scharwerk_pdf_01.png)

![](images\textreview\das-scharwerk\scharwerk_pdf_02.png)

![](images\textreview\das-scharwerk\scharwerk_pdf_03.png)

![](images\textreview\das-scharwerk\scharwerk_pdf_04.png)

![](images\textreview\das-scharwerk\scharwerk_pdf_05.png)

![](images\textreview\das-scharwerk\scharwerk_pdf_06.png)

Проделанная работа посвящена [Андрею Речицкому](https://ru.wikipedia.org/wiki/Писоцкий,_Анатолий_Андреевич).

> Андрію Річицькому
>
> Присвячується Андрію Річицькому (справжнє ім’я — Пісоцький Анатолій Андрійович), видатному українському вченому, перекладачеві та політичному діячу. В 1920-х роках він почав працювати над першим і єдиним українським перекладом «Капіталу» Маркса з німецької, проте встиг завершити лише перший том. Репресований у 1934 році, після чого його ім’я не згадувалося у наступних виданнях «Капіталу» зовсім, попри те, що вони базувалися на його роботі. Був реабілітований у 1990.

Книги выглядят почти законченными. Корректировка ещё продолжается: есть [незакрытые задачи](https://github.com/marx-in-ua/das-kapital/issues) и свежие коммиты (на октябрь 2022).

Несмотря на наличие инструкции для сборки PDF, оформление репозитория с книгами имеет проблемы: ясные только авторам пометки TODO, файлы нужные только для экспериментов, отсутствует инструкция для тех кто хочет присоединиться к работе. Вероятно, как и для основного репозитория, это связано с отсутствием необходимости привлекать сторонних людей к проекту.

## Заключение

Техническая составляющая Das Scharwerk значительно лучше развита чем у большинства аналогичных проектов: используются современные и подходящие технологии. Более того, по сравнению со сходным проектом [Весь Тостой в один клик](textreview-tolstoy.md), видно что авторы хотят получить качественный общественнополезный результат, а не просто выполнить проект поставленный руководством.

Ограничениями текущего проекта является его направленность на одну книгу — оцифровку Капитала. Из этого исходят недостаточная документированность, отсутствие инструкций для новых участников. Если доработать систему Das Scharwerk для более простого разворачивания и оформить документацию, то, скорее всего, она может быть полезной для сходных задач — получение вычитанных копий книг или журналов в LaTeX с целью дальнейшего распространения или печати.

Один из особых недостатков — использование Facebook для размещения материалов связанных с проектом (посмотреть их не удалось) и для авторизации в системе. Труд, направленный на обобществление результатов труда, должен как можно меньше зависеть от закрытых компонентов не говоря уже о требования к информационной безопасности.

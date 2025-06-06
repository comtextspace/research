---
title: "Текстобзор: Федеральная Резервная Система Банков Знаний"
date: "2022-11-25"
categories:
  - "текстология"
tags:
  - "текстобзор"
---

# {{ $frontmatter.title }}

Федеральная Резервная Система Банков Знаний (ФРСБЗ) — проект по каталогизации и резервному копированию цифровых ресурсов, включающие в себя сканированные книги и журналы. Проект начал работу в 2016 году[^1]. Техническую часть проекта реализовывал [НЭИКОН](https://neicon.ru)[^1].

У проекта два доменных имени: [nooregistry.ru](https://nooregistry.ru) и [nooregistry.ru](https://noosphere.ru). В чем их различие неизвестно. Оба сайта скорее не работают чем работают: большинство страниц не открывается, ссылки неверные, регистрация не работает.

Декларируемые цели проекта следующие:

> Система должна обеспечить:
>
> - Упорядочивание массивов открытой информации через идентификацию;
> - Стабилизацию произведений в открытом доступе через репликацию.[^2]

Схема достижения этих целей следующая: информационные хранилища, такие как [Викитека](textreview-wikisource.md) и другие библиотеки подключаются к системе. Каждому информационному ресурсу присваивается уникальный идентификатор «Russian Archive Identifier (RAI)», загружаются метаданные объектов и формируется каталог. Кроме того каждый объект загружаются на ресурсы ФРСБЗ и хранится на них в качестве резервной копии. Такой подход призван обеспечить единый каталог всех ресурсов и восстановление информации в случае потери исходного источника данных.

Идеи хорошие, но было ли сделано хоть что-то полезное при их реализации остаётся неизвестным.

Кроме каталога ресурсов, который сейчас не функционирует, на сайтах располагается каталог авторов и калькулятор авторского права.

Каталог авторов представляет из себя простую базу данных с указанием годов жизни и минимальной информации об авторах. В таком примитивном виде полезность каталога сомнительная, с учетом более развитых каталогов, например, на [Wikidata](https://www.wikidata.org) или просто на [Википедии](https://ru.wikipedia.org/wiki/Заглавная_страница).

![wikisource_01.png](/images/textreview/nooregistry/nooregistry01.png)

[Калькулятор общественного достояния](https://noosphere.ru/calc) более интересен. По имени автора можно получить информацию находятся ли его произведения в общественном достоянии. Точность калькулятора неизвестна, исходного кода в открытом доступе нет.

![wikisource_01.png](/images/textreview/nooregistry/nooregistry02.png)

![wikisource_01.png](/images/textreview/nooregistry/nooregistry03.png)

Проект финансируется на государственные деньги, об этом указано почти на каждой странице сайта.

> Поддержка и развитие платформы осуществляются в рамках проекта Цифровая платформа "Ноосфера" с использованием гранта Президента Российской Федерации на развитие гражданского общества, предоставленного Фондом президентских грантов.[^2]

> Калькулятор реализован в рамках проекта Ассоциации интернет-издателей "Ноосфера. Запуск". При реализации проекта используются средства государственной поддержки, выделенные в качестве гранта в соответствии c распоряжением Президента Российской Федерации от 05.04.2016 №68-рп и на основании конкурса, проведенного Общероссийской общественной организацией «Российский Союз Молодежи».[^3]

## Заключение

С учетом неработающих сайтов и отсутствия новостей после о проекте после его запуска, можно предположить, что проект в целом оказался не удачным и больше не развивается. С учетом государственного финансирования, возможно, целей развития у проекта не было изначально.

Возможно, для практических целей был бы полезен калькулятор общественного достояния, если бы его исходники находились в открытом доступе.

[^1]: [Ноосферу запустили](https://ru.wikinews.org/wiki/Ноосферу_запустили)
[^2]: [Ноосфера. Идеи и цели проекта](https://noosphere.ru/about_ideas)
[^3]: [Калькулятор правового статуса](https://noosphere.ru/calc)

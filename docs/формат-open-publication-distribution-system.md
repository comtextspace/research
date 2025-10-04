# Формат Open Publication Distribution System (OPDS)

**04.10.2025**

Формат [OPDS](https://ru.wikipedia.org/wiki/OPDS) используется онлайн-библиотеками для распространения информации о книгах. Каталог в этом формате загружается в приложения для чтения — например, в FBReader, — и позволяет скачивать книги прямо из приложения. OPDS изначально создавался и для платного распространения контента, но подходит и для свободного распространения книг.

Упрощённо говоря, OPDS — это XML-файл с названием библиотеки и списком книг. Для каждой книги указаны название, обложка, краткое описание и ссылка на скачивание. Пример OPDS каталога:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/terms/" xmlns:opds="http://opds-spec.org/2010/catalog">
  <title>My Catalog</title>
  <entry>
    <title>A book</title>
    <updated>2025-10-04T11:17:29.421Z</updated>
    <link href="/img/image.png" rel="http://opds-spec.org/image" type="image/png"/>
    <link href="/files/book.fb2" rel="http://opds-spec.org/acquisition/open-access" type="application/fb2+xml"/>
    <author>
      <name>Aaron O'Mullan</name>
    </author>
  </entry>
</feed>
```

Такой файл можно генерировать динамически или при сборке статического сайта. XML можно формировать напрямую или с помощью библиотек. Например, для Node.js подойдёт библиотека [opds](https://github.com/GitbookIO/node-opds). Пример её использования:

```js
import opds from "opds";
import fs from "fs";

var xml = opds.create({
    title: "My Catalog",
    books: [
        {
            title: "A book",
            updated: new Date(),
            authors: [
                {
                    name: "Aaron O'Mullan",
                }
            ],
            links: [
                {
                    rel: "image",
                    href: "/img/image.png",
                    type: "image/png"
                },
                {
                    rel: "acquisition/open-access",
                    href: "/files/book.fb2",
                    type: "application/fb2+xml"
                }
            ],
        }
    ]
});

// Сохраняем XML-строку в файл catalog.opds
fs.writeFileSync("catalog.opds", xml);
```

## Ссылки

* [opds.io](https://opds.io/index.html) — официальный сайт формата и спецификация  
* [Зачем нужны и как работают электронные каталоги OPDS](https://habr.com/en/companies/maccentre/articles/412355/)  
* [awesome-opds](https://github.com/opds-community/awesome-opds)

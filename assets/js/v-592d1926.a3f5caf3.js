"use strict";(self.webpackChunkalgorithms_way23_ru=self.webpackChunkalgorithms_way23_ru||[]).push([[3443],{6606:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-592d1926","path":"/pandoc-citations.html","title":"Pandoc. Оформление цитат и библиографии","lang":"ru-RU","frontmatter":{"title":"Pandoc. Оформление цитат и библиографии","date":"2022-12-06","categories":["Программы"],"tags":["pandoc"]},"excerpt":"","headers":[{"level":2,"title":"Разметка цитат","slug":"разметка-цитат","link":"#разметка-цитат","children":[]},{"level":2,"title":"Библиографические данные","slug":"библиографические-данные","link":"#библиографические-данные","children":[]},{"level":2,"title":"Файл со стилем CSL","slug":"фаил-со-стилем-csl","link":"#фаил-со-стилем-csl","children":[]},{"level":2,"title":"Ссылки","slug":"ссылки","link":"#ссылки","children":[]}],"git":{"updatedTime":1670266699000},"filePathRelative":"pandoc-citations.md"}')},5989:(a,n,s)=>{s.r(n),s.d(n,{default:()=>g});var e=s(6252),t=s(3577);const i={id:"frontmatter-title",tabindex:"-1"},o=(0,e._)("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=(0,e.uE)('<p>Pandoc может оформлять цитаты и ссылки на библиографию с использованием Citations Style Language. Режим автоматической обработки библиографии включается опцией <code>--citeproc</code> (<code>-C</code>).</p><p>Для добавления ссылок на библиографию нужны три действия:</p><ul><li>Разметить цитаты в документе</li><li>Подготовить файл с библиографическими данными</li><li>Выбрать CSL-стиль</li></ul><h2 id="разметка-цитат" tabindex="-1"><a class="header-anchor" href="#разметка-цитат" aria-hidden="true">#</a> Разметка цитат</h2><p>Для ссылки не элемент библиографии используются квадратные скобки и следующий синтаксис:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Blah blah [@doe99; @smith2000; @smith2004].\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Часть после символа <code>@</code> — идентификатор библиографической записи из файла с библиографией. Точка с запятой отделяют несколько элементов в одной ссылке.</p><p>Способ отображения такой ссылки будет зависеть от CSL-стиля. При использовании стиля автор-дата ссылка будет выглядеть так:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Blah blah (Doe 1999, Smith 2000, 2004).\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>А в стиле с примечаниями так:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Blah blah.[^1]\n\n[^1]:  John Doe, &quot;Frogs,&quot; *Journal of Amphibians* 44 (1999); Susan Smith, &quot;Flies,&quot; *Journal of Insects* (2000); Susan Smith, &quot;Bees,&quot; *Journal of Insects* (2004).\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Дополнительно, в квадратных скобках может быть указан префикс, локатор и суффикс:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[смотри @adlerKakChitatKnigi2020 стр. 4 и другие книги автора]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>смотри</code> — префикс</li><li><code>стр. 4</code> — локатор</li><li><code>и другие книги автора</code> — суффикс</li></ul><p>Локатор используется для указания страниц, глав или других элементов книги. Локатор приводится к виду указанному в файле со стилем с использованием файлов локализации. Файлы локализации нужны, так как для разных языков может быть разных набор локаторов, например, могут использоваться <code>стр.</code> для русского языка и <code>page</code> для английского. Префикс и суффикс указывают произвольную дополнительную информацию.</p><p>Такая ссылка может быть преобразована в такой вид:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[смотри Адлер, 2020, с. 4 и другие книги автора]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="библиографические-данные" tabindex="-1"><a class="header-anchor" href="#библиографические-данные" aria-hidden="true">#</a> Библиографические данные</h2>',18),p=(0,e._)("code",null,"bibliography",-1),r=(0,e._)("code",null,"--bibliography",-1),c=(0,e.uE)('<p>Поддерживается несколько форматов</p><table><thead><tr><th>Формат</th><th>Расширение файла</th></tr></thead><tbody><tr><td>BibLaTeX</td><td>.bib</td></tr><tr><td>BibTeX</td><td>.bibtex</td></tr><tr><td>CSL JSON</td><td>.json</td></tr><tr><td>CSL YAML</td><td>.yaml</td></tr><tr><td>RIS</td><td>.ris</td></tr></tbody></table><p>Пример файла с библиографией в CLS JSON:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;adlerKakChitatKnigi2020&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;МИФ&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Как читать книги&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Адлер&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;given&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Мортимер&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;issued&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;date-parts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">[</span>\n                    <span class="token string">&quot;2020&quot;</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;engelsLyudvigFeyerbahKonec1888&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Людвиг Фейербах и конец классической немецкой философии&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n                <span class="token property">&quot;family&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Энгельс&quot;</span><span class="token punctuation">,</span>\n                <span class="token property">&quot;given&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Фридрих&quot;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;issued&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">&quot;date-parts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">[</span>\n                    <span class="token string">&quot;1888&quot;</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Идентификаторы книг в этом формате задаются в полях <code>id</code> объектов:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;id&quot;: &quot;adlerKakChitatKnigi2020&quot;,\n...\n&quot;id&quot;: &quot;engelsLyudvigFeyerbahKonec1888&quot;,\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда для запуска pandoc с использованием файла с библиографией:</p><h2 id="фаил-со-стилем-csl" tabindex="-1"><a class="header-anchor" href="#фаил-со-стилем-csl" aria-hidden="true">#</a> Файл со стилем CSL</h2>',8),d=(0,e._)("code",null,"--csl",-1),u={href:"https://www.chicagomanualofstyle.org/home.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/citation-style-language/styles",target:"_blank",rel:"noopener noreferrer"},m=(0,e.uE)('<ul><li><code>gost-r-7-0-5-2008.csl</code></li><li><code>gost-r-7-0-5-2008-numeric.csl</code></li><li><code>gost-r-7-0-5-2008-numeric-alphabetical.csl</code></li></ul><p>Исходный файл <code>book.md</code>:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Lorem ipsum</span>\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque.[@engelsLyudvigFeyerbahKonec1888]\n\nAliquam malesuada bibendum arcu vitae elementum curabitur vitae. Pretium quam vulputate dignissim suspendisse in est ante [@adlerKakChitatKnigi2020]. Nisl tincidunt eget nullam non nisi est sit. Viverra justo nec ultrices dui. Dui id ornare arcu odio ut sem nulla pharetra [смотри @adlerKakChitatKnigi2020 стр. 4 и другие книги автора]. Morbi tempus iaculis urna id volutpat lacus laoreet non. Hac habitasse platea dictumst quisque sagittis purus sit amet.\n\n<span class="token title important"><span class="token punctuation">##</span> Библиография</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команды для запуска pandoc:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pandoc book.md <span class="token parameter variable">--citeproc</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-o</span> book1.rtf <span class="token parameter variable">--bibliography</span><span class="token operator">=</span>bib.json <span class="token parameter variable">--csl</span><span class="token operator">=</span>gost-r-7-0-5-2008.csl\n\npandoc book.md <span class="token parameter variable">--citeproc</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-o</span> book2.rtf <span class="token parameter variable">--bibliography</span><span class="token operator">=</span>bib.json <span class="token parameter variable">--csl</span><span class="token operator">=</span>gost-r-7-0-5-2008-numeric.csl\n\npandoc book.md <span class="token parameter variable">--citeproc</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-o</span> book3.rtf <span class="token parameter variable">--bibliography</span><span class="token operator">=</span>bib.json <span class="token parameter variable">--csl</span><span class="token operator">=</span>gost-r-7-0-5-2008-numeric-alphabetical.csl\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Получаем три варианта отображения библиографии.</p><p><img src="images/pandoc/pandoc_citeproc_01.png" alt="Пример стиля gost-r-7-0-5-2008.csl"></p><p><img src="images/pandoc/pandoc_citeproc_02.png" alt="Пример стиля gost-r-7-0-5-2008-numeric.csl"></p><p><img src="images/pandoc/pandoc_citeproc_03.png" alt="Пример стиля gost-r-7-0-5-2008-numeric-alphabetical.csl"></p><h2 id="ссылки" tabindex="-1"><a class="header-anchor" href="#ссылки" aria-hidden="true">#</a> Ссылки</h2>',10),b={href:"https://pandoc.org/MANUAL.html#citations",target:"_blank",rel:"noopener noreferrer"},k={},g=(0,s(3744).Z)(k,[["render",function(a,n){const s=(0,e.up)("RouterLink"),k=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("h1",i,[o,(0,e.Uk)(" "+(0,t.zw)(a.$frontmatter.title),1)]),l,(0,e._)("p",null,[(0,e.Uk)("Библиографические данные — список книги или других материалов на которых даны ссылки в документе. Библиографические данные можно предоставить через поле "),p,(0,e.Uk)(" в "),(0,e.Wm)(s,{to:"/pandoc-metadata.html"},{default:(0,e.w5)((()=>[(0,e.Uk)("метеоданных")])),_:1}),(0,e.Uk)(" или через файл переданный в опции "),r,(0,e.Uk)(" при запуске Pandoc.")]),c,(0,e._)("p",null,[(0,e.Uk)("Способ форматирования цитат определяется файлом CSL-стиля. Файл задаётся опцией "),d,(0,e.Uk)(". Если файл не указать, то используется стиль по умочанию "),(0,e._)("a",u,[(0,e.Uk)("Chicago Manual of Style"),(0,e.Wm)(k)]),(0,e.Uk)(" (author-date format).")]),(0,e._)("p",null,[(0,e.Uk)("Для примера рассмотрим три стиля из "),(0,e._)("a",v,[(0,e.Uk)("репозитория стилей"),(0,e.Wm)(k)]),(0,e.Uk)(":")]),m,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",b,[(0,e.Uk)("Pandoc — Pandoc User’s Guide — Citations"),(0,e.Wm)(k)])])])])}]])}}]);
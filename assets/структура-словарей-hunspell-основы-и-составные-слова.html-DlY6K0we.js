import{_ as c,c as d,b as p,a as s,d as e,w as i,r,o as t,e as l}from"./app-3vC-laG6.js";const o={},u={class:"table-of-contents"};function v(m,n){const a=r("router-link");return t(),d("div",null,[n[11]||(n[11]=p(`<h1 id="структура-словареи-hunspell-основы-и-составные-слова" tabindex="-1"><a class="header-anchor" href="#структура-словареи-hunspell-основы-и-составные-слова"><span>Структура словарей Hunspell: основы и составные слова</span></a></h1><p><strong>06.09.2025</strong></p><p>Простейший способ проверки орфографии — составить словарь из правильных слов и проверять каждое слово на вхождение в этот список. Однако такой подход неудобен и неуниверсален: количество слов слишком велико. Например, одно и то же слово может иметь разные формы: <code>дом</code> и <code>дома</code>. Другой пример: слово <code>дом</code> будет считаться правильным даже с заглавной буквы (<code>Дом</code>), если оно стоит в начале предложения, а вот имя <code>Василий</code> должно писаться с большой буквы в любом случае. Эти и другие особенности затрудняют использование словаря в виде простого списка слов.</p><p>Библиотека <a href="https://hunspell.github.io" target="_blank" rel="noopener noreferrer">Hunspell</a> (<a href="https://ru.wikipedia.org/wiki/Hunspell" target="_blank" rel="noopener noreferrer">Википедия — Hunspell</a>) позволяет проверять орфографию с учётом морфологии и предлагает дополнительные возможности.</p><p>Словари Hunspell состоят из двух файлов: файла со словами (<code>.dic</code>) и файла с правилами (файл аффиксов <code>.aff</code>). Существует <a href="https://mozilla-russia.org/projects/dictionary/hunspell.html" target="_blank" rel="noopener noreferrer">перевод документации по формату словарей</a>, а также более полная документация в <a href="https://github.com/hunspell/hunspell/tree/master/man" target="_blank" rel="noopener noreferrer">репозитории Hunspell</a>. Далее приведены примеры работы некоторых команд из этой документации, а также ссылки на реальные словари, использующие эти команды — в основном из <a href="https://github.com/LibreOffice/dictionaries" target="_blank" rel="noopener noreferrer">репозитория LibreOffice</a>.</p><p>Для генерации примеров используется библиотека Python <a href="https://github.com/pyhunspell/pyhunspell" target="_blank" rel="noopener noreferrer">pyhunspell</a> и следующий код.</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">import</span> sys</span>
<span class="line"><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> hunspell</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">check_spelling_with_hunspell</span><span class="token punctuation">(</span></span>
<span class="line">    aff_path<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;custom.aff&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    dic_path<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;custom.dic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    words_file<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;words.txt&quot;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    aff_path <span class="token operator">=</span> Path<span class="token punctuation">(</span>aff_path<span class="token punctuation">)</span></span>
<span class="line">    dic_path <span class="token operator">=</span> Path<span class="token punctuation">(</span>dic_path<span class="token punctuation">)</span></span>
<span class="line">    words_path <span class="token operator">=</span> Path<span class="token punctuation">(</span>words_file<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Чтение и вывод содержимого .aff</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;.aff &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>aff_path<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment"># Чтение и вывод содержимого .dic</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;.dic&quot;</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">*</span> <span class="token number">50</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>dic_path<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-&quot;</span> <span class="token operator">*</span> <span class="token number">55</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    checker <span class="token operator">=</span> hunspell<span class="token punctuation">.</span>HunSpell<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>dic_path<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>aff_path<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Чтение слов для проверки</span></span>
<span class="line">    words_to_check <span class="token operator">=</span> words_path<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    words_to_check <span class="token operator">=</span> <span class="token punctuation">[</span>w<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> w <span class="token keyword">in</span> words_to_check <span class="token keyword">if</span> w<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># Проверка каждого слова</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Проверка слов:&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> word <span class="token keyword">in</span> words_to_check<span class="token punctuation">:</span></span>
<span class="line">        is_correct <span class="token operator">=</span> checker<span class="token punctuation">.</span>spell<span class="token punctuation">(</span>word<span class="token punctuation">)</span></span>
<span class="line">        status <span class="token operator">=</span> <span class="token string">&quot;✅&quot;</span> <span class="token keyword">if</span> is_correct <span class="token keyword">else</span> <span class="token string">&quot;❌&quot;</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>word<span class="token punctuation">}</span></span><span class="token string"> — </span><span class="token interpolation"><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">del</span> checker</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>В каждом примере показано содержимое файлов <code>aff</code> и <code>dic</code>, а также несколько слов для проверки. В отдельных местах приведены цитаты из документации.</p>`,8)),s("nav",u,[s("ul",null,[s("li",null,[e(a,{to:"#минимальныи-словарь"},{default:i(()=>n[0]||(n[0]=[l("Минимальный словарь")])),_:1})]),s("li",null,[e(a,{to:"#учет-регистра-символов"},{default:i(()=>n[1]||(n[1]=[l("Учёт регистра символов")])),_:1})]),s("li",null,[e(a,{to:"#keepcase"},{default:i(()=>n[2]||(n[2]=[l("KEEPCASE")])),_:1})]),s("li",null,[e(a,{to:"#небуквенные-символы"},{default:i(()=>n[3]||(n[3]=[l("Небуквенные символы")])),_:1})]),s("li",null,[e(a,{to:"#break"},{default:i(()=>n[4]||(n[4]=[l("BREAK")])),_:1})]),s("li",null,[e(a,{to:"#ignore"},{default:i(()=>n[5]||(n[5]=[l("IGNORE")])),_:1})]),s("li",null,[e(a,{to:"#iconv"},{default:i(()=>n[6]||(n[6]=[l("ICONV")])),_:1})]),s("li",null,[e(a,{to:"#compoundflag"},{default:i(()=>n[7]||(n[7]=[l("COMPOUNDFLAG")])),_:1})]),s("li",null,[e(a,{to:"#compoundmin"},{default:i(()=>n[8]||(n[8]=[l("COMPOUNDMIN")])),_:1})]),s("li",null,[e(a,{to:"#onlyincompound"},{default:i(()=>n[9]||(n[9]=[l("ONLYINCOMPOUND")])),_:1})]),s("li",null,[e(a,{to:"#compoundrule"},{default:i(()=>n[10]||(n[10]=[l("COMPOUNDRULE")])),_:1})])])]),n[12]||(n[12]=p(`<h2 id="минимальныи-словарь" tabindex="-1"><a class="header-anchor" href="#минимальныи-словарь"><span>Минимальный словарь</span></a></h2><p>Файл <code>.aff</code> обязательно должен содержать указание кодировки. Лучше использовать <code>UTF-8</code>. Если других правил в <code>.aff</code> нет, слова из <code>.dic</code> будут проверяться на точное совпадение.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">1</span>
<span class="line">сюртук</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">сюртук — ✅</span>
<span class="line">сюртуки — ❌</span>
<span class="line">холст — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>SET</code> кодировка</p><p>Устанавливает кодировку символов для слов и морфем в файлах словаря и аффиксов. Поддерживаемые значения: <code>UTF-8</code>, <code>ISO8859−1</code>–<code>ISO8859−10</code>, <code>ISO8859−13</code>–<code>ISO8859−15</code>, <code>KOI8-R</code>, <code>KOI8-U</code>, <code>microsoft-cp1251</code>, <code>ISCII-DEVANAGARI</code>.</p></blockquote><p>В большинстве словарей используется кодировка UTF-8. Примеры словарей с другой кодировкой: <a href="https://github.com/LibreOffice/dictionaries/tree/master/de" target="_blank" rel="noopener noreferrer"><code>de_DE_frami</code></a> и <a href="https://github.com/LibreOffice/dictionaries/tree/master/pl_PL" target="_blank" rel="noopener noreferrer"><code>pl_PL.dic</code></a>.</p><h2 id="учет-регистра-символов" tabindex="-1"><a class="header-anchor" href="#учет-регистра-символов"><span>Учёт регистра символов</span></a></h2><p>Если слово в словаре указано строчными буквами, оно будет считаться правильным даже при написании с заглавной буквы. Если же слово начинается с прописной, оно будет правильным только при таком же написании. Любое слово, написанное полностью заглавными буквами, будет признано корректным.</p><p>Эта особенность используется для проверки имён собственных.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">2</span>
<span class="line">сюртук</span>
<span class="line">Василий</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">сюртук — ✅</span>
<span class="line">Сюртук — ✅</span>
<span class="line">СЮРТУК — ✅</span>
<span class="line">сЮртук — ❌</span>
<span class="line">Василий — ✅</span>
<span class="line">ВАСИЛИЙ — ✅</span>
<span class="line">василий — ❌</span>
<span class="line">вАсилий — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keepcase" tabindex="-1"><a class="header-anchor" href="#keepcase"><span>KEEPCASE</span></a></h2><p>Чтобы задать особое поведение для конкретных слов, в <code>.aff</code>-файле объявляются специальные флаги, которые затем применяются к словам в <code>.dic</code> через символ <code>/</code>.</p><p>В следующем примере директива <code>KEEPCASE</code> объявляет флаг <code>K</code>, который затем добавляется к двум словам в <code>.dic</code>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">KEEPCASE K</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">2</span>
<span class="line">сюртук/K</span>
<span class="line">iPhone/K</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">сюртук — ✅</span>
<span class="line">Сюртук — ❌</span>
<span class="line">СЮРТУК — ❌</span>
<span class="line">iPhone — ✅</span>
<span class="line">IPHONE — ❌</span>
<span class="line">iphone — ❌</span>
<span class="line">iPhOne — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>KEEPCASE</code> флаг</p><p>Для слов, отмеченных флагом <code>KEEPCASE</code>, запрещается образование форм в верхнем регистре и форм, начинающихся с прописной буквы. Полезно для специальных орфографий (в которых единицы измерений и символы валют не изменяют регистр даже в текстах, состоящих из прописных букв) и систем написания (например, для сохранения нижнего регистра символов IPA).</p></blockquote><p>Команда используется в словарях <a href="https://github.com/LibreOffice/dictionaries/tree/master/de" target="_blank" rel="noopener noreferrer"><code>de_DE_frami</code></a> и <a href="https://github.com/LibreOffice/dictionaries/tree/master/fr_FR" target="_blank" rel="noopener noreferrer"><code>fr</code></a>.</p><h2 id="небуквенные-символы" tabindex="-1"><a class="header-anchor" href="#небуквенные-символы"><span>Небуквенные символы</span></a></h2><p>В словах могут встречаться небуквенные символы: апостроф (<code>’</code>), дефис (<code>-</code>), цифры и другие. С их помощью в словарь можно добавлять составные слова и сокращения.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">5</span>
<span class="line">абстрактно-общее</span>
<span class="line">Д’Аржансон</span>
<span class="line">Д.</span>
<span class="line">м.</span>
<span class="line">Agent007</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">абстрактно-общее — ✅</span>
<span class="line">Д’Аржансон — ✅</span>
<span class="line">Д&#39;Аржансон — ❌</span>
<span class="line">Д. — ✅</span>
<span class="line">Д — ❌</span>
<span class="line">М. — ✅</span>
<span class="line">Agent007 — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Слова в словаре могут содержать символ <code>/</code>, но его нужно экранировать, так как он служит разделителем между словом и флагами.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">1</span>
<span class="line">и\\/или</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">и/или — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Файл словаря (<code>.dic</code>) содержит список слов, по одному слову в строке. В первой строке словарей (за исключением персональных словарей) указывается приблизительное количество слов в словаре (для оптимального распределения памяти). После каждого слова может следовать слэш (&quot;/&quot;) и один или более флагов, соответствующих аффиксам и атрибутам. Слова в словаре также могут содержать слэши, экранированные &quot;\\/&quot;. По умолчанию, флаг представляет собой один (обычно, алфавитный) символ. В файле словаря Hunspell также может существовать поле для морфологического описания, отделяемое табуляцией.</p></blockquote><h2 id="break" tabindex="-1"><a class="header-anchor" href="#break"><span>BREAK</span></a></h2><p>Hunspell умеет проверять составные слова, образованные из простых. В русском языке такие слова могут соединяться через дефис (<code>-</code>) или косую черту (<code>/</code>). Проверим, как это работает.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">5</span>
<span class="line">и</span>
<span class="line">или</span>
<span class="line">либо</span>
<span class="line">абстрактно</span>
<span class="line">общее</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">и/или — ❌</span>
<span class="line">либо/либо — ❌</span>
<span class="line">абстрактно-общее — ✅</span>
<span class="line">конкретно-общее — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Дефис работает, а косая черта — нет. Список символов-разделителей можно задать с помощью команды <code>BREAK</code>.</p><blockquote><p><code>BREAK</code> количество_определений_разделений <code>BREAK</code> символ_или_последовательность_символов</p><p>Определяет точку для разделения слова и проверку полученных частей по отдельности. Полезно для сложносоставных слов, объединенных с помощью одного символа или последовательности символов (например, дефис в английском и немецком или дефис и короткое тире в венгерском языках). Тире не рекомендуется использовать как точку для разбиения слов, т.к. сложносоставные слова с тире могут содержать неправильные части. Используя <code>BREAK</code>, Hunspell может проверить обе части сложносоставных слов, разделяя слова по обычным и коротким тире:</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">BREAK 2</span>
<span class="line">BREAK /</span>
<span class="line">BREAK -</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">5</span>
<span class="line">и</span>
<span class="line">или</span>
<span class="line">либо</span>
<span class="line">абстрактно</span>
<span class="line">общее</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">и/или — ✅</span>
<span class="line">либо/либо — ✅</span>
<span class="line">абстрактно-общее — ✅</span>
<span class="line">конкретно-общее — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда используется в словарях <a href="https://github.com/LibreOffice/dictionaries/tree/master/de" target="_blank" rel="noopener noreferrer"><code>de_DE_frami</code></a>, <a href="https://github.com/LibreOffice/dictionaries/tree/master/fr_FR" target="_blank" rel="noopener noreferrer"><code>fr</code></a>, <a href="https://github.com/mrakia/hunspell-ancient-greek" target="_blank" rel="noopener noreferrer"><code>grc_GR</code></a>.</p><h2 id="ignore" tabindex="-1"><a class="header-anchor" href="#ignore"><span>IGNORE</span></a></h2><p>Иногда полезно исключить из проверки определённые символы. Рассмотрим пример: в словаре есть несколько слов, некоторые из которых указаны с ударением.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">3</span>
<span class="line">большим</span>
<span class="line">что́</span>
<span class="line">что</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">большим — ✅</span>
<span class="line">бо́льшим — ❌</span>
<span class="line">что́ — ✅</span>
<span class="line">что — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Слова с ударением проверяются корректно. Слово <code>бо́льшим</code> определяется как ошибочное, потому что в словаре нет его версии с ударением. Удобно игнорировать символ ударения при проверке, чтобы не дублировать все слова.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">IGNORE ́</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">2</span>
<span class="line">большим</span>
<span class="line">что</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">большим — ✅</span>
<span class="line">бо́льшим — ✅</span>
<span class="line">что́ — ✅</span>
<span class="line">что — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Символ ударения игнорируется (удаляется) при проверке, поэтому как слова с ударением, так и без него, распознаются как правильные.</p><p>Команда используется в словаре <a href="https://github.com/LibreOffice/dictionaries/tree/master/uk_UA" target="_blank" rel="noopener noreferrer"><code>uk_UA</code></a>.</p><h2 id="iconv" tabindex="-1"><a class="header-anchor" href="#iconv"><span>ICONV</span></a></h2><p>Команда <code>ICONV</code> определяет замены во входных данных перед проверкой по словарю. Например, в тексте может использоваться неправильный апостроф (<code>&#39;</code>) вместо правильного (<code>’</code>). В таком случае слово будет признано ошибочным.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">1</span>
<span class="line">Д’Аржансон</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">Д&#39;Аржансон — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>При замене символа <code>&#39;</code> на <code>’</code> с помощью <code>ICONV</code> слово определяется верно.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">ICONV 1</span>
<span class="line">ICONV &#39; ’</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">1</span>
<span class="line">Д’Аржансон</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">Д&#39;Аржансон — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Однако в данном случае замена апострофа может быть не самой удачной стратегией — она скрывает ошибочное использование символа.</p><p>Команда используется в словаре <a href="https://github.com/LibreOffice/dictionaries/tree/master/uk_UA" target="_blank" rel="noopener noreferrer"><code>uk_UA</code></a>. Там она применяется особым образом: в качестве символа замены указан <code>0</code>, что означает удаление. Из-за этого словарь игнорирует некоторые символы, что может приводить к ложному признанию слов правильными. Эта особенность может влиять на системы, использующие несколько словарей разных языков.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">ICONV 6</span>
<span class="line">ICONV a 0</span>
<span class="line">ICONV b 0</span>
<span class="line">ICONV c 0</span>
<span class="line">ICONV d 0</span>
<span class="line">ICONV e 0</span>
<span class="line">ICONV f 0</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">1</span>
<span class="line">холст</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">bbbхолст — ❌</span>
<span class="line">aba — ✅</span>
<span class="line">abaz — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compoundflag" tabindex="-1"><a class="header-anchor" href="#compoundflag"><span>COMPOUNDFLAG</span></a></h2><p>Hunspell позволяет создавать правила формирования составных слов из базовых. Это сложный функционал, реализованный набором директив. Директива <code>COMPOUNDFLAG</code> объявляет флаг, помеченные которым слова могут входить в составные слова в любом порядке.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">COMPOUNDFLAG C</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">3</span>
<span class="line">само/C	</span>
<span class="line">кат/C</span>
<span class="line">лёт</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">само — ✅</span>
<span class="line">лёт — ✅</span>
<span class="line">кат — ✅</span>
<span class="line">самокат — ✅</span>
<span class="line">самолёт — ❌</span>
<span class="line">катсамо — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>COMPOUNDFLAG</code> флаг</p><p>Слова, отмеченные <code>COMPOUNDFLAG</code>, могут являться частью составного слова (за исключением случаев, когда слово имеет длину меньшую, чем указано в <code>COMPOUNDMIN</code>). Аффиксы с <code>COMPOUNDFLAG</code> также допускают использование слов с ними в составе сложных слов.</p></blockquote><h2 id="compoundmin" tabindex="-1"><a class="header-anchor" href="#compoundmin"><span>COMPOUNDMIN</span></a></h2><p>Директива <code>COMPOUNDMIN</code> задаёт минимальную длину слов, которые могут быть частями составного слова. По умолчанию — 3 символа. Даже если слово помечено <code>COMPOUNDFLAG</code>, оно не будет использоваться как составная часть, если короче <code>COMPOUNDMIN</code>. В примере ниже слово <code>кат</code> не становится составной частью, поэтому <code>самокат</code> определяется как ошибка.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">COMPOUNDFLAG C</span>
<span class="line">COMPOUNDMIN 4</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">4</span>
<span class="line">само/C	</span>
<span class="line">кат/C</span>
<span class="line">водо/C</span>
<span class="line">канал/C</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">само — ✅</span>
<span class="line">кат — ✅</span>
<span class="line">самокат — ❌</span>
<span class="line">водо — ✅</span>
<span class="line">канал — ✅</span>
<span class="line">водоканал — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда используется в словарях <a href="https://github.com/LibreOffice/dictionaries/tree/master/de" target="_blank" rel="noopener noreferrer"><code>de_DE_frami.dic</code></a> и <a href="https://github.com/LibreOffice/dictionaries/tree/master/en" target="_blank" rel="noopener noreferrer"><code>en_US.dic</code></a>.</p><h2 id="onlyincompound" tabindex="-1"><a class="header-anchor" href="#onlyincompound"><span>ONLYINCOMPOUND</span></a></h2><blockquote><p><code>ONLYINCOMPOUND</code> флаг</p><p>Суффиксы, отмеченные <code>ONLYINCOMPOUND</code>, могут находиться только в составных словах (словосоединяющие морфемы в немецком и шведском языках). Флагом <code>ONLYINCOMPOUND</code> также можно отметить обычные слова (см. примеры в <code>tests/onlyincompound.*</code>).</p></blockquote><p>Чтобы слово использовалось только внутри составных слов, оно должно быть помечено и <code>ONLYINCOMPOUND</code>, и <code>COMPOUNDFLAG</code>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">COMPOUNDFLAG C</span>
<span class="line">ONLYINCOMPOUND O</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">4</span>
<span class="line">само/C	</span>
<span class="line">кат/C</span>
<span class="line">водо/CO</span>
<span class="line">канал/C</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">само — ✅</span>
<span class="line">кат — ✅</span>
<span class="line">самокат — ✅</span>
<span class="line">водо — ❌</span>
<span class="line">канал — ✅</span>
<span class="line">водоканал — ✅</span>
<span class="line">водокат — ✅</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команда используется в словарях <a href="https://github.com/LibreOffice/dictionaries/tree/master/de" target="_blank" rel="noopener noreferrer"><code>de_DE_frami.dic</code></a> и <a href="https://github.com/LibreOffice/dictionaries/tree/master/en" target="_blank" rel="noopener noreferrer"><code>en_US.dic</code></a>.</p><h2 id="compoundrule" tabindex="-1"><a class="header-anchor" href="#compoundrule"><span>COMPOUNDRULE</span></a></h2><p>Директива <code>COMPOUNDRULE</code> задаёт правила построения составных слов. Например, можно указать, что одни части могут стоять только в начале, другие — только в конце. Правила <code>COMPOUNDRULE</code> работают с флагами, объявленными другими директивами: <code>COMPOUNDFLAG</code>, <code>COMPOUNDBEGIN</code>, <code>COMPOUNDLAST</code> и другими.</p><p><code>COMPOUNDBEGIN</code> и <code>COMPOUNDLAST</code> не работают без <code>COMPOUNDRULE</code>. Способ соединения определяется в правилах <code>COMPOUNDRULE</code>, поэтому названия <code>COMPOUNDBEGIN</code> и <code>COMPOUNDLAST</code> нужны в первую очередь для читаемости — их можно использовать условно.</p><blockquote><p><code>COMPOUNDBEGIN</code> флаг</p><p>Слова, отмеченные <code>COMPOUNDBEGIN</code> (или с отмеченным аффиксом), могут быть первыми элементами составных слов.</p></blockquote><blockquote><p><code>COMPOUNDLAST</code> флаг</p><p>Слова, отмеченные <code>COMPOUNDLAST</code> (или с отмеченным аффиксом), могут быть последними элементами составных слов.</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">.aff --------------------------------------------------</span>
<span class="line">SET UTF-8</span>
<span class="line"></span>
<span class="line">ONLYINCOMPOUND O</span>
<span class="line">COMPOUNDBEGIN B</span>
<span class="line">COMPOUNDLAST L</span>
<span class="line"></span>
<span class="line">COMPOUNDRULE 1</span>
<span class="line">COMPOUNDRULE BL</span>
<span class="line">.dic --------------------------------------------------</span>
<span class="line">4</span>
<span class="line">само/B</span>
<span class="line">кат/L</span>
<span class="line">водо/BO</span>
<span class="line">канал/L</span>
<span class="line">-------------------------------------------------------</span>
<span class="line">Проверка слов:</span>
<span class="line">само — ✅</span>
<span class="line">кат — ✅</span>
<span class="line">самокат — ✅</span>
<span class="line">водо — ❌</span>
<span class="line">канал — ✅</span>
<span class="line">водоканал — ✅</span>
<span class="line">каналводо — ❌</span>
<span class="line">водокат — ✅</span>
<span class="line">катводо — ❌</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Команды используются в словарях <a href="https://github.com/LibreOffice/dictionaries/tree/master/de" target="_blank" rel="noopener noreferrer"><code>de_DE_frami.dic</code></a> и <a href="https://github.com/LibreOffice/dictionaries/tree/master/en" target="_blank" rel="noopener noreferrer"><code>en_US.dic</code></a>.</p>`,63))])}const h=c(o,[["render",v]]),k=JSON.parse('{"path":"/%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D0%B5%D0%B9-hunspell-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B8-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0.html","title":"Структура словарей Hunspell: основы и составные слова","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1757148915000,"contributors":[{"name":"Petro","username":"Petro","email":"petrovdrm86@yandex.ru","commits":1,"url":"https://github.com/Petro"}],"changelog":[{"hash":"e103e37ea6c71b316d1e6d37a309917775f069e1","time":1757148915000,"email":"petrovdrm86@yandex.ru","author":"Petro","message":"upd"}]},"filePathRelative":"структура-словарей-hunspell-основы-и-составные-слова.md"}');export{h as comp,k as data};

# UVSTM-tabs
## ОСНОВНОЕ
[The documentation also available on English language](https://github.com/unniiiverse/uvstm-tabs/blob/main/README.md)

ARIA-Доступный модуль табов.

Текущая версия: @1.1.0

<hr>

## ДОКУМЕНТАЦИЯ
### HTML
```html
<!-- Контейнер -->
<div class="uvstm-tabs">
    <!-- Список тригеров -->
    <ul class="uvstm-tabs-control" role="tablist">
        <!-- Тригер -->
        <li class="uvstm-tabs-control_item" role="tab" tabindex="0">
            <p>Title</p>
        </li>
    </ul>

    <!-- Список контента -->
    <ul class="uvstm-tabs-content">
        <!-- Элемент контента -->
        <li class="uvstm-tabs-content_item" role="tabpanel" tabindex="0">
            <p>Content</p>
        </li>
    </ul>
</div>

<!-- Аттрибуты -->
<!-- отсутствует -->
```

### SCSS
```scss
// - - - Переменные
// отсутствует

// - - - Классы
.uvstm-tabs-control_item--active // активный класс для тригера
.uvstm-tabs-content_item--active // активный класс для контента
```

### JS
```js
uvstm_tabs(initialActiveTab); // инициализация модуля
// initialActiveTab - indicates initial active tab btn. 0 (first element) - default.
// initialActiveTab - указывает на изначальный активный тригер. 0 (первый элемент) - по умолначию.
```

<hr>

## ПОЛУЧИТЬ
### CDN

CSS
```
https://unniiiverse.github.io/cdn/module/uvstm/tabs/@1.1.0/style.min.css
```

JS
```
https://unniiiverse.github.io/cdn/module/uvstm/tabs/@1.1.0/app.min.js
```

JS with export (ES6)
```
https://unniiiverse.github.io/cdn/module/uvstm/tabs/@1.1.0/module.min.js
```

### [GITHUB](https://github.com/unniiiverse/uvstm-tabs) [CODEPEN](https://codepen.io/unniiiverse/pen/MWGpKaw)

unniiiverse ©️ 2022
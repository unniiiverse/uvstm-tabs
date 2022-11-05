# UVSTM-tabs
## GENERAL
*Documentation translated to English by me, documentation may contain grammar mistakes, sorry for that.*
[Документация так же доступна на русском языке.](https://github.com/unniiiverse/uvstm-tabs/blob/main/README_ru.md)

ARIA-Accesible tabs module.

Current version: @1.1.0

<hr>

## DOCS
### HTML
```html
<!-- Container -->
<div class="uvstm-tabs">
    <!-- Triggers list -->
    <ul class="uvstm-tabs-control" role="tablist">
        <!-- Trigger item -->
        <li class="uvstm-tabs-control_item" role="tab" tabindex="0">
            <p>Title</p>
        </li>
    </ul>

    <!-- Contents list -->
    <ul class="uvstm-tabs-content">
        <!-- Content item -->
        <li class="uvstm-tabs-content_item" role="tabpanel" tabindex="0">
            <p>Content</p>
        </li>
    </ul>
</div>

<!-- Attributes -->
<!-- none -->
```

### SCSS
```scss
// - - - Variables
// none

// - - - Classes
.uvstm-tabs-control_item--active // active class for trigger
.uvstm-tabs-content_item--active // active class for content
```

### JS
```js
uvstm_tabs(initialActiveTab); // init module
// initialActiveTab - indicates initial active tab btn. 0 (first element) - default.
```

<hr>

## GET IT ON
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
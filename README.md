# ngx-mathjax

Integrate [MathJax][1] with [Angular][2].

## Feature

- Dynamically load MathJax library to your web application.
- Simple typesetting using Angular directive.
- Dynamic typesetting using expression.

## Install

```
npm install ngx-mathjax
```

## Configure the module

Load the module in the `@NgModule` class of the application.
You need to pass a `ModuleConfiguration` instance to the `config` method to configure the module.

### Example

```typescript
import {NgModule} from '@angular/core';
import {AppComponent} from './src/app/app.component';
import {MathJaxModule} from './src/app/math-jax/math-jax.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MathJaxModule.config({
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- `version` is the MathJax release version.
- `config` is the MathJax predefined configuration name.
- `hostname` is the MathJax CDN hostname.

## Typeset an element

Add the `mathjax` directive to elements which you want to apply MathJax typesetting on load.

```html
<div>normal text</div>

<div mathjax>mathjax typesetting
$$
x = 1
$$

\( y = 2 \)
</div>
```

## Typesetting using expression

The **first** Jax element will be updated as the value of `exp` changes.

```html
<div [mathjax]="exp">

MathJax: \( {{ '{}' }} \)
</div>
```

Insert the `{}` to the place you want, then surround it with a pair of MathJax delimiter.

You need to escape it in Angular template.

## TODO

1. Customize typesetting interval.
2. Generate JSDoc.


[1]: https://www.mathjax.org/
[2]: https://angular.io/

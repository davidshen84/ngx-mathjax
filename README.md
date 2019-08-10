# ngx-mathjax [![CircleCI][1]][2]

Integrate [MathJax][3] with [Angular][4].

## Feature

- Dynamically load MathJax library to your web application.
- Simple typesetting using Angular directive.
- Dynamic typesetting using expressions.

## Install

```
npm install ngx-mathjax
```

## Configure the module

Load the module in the `@NgModule` class of the application. You need
to pass a `ModuleConfiguration` instance to the `config` method to
configure the module.

### Example
 
When importing in the **root** module, the module should be configured
with *.forRoot* method.

```typescript
import {NgModule} from '@angular/core';
import {AppComponent} from './src/app/app.component';
import {MathJaxModule} from './src/app/math-jax/math-jax.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MathJaxModule.forRoot({
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

When importing in a **child** module, the module must be configured to
re-use the same module instance as the root module. So simply
configure the module with the *.forChild* method.

```typescript
import {MathJaxModule} from './src/app/math-jax/math-jax.module';

...
imports: [
  MathJaxModule.forChild()
]
...
```

## Typeset an element

Add the `mathjax` directive to elements which you want to apply
MathJax typesetting on load.

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

The Jax elements will be updated when the corresponding expression
value is changed. The correspondence principle between the expression
and the Jax element is by *order*.

```html
<div [mathjax]="[exp1, exp2]">

MathJax Expression 1: \( {{ '{}' }} \)
MathJax Expression 2: \( {{ '{}' }} \)
</div>
```

Insert the `{}` to the place you want, then surround it with a pair of
MathJax delimiter.

You need to escape it in Angular template.

## Manually trigger MathJax typesetting

You can use the `MathJaxDirective.MathJaxTypeset()` method to trigger
the typesetting when you want. The steps are:

- Use *ViewChild* and its *read* property to get a reference to the
  `MathJaxDirective` instance
- Call `instance.MathJaxTypeset()`

## TODO

*empty*


[1]: https://circleci.com/gh/davidshen84/ngx-mathjax.svg?style=svg
[2]: https://circleci.com/gh/davidshen84/ngx-mathjax
[3]: https://www.mathjax.org/
[4]: https://angular.io/

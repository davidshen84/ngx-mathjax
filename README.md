# ngx-mathjax

Integrate [MathJax][1] with [Angular][2].

## Install

```
npm install ngx-mathjax
```

## Configure the module

Load the module in your the `@NgModule` class of your application.

### Example

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MathJaxModule.config({version: '2.7.5', config: 'TeX-AMS_CHTML'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- `version` is the MathJax release version.
- `config` is the MathJax predefined configuration name.

## Typeset the element

Add the `mathjax` directive to the elements which you want MathJax typesetting.

```html
<div>normal text</div>
<div mathjax>mathjax typesetting
$$
x = 1
$$

\( y = 2 \)
</div>
```

[1]: https://www.mathjax.org/
[2]: https://angular.io/

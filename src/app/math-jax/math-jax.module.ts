import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MathJaxDirective} from './math-jax.directive';
import {_Window} from './domain/window';
import {MathJaxService} from './math-jax.service';

/**
 * Module configuration class.
 */
export class ModuleConfiguration {
  /**
   * The version of the MathJax library.
   */
  version: string;

  /**
   * The config name of the MathJax library.
   * Please check the MathJax [documentation](https://docs.mathjax.org/en/latest/config-files.html) for all the configuration names.
   */
  config: string;

  /**
   * MathJax CDN hostname. Please check [here](https://docs.mathjax.org/en/latest/start.html#mathjax-cdn) for available CDN servers.
   */
  hostname: string;
}

/**
 * You should always use the  `config` static method to provide a configuration to the module.
 */
@NgModule({
  declarations: [MathJaxDirective],
  imports: [
    CommonModule
  ],
  exports: [MathJaxDirective]
})
export class MathJaxModule {

  constructor(moduleConfig: ModuleConfiguration, window: _Window, service: MathJaxService) {

    /**
     * Define the {Subject} and {Observable} for the MathJax library.
     */
    const mathJaxHub$ = service.MathJaxHub$;
    window.mathJaxHub$ = mathJaxHub$;
    const document = window.document;

    /**
     * Define the **function string** to be inserted into the mathjax configuration script block.
     */
    const mathJaxHubConfig = (() => {
      MathJax.Hub.Config({
        skipStartupTypeset: true
      });
      MathJax.Hub.Register.StartupHook('End', () => {
        mathJaxHub$.next();
        mathJaxHub$.complete();
      });
    }).toString();

    /**
     * Insert the MathJax configuration script into the Head element.
     */
    (function () {
      const script = document.createElement('script') as HTMLScriptElement;
      script.type = 'text/x-mathjax-config';
      script.text = `(${mathJaxHubConfig})();`;
      document.getElementsByTagName('head')[0].appendChild(script);
    })();

    /**
     * Insert the script block to load the MathJax library.
     */
    (function (version: string, config: string, hostname: string) {
      const script = document.createElement('script') as HTMLScriptElement;
      script.type = 'text/javascript';
      script.src = `https://${hostname}/ajax/libs/mathjax/${version}/MathJax.js?config=${config}`;
      script.async = true;
      document.getElementsByTagName('head')[0].appendChild(script);
    })(moduleConfig.version, moduleConfig.config, moduleConfig.hostname);
  }

  public static config(moduleConfiguration: ModuleConfiguration = {
    version: '2.7.5',
    config: 'TeX-AMS_HTML',
    hostname: 'cdnjs.cloudflare.com'
  }): ModuleWithProviders {
    return {
      ngModule: MathJaxModule,
      providers: [{provide: ModuleConfiguration, useValue: moduleConfiguration},
        {provide: _Window, useValue: window},
        {provide: MathJaxService, useClass: MathJaxService}]
    };
  }

}

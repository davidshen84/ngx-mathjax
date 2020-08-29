/**
 * @author davidshen84
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathJaxDirective } from './math-jax.directive';
import { MathJaxService } from './math-jax.service';
import { Observable } from 'rxjs';
import { MathJaxConfigObject } from '../math-jax/I-mathjax-configobject'; 
import { reduce } from 'rxjs/operators';


/**
 * Module configuration class.
 *
 * @example
 *
 * {
 *   version: '2.7.5',
 *   config: 'TeX-AMS_HTML',
 *   hostname: 'cdnjs.cloudflare.com'
 * }
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

  /*
   * Optional MathJax Configuration Call Object. Please check [here](https://docs.mathjax.org/en/v2.7-latest/configuration.html#using-in-line-configuration-options) for specifics on the MathJax.Hub.Config call.
   */

  mathjaxconfigobject?: MathJaxConfigObject;
}

/**
 * Module to load and configure the MathJax library.
 *
 * @example
 *
 * MathJaxModule.config(
 * {
 *     version: '2.7.5',
 *     config: 'TeX-AMS_HTML',
 *     hostname: 'cdnjs.cloudflare.com'
 * })
 */
@NgModule({
  declarations: [MathJaxDirective],
  imports: [CommonModule],
  exports: [MathJaxDirective],
})
export class MathJaxModule {
  constructor(service: MathJaxService, moduleConfig?: ModuleConfiguration) {
    service.init();

    /**
     * Define the **function string** to be inserted into the mathjax configuration script block.
     */

    // example config object to be inserted 

    let mathJaxHubConfig = (() => {
      //inserthere 
      MathJax.Hub.Register.StartupHook('End', () => {
        window.mathJaxHub$.next();
        window.mathJaxHub$.complete();
      });
    }).toString();

    /* Add MathJax Config Call by replacing '//inserthere' in the HTML script element */

    mathJaxHubConfig = mathJaxHubConfig.replace(
      '//inserthere',
      'MathJax.Hub.Config(' + JSON.stringify(moduleConfig.mathjaxconfigobject) + ');'
    );

    if (moduleConfig) {
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
  }

  /**
   * Configure the provider for hte module.
   *
   * @deprecated Use forRoot or forChild method instead.
   * @param {boolean} forRoot Make sure it is set to `true` for the root module and `false` for any child module.
   * @param {ModuleConfiguration} moduleConfiguration A {ModuleConfiguration} instance.
   *
   * @return {ModuleWithproviders<MathJaxModule>} instance
   */
  public static config(
    forRoot = true,
    moduleConfiguration: ModuleConfiguration = {
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com',
    }
  ): ModuleWithProviders<MathJaxModule> {
    return forRoot
      ? {
          ngModule: MathJaxModule,
          providers: [
            { provide: ModuleConfiguration, useValue: moduleConfiguration },
            { provide: MathJaxService, useClass: MathJaxService },
          ],
        }
      : {
          ngModule: MathJaxModule,
        };
  }

  /**
   * Configure the module for the root module.
   *
   * @param {ModuleConfiguration} moduleConfiguration configuration
   *
   * @return {ModuleWithproviders<MathJaxModule>}
   */
  public static forRoot(
    moduleConfiguration: ModuleConfiguration = {
      version: '2.7.5',
      config: 'TeX-AMS_HTML',
      hostname: 'cdnjs.cloudflare.com',
      mathjaxconfigobject: {},
    }
  ): ModuleWithProviders<MathJaxModule> {
    return {
      ngModule: MathJaxModule,
      providers: [
        { provide: ModuleConfiguration, useValue: moduleConfiguration },
        { provide: MathJaxService, useClass: MathJaxService },
      ],
    };
  }

  /**
   * Configure the module for a child module.
   *
   * @return {object}
   */
  public static forChild(): ModuleWithProviders<MathJaxModule> {
    return {
      ngModule: MathJaxModule,
    };
  }
}

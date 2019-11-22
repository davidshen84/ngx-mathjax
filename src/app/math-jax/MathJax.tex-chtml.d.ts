/* tslint:disable:class-name */

// Definition for MathJax v3 tex2chtml

interface document {
  clear(): void;

  updateDocument(): void;

  state(state: number): void;
}

interface startup {
  document: document;
  promise: Promise<any>;
}

declare namespace MathJax {
  const startup: startup;

  interface Metrics {
    em: number;
    ex: number;
    containerWidth: number;
    lineWidth: number;
    scale: number;
  }

  function texReset(): void;

  function getMetricsFor(e: HTMLElement): Metrics;

  function tex2chtml(input: string, metrics: Metrics): any;

  function tex2chtmlPromise(input: string, metrics: Metrics): Promise<HTMLElement>;

  function typeset(elements?: HTMLElement[]): void;

  function typesetPromise(elements?: HTMLElement[]): Promise<any>;
}

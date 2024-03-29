/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Sizes,
  Types,
} from './components/button/button.config';

export namespace Components {
  interface D2Button {
    'disabled': boolean;
    'download': boolean;
    'href': string;
    'isFullWidth': boolean;
    'isLoading': boolean;
    'isSize': Sizes;
    'isType': Types;
    'rounded': boolean;
    'target': string;
    'type': string;
  }
  interface D2Setup {
    'themes': string;
  }
  interface D2Theme {
    'name': string;
  }
}

declare global {


  interface HTMLD2ButtonElement extends Components.D2Button, HTMLStencilElement {}
  var HTMLD2ButtonElement: {
    prototype: HTMLD2ButtonElement;
    new (): HTMLD2ButtonElement;
  };

  interface HTMLD2SetupElement extends Components.D2Setup, HTMLStencilElement {}
  var HTMLD2SetupElement: {
    prototype: HTMLD2SetupElement;
    new (): HTMLD2SetupElement;
  };

  interface HTMLD2ThemeElement extends Components.D2Theme, HTMLStencilElement {}
  var HTMLD2ThemeElement: {
    prototype: HTMLD2ThemeElement;
    new (): HTMLD2ThemeElement;
  };
  interface HTMLElementTagNameMap {
    'd2-button': HTMLD2ButtonElement;
    'd2-setup': HTMLD2SetupElement;
    'd2-theme': HTMLD2ThemeElement;
  }
}

declare namespace LocalJSX {
  interface D2Button extends JSXBase.HTMLAttributes<HTMLD2ButtonElement> {
    'disabled'?: boolean;
    'download'?: boolean;
    'href'?: string;
    'isFullWidth'?: boolean;
    'isLoading'?: boolean;
    'isSize'?: Sizes;
    'isType'?: Types;
    'rounded'?: boolean;
    'target'?: string;
    'type'?: string;
  }
  interface D2Setup extends JSXBase.HTMLAttributes<HTMLD2SetupElement> {
    'themes'?: string;
  }
  interface D2Theme extends JSXBase.HTMLAttributes<HTMLD2ThemeElement> {
    'name'?: string;
  }

  interface IntrinsicElements {
    'd2-button': D2Button;
    'd2-setup': D2Setup;
    'd2-theme': D2Theme;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}



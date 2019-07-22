import { Component, Prop, Host, h } from '@stencil/core';
import { Theme } from '../../config/types';
import { DefaultTheme, MaterializeTheme } from '../../config/theme';
import jss from 'jss';
import preset from 'jss-preset-default';

import some from 'lodash/some';

// Import Styles
import { GlobalStyles as ThemeGlobalStyles } from '../theme/theme-styles';
import { ThemeStyles as ButtonThemeStyles } from '../button/button-styles';

jss.setup(preset());

@Component({
  tag: 'd2-setup'
})
export class Setup {
  @Prop() themes: string;

  myThemes: Theme[];

  constructor() {
    this.myThemes = this.themes
      ? (JSON.parse(this.themes) as Theme[])
      : ([] as Theme[]);

    if (!some(this.myThemes, { name: 'default' })) {
      this.myThemes.push({ ...DefaultTheme });
    }

    if (!some(this.myThemes, { name: 'materialize' })) {
      this.myThemes.push({ ...MaterializeTheme });
    }
  }

  componentWillLoad() {
    for (let theme of this.myThemes) {
      const sheet = jss.createStyleSheet(
        {
          '@global': this.generateAndAttachThemeStyles(theme)
        },
        { meta: theme.name }
      );

      sheet.attach();
    }
  }

  generateAndAttachThemeStyles(theme) {
    return {
      ...ThemeGlobalStyles(theme),
      [`.d2-theme-${theme.name}`]: {
        ...ButtonThemeStyles(theme)
      }
    };
  }

  render() {
    return (
      <Host class="d2-wrapper">
        <slot />
      </Host>
    );
  }
}

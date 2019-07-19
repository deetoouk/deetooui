import { Component, Prop, Host, h } from '@stencil/core';
import ThemeTunnel from '../../tunnels/theme';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

@Component({
  tag: 'd2-theme'
})
export class Theme {
  @Prop() name = 'default';

  render() {
    return (
      <Host class={`d2-theme-${this.name}`}>
        <ThemeTunnel.Provider state={{ name: this.name }}>
          <slot />
        </ThemeTunnel.Provider>
      </Host>
    );
  }
}

import { Component, Prop, Watch, h } from '@stencil/core';
import { Sizes, Types } from './button.config';
import { validateEnumAttribute } from '../../utils/utils';

@Component({
  tag: 'd2-button',
  styleUrl: 'button.scss'
})
export class Button {
  @Prop() isType: Types = Types.primary;
  @Prop() isSize: Sizes = Sizes.default;
  @Prop() href: string;
  @Prop() type: string;
  @Prop() target = '_self';
  @Prop() rounded = false;
  @Prop() disabled = false;
  @Prop() download = false;
  @Prop() isLoading = false;
  @Prop() isFullWidth = false;

  constructor() {
    validateEnumAttribute(this.isType, Types);
    validateEnumAttribute(this.isSize, Sizes);
  }

  @Watch('isType')
  validateIsType(isType: Types) {
    try {
      validateEnumAttribute(isType, Types);
    } catch (e) {
      this.isType = Types.primary;

      if (isType) {
        throw e;
      }
    }
  }

  @Watch('isSize')
  validateIsSize(isSize: Types) {
    try {
      validateEnumAttribute(isSize, Sizes);
    } catch (e) {
      this.isSize = Sizes.default;

      if (isSize) {
        throw e;
      }
    }
  }

  classes() {
    return {
      'd2-button': true,
      [`is-type-${this.isType}`]: true,
      [`is-size-${this.isSize}`]: true,
      'is-rounded': this.rounded,
      'is-disabled': this.disabled,
      'is-loading': this.isLoading,
      'is-full-width': this.isFullWidth
    };
  }

  protected handleClick() {
    // handle click here
  }

  render() {
    const TagType = this.href ? 'a' : 'button';

    const attrs =
      TagType === 'button'
        ? { type: this.type || 'button', disabled: this.disabled }
        : { href: this.href, target: this.target, download: this.download };

    return [
      <TagType
        {...attrs}
        class={this.classes()}
        onClick={() => this.handleClick()}
      >
        <span class="d2-button-inner">
          <div class="d2-button__slot-wrapper">
            <slot name="start" />
          </div>
          <div class="d2-button__text">
            <slot />
          </div>
          <div class="d2-button__slot-wrapper">
            <slot name="end" />
          </div>
        </span>
      </TagType>
    ];
  }
}

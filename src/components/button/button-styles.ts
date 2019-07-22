import { Style } from 'jss';
import forEach from 'lodash/forEach';

export const ThemeStyles = (theme): Style => {
  const { name, colors } = theme;
  let types = {};

  forEach(colors, (_, type) => {
    let prefix = `--d2-${name}-${type}`;

    types = {
      ...types,
      [`&.d2-button--is-type-${type}`]: {
        '& .d2-button__button': {
          backgroundColor: `var(${prefix}-background-color)`,
          color: `var(${prefix}-text-color)`,
          fill: `var(${prefix}-text-color)`,
          '&:hover:not(:active)': {
            backgroundColor: `var(${prefix}-hover-color)`
          }
        }
      }
    };
  });

  return {
    '& d2-button': types
  };
};

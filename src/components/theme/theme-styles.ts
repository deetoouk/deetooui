import { Style } from 'jss';
import forEach from 'lodash/forEach';

export const GlobalStyles = (theme): Style => {
  let globalVars = {};
  const { name, colors } = theme;

  forEach(colors, (color, type) => {
    forEach(color, (value, key) => {
      globalVars[`--d2-${name}-${type}-${key}-color`] = value;
    });
  });

  return {
    ':root': globalVars
  };
};

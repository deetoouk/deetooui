import { Style } from 'jss';
import forEach from 'lodash/forEach';

const styles = (theme): Style => {
  let types = {};

  forEach(theme.colors, (color, type) => {
    types = {
      ...types,
      [`&.is-type-${type}`]: {
        backgroundColor: color.background,
        color: color.text,
        fill: color.text,
        '&:hover': {
          backgroundColor: color.hover
        }
      }
    };
  });

  return {
    '& .d2-button': types
  };
};

export default styles;

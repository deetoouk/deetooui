import isArray from 'lodash/isArray';
import includes from 'lodash/includes';

export function validateEnumAttribute(attr, availableValues) {
  if (isArray(availableValues)) {
    if (!includes(availableValues, attr)) {
      throw new Error(`Invalid ${attr} prop value.`);
    }
  } else {
    if (!(attr in availableValues)) {
      throw new Error(`Invalid ${attr} prop value.`);
    }
  }
}

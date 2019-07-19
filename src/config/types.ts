export interface StringTMap<T> {
  [key: string]: T;
}

export interface ColorType {
  [key: string]: StringTMap<string>;
}

export interface Theme {
  name: string;
  colors: ColorType;
}

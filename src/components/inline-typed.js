//@flow
export type ColorType =
  | 'Red'
  | 'Gray'
  | 'Blue'
  | 'White'
  | 'Primary'
  | 'Transparent';

export type EnvType = {
  [key: string]: string | any,
} & {NEXT_STATIC_API_URL: any, NEXT_STATIC_API_KEY: any};

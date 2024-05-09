export enum fieldType {
  string = 'string',
  array = 'array',
  object = 'object',
  boolean = 'boolean',
  number = 'number',
  bigint = 'BigInt',
  date = 'Date'
}

export interface FieldInterface {
  valid?: boolean;
  value?: any;
  touched?: boolean;
  schema?: any;
  error?: string;
  fieldType?: fieldType;
}

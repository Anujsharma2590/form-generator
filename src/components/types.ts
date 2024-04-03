export type TOption = {
  value: string;
  checked: boolean;
  key: string;
};

export enum FieldTypeEnum {
  ShortText = "ShortText",
  LongText = "LongText",
  Number = "Numeric",
  Dropdown = "Dropdown",
  Checkbox = "Checkbox",
  Radio = "RadioButton",
}

export type TField = {
  id?: string;
  label: string;
  type: FieldTypeEnum;
  key: string;
  value: string;
  options: Array<TOption>;
  selectedOptions: Array<string>;
};

export enum SectionModeEnum {
  Edit = "edit",
  Entry = "entry",
}

export type FieldDefinitionApiView = {
  id: string;
  name: string;
  type: FieldTypeEnum;
  options: Array<string>;
  value?: FieldValue;
};

export type FieldValue = {
  stringValue?: string;
  numericValue?: number;
  arrayValue?: Array<string>;
};

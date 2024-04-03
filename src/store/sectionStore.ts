// sectionStore.ts
import create, { State } from "zustand";
import { FieldTypeEnum, TField, TOption } from "../components/types";

type SectionMode = "edit" | "entry";

type SectionStore = State & {
  fields: TField[];
  mode: SectionMode;
  setFields: (fields: TField[]) => void;
  setMode: (mode: SectionMode) => void;
  addField: (field: TField) => void;
  removeField: (fieldId: string) => void;
  updateField: (fieldKey: string, values: Partial<TField>) => void;
  deleteOption: (fieldKey: string, optionKey: string) => void;
  addOption: (fieldKey: string, option?: string) => void;
  updateOption: (
    fieldKey: string,
    optionKey: string,
    optionType: FieldTypeEnum,
    values: Partial<TOption>
  ) => void;
};

const fields: TField[] = [
  {
    id: "1",
    label: "Field 1",
    type: FieldTypeEnum.ShortText,
    key: "field1",
    value: "",
    options: [],
    selectedOptions: [],
  },
  {
    id: "2",
    label: "Field 2",
    type: FieldTypeEnum.LongText,
    key: "field2",
    value: "",
    options: [],
    selectedOptions: [],
  },
  {
    id: "3",
    label: "Field 3",
    type: FieldTypeEnum.Number,
    key: "field3",
    value: "",
    options: [],
    selectedOptions: [],
  },
  {
    id: "4",
    label: "Field 4",
    type: FieldTypeEnum.Dropdown,
    key: "field4",
    value: "",
    options: [
      { value: "Option 1", checked: false, key: "option1" },
      { value: "Option 2", checked: false, key: "option2" },
      { value: "Option 3", checked: false, key: "option3" },
    ],
    selectedOptions: [],
  },
  {
    id: "5",
    label: "Field 5",
    type: FieldTypeEnum.Checkbox,
    key: "field5",
    value: "",
    options: [],
    selectedOptions: [],
  },
];

export const useSectionStore = create<SectionStore>((set, get) => ({
  fields: fields,
  mode: "edit",
  setFields: (fields) => set({ fields }),
  setMode: (mode) => set({ mode }),

  updateOption: (fieldKey, optionKey, optionType, value) => {
    const { fields } = get();
    set({
      fields: fields.map((field) =>
        field.key === fieldKey
          ? {
              ...field,
              options: field.options.map((option) =>
                option.key === optionKey
                  ? { ...option, [optionType]: value }
                  : option
              ),
            }
          : field
      ),
    });
  },

  deleteOption: (fieldKey, optionKey) => {
    const { fields } = get();
    set({
      fields: fields.map((field) =>
        field.key === fieldKey
          ? {
              ...field,
              options: field.options.filter(
                (option) => option.key !== optionKey
              ),
            }
          : field
      ),
    });
  },

  addOption: (fieldKey, option) => {
    const { fields } = get();
    set({
      fields: fields.map((field) =>
        field.key === fieldKey
          ? {
              ...field,
              options: [
                ...field.options,
                {
                  value: option || "",
                  checked: false,
                  key: crypto.randomUUID(),
                },
              ],
            }
          : field
      ),
    });
  },

  updateField: (fieldKey, value) => {
    const { fields } = get();
    set({
      fields: fields.map((field) =>
        field.key === fieldKey ? { ...field, ...value } : field
      ),
    });
  },

  addField: (field) => {
    const { fields } = get();
    set({ fields: [...fields, field] });
  },

  removeField: (fieldId) => {
    const { fields } = get();
    set({ fields: fields.filter((field) => field.key !== fieldId) });
  },
}));

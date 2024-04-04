import create from "zustand";
import { FieldTypeEnum, TField, TOption } from "../components/types";

type SectionMode = "edit" | "entry";

type SectionStore = {
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

export const useSectionStore = create<SectionStore>((set, get) => ({
  fields: [],
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

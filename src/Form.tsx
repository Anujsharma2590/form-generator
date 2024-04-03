import React, { useState } from 'react';
import FormField from './FormField';

const Form: React.FC = () => {
  const [formFields, setFormFields] = useState<{ label: string; type: string; options?: string[]; value: string | boolean }[]>([
    { label: 'Name', type: 'text', value: '' },
  ]);

  const handleChange = (index: number, newValue: string | boolean) => {
    const newFormFields = [...formFields];
    newFormFields[index].value = newValue;
    setFormFields(newFormFields);
  };

  const addFormField = () => {
    setFormFields([...formFields, { label: '', type: 'text', value: '' }]);
  };

  const removeFormField = (index: number) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index}>
          <FormField
            label={field.label}
            type={field.type}
            options={field.options || []}
            value={field.value}
            onChange={(e) => {
              const newValue = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
              handleChange(index, newValue);
            }}
          />
          <button type="button" onClick={() => removeFormField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addFormField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

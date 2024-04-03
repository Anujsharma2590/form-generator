import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  options?: string[];
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, options = [], value, onChange }) => {
  const renderField = () => {
    switch (type) {
      case 'text':
        return <input type="text" value={value as string} onChange={onChange} />;
      case 'textarea':
        return <textarea value={value as string} onChange={onChange} />;
      case 'dropdown':
        return (
          <select value={value as string} onChange={onChange}>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return <input type="checkbox" checked={value as boolean} onChange={onChange} />;
      case 'radio':
        return (
          <div>
            {options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  checked={value === option}
                  onChange={onChange}
                />
                {option}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <label>{label}</label>
      {renderField()}
    </div>
  );
};

export default FormField;

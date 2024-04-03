import React, { FC, FocusEvent, RefObject, useState } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import sanitizeHtml, { IOptions } from 'sanitize-html';

import './index.scss'

type EditableProps = {
  value: string;
  placeholder: string;
  tagName?: string;
  className?: string;
  inputRef?: RefObject<HTMLInputElement>;
  onBlur: (value: string) => void;
};

const sanitizeConf: IOptions = {
  allowedTags: [],
  allowedAttributes: {}
};

const Editable: FC<EditableProps> = ({
  value,
  placeholder,
  tagName,
  className,
  inputRef,
  onBlur
}) => {
  const [text, setText] = useState<string>(value); // this value can be used in edit mode to pre-populate

  function sanitizeText(text: string) {
    const cleanText = sanitizeHtml(text, sanitizeConf);

    return cleanText;
  }

  function handleChange(e: ContentEditableEvent) {
    setText(e.target.value);
  }

  function handleOnBlur(e: FocusEvent<HTMLDivElement>) {
    const cleanText = sanitizeText(e.target.innerText);
    setText(cleanText);
    onBlur(cleanText);
  }

  return (
    <>
    <ContentEditable
      style={{ width : '100%' }}
      className={`${className}`}
      innerRef={inputRef}
      spellCheck="false"
      html={text}
      tagName={tagName}
      onChange={handleChange}
      onBlur={handleOnBlur}
    />
    </>
  );
};

export default Editable;

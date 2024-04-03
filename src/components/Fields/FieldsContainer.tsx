import React, { FC } from "react";
import { Col, Row } from "antd";

import { useSectionStore } from "../../store/sectionStore";
import Field from "../DynamicFields/Field";


type FieldsContainerProps = {
  isEditMode: boolean;
};

const FieldsContainer: FC<FieldsContainerProps> = ({ isEditMode }) => {
  
  const { fields } = useSectionStore();

  return (
    <div className={`${"body-container"} ${"collapse-content-container"}`}>
      {fields.length ? (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, xxl: 36 }, 16]}>
          {fields?.map((field, index) => (
            <Col span={8} key={field.key}>
              <Field field={field} isEditMode={isEditMode} fieldIndex={index} />
            </Col>
          ))}
        </Row>
      ) : isEditMode ? (
        <p className="instruction-text">
          Select the field type you want to add from the toolbar below
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(FieldsContainer);

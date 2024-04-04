import React, { FC } from "react";
import { Col, Row } from "antd";
import Field from "./Field";

import { useSectionStore } from "../../store/sectionStore";
import "./index.scss";


type FieldsContainerProps = {
  isEditMode: boolean;
};

const DynamicFields: FC<FieldsContainerProps> = ({ isEditMode }) => {
  
  const { fields } = useSectionStore();


  return (
    <div>
      {fields.length ? (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, xxl: 36 }, 16]}>
          {fields?.map((field, index) => (
            <Col span={8} key={field.key}>
              <Field field={field} isEditMode={isEditMode} fieldIndex={index} />
            </Col>
          ))}
        </Row>
      ) : isEditMode ? (
        <h3>
          Select the field type you want to add from the toolbar below
        </h3>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(DynamicFields);

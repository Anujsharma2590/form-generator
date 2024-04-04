import { FC, ReactNode } from 'react';
import { FieldTypeEnum } from '../types';
import { Tooltip } from 'antd';

type FooterItemProps = {
  icon: ReactNode;
  fieldType: FieldTypeEnum;
  onItemClick: (fieldType: FieldTypeEnum) => void;
};

const FooterItem: FC<FooterItemProps> = ({
  icon,
  fieldType,
  onItemClick
}) => {
  function onClick(e: any) {
    e.preventDefault();
    onItemClick(fieldType);
  }

  return (
    <Tooltip title={fieldType} >
      <section onClick={onClick} className='footer-item' >
        {icon}
      </section>
    </Tooltip>
 
  );
};

export default FooterItem;

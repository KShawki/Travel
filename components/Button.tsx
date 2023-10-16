import Image from 'next/image';
import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
};

const Button = (props: ButtonProps) => {
  const { type, title, icon, variant } = props;
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
      {icon && <Image alt={title} src={icon} width={24} height={24} />}
      <label className='bold-16'>{title}</label>
    </button>
  );
};

export default Button;

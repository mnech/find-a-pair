import React from 'react';
import clsx, { ClassValue } from 'clsx';
import logo from '../../../public/logo.png';
import './Avatar.scss';

export interface IAvatar {
  src: string;
  alt: string;
  className: ClassValue;
}

const Avatar: React.FC<Partial<IAvatar>> = ({
  src,
  alt,
  className,
  ...props
}) => (
  <img
    src={src || logo}
    alt={alt}
    className={clsx('avatar', 'rounded-3', 'shadow', className)}
    {...props}
  />
);

export default Avatar;

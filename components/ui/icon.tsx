import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: SvgIcon, className, ...props }) => {

  if (!SvgIcon || typeof SvgIcon !== 'function') {
    return <svg className={className} {...props} data-testid="fallback-icon" />;
  }
  
  return <SvgIcon className={className} {...props} />;
};

export default Icon;
import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  as = 'button',
  href,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "inline-block rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-md hover:shadow-lg focus:ring-blue-500",
    secondary: "bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-700 hover:border-gray-700 hover:text-white shadow-md hover:shadow-blue-500/30 focus:ring-gray-400",
    outline: "border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg focus:ring-blue-500"
  };
  
  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };
  
  const Component = as;
  const allProps = as === 'a' 
    ? { href, target, rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined), ...props } 
    : props;
  
  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...allProps}
    >
      {children}
    </Component>
  );
};
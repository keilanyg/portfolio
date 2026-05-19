import React from 'react';

export default function IconeUnicons({ iconClass, tamanho = '20px', cor = '#102A43', ...props }) {
  const estilo = {
    fontSize: tamanho,
    color: cor,
    ...props.style, 
  };

  return <i className={`${iconClass} services-icon`} style={estilo}></i>;
}

import React from 'react';

export default function IconeUnicons({ iconClass, tamanho = '24px', cor = '#ff6600', ...props }) {
  const estilo = {
    fontSize: tamanho,
    color: cor,
    ...props.style, 
  };

  return <i className={`${iconClass} services-icon`} style={estilo}></i>;
}

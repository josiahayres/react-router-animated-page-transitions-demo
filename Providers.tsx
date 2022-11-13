import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export function Providers(props) {
  return <BrowserRouter>{props.children}</BrowserRouter>;
}

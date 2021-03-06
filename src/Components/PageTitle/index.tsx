// Dependencies
import React from 'react';

// Styles
import { PageTitleStyle } from './style';

// Component PageTitle
const PageTitle = ({ children }: { children: any }) => {
  // DOM
  return <PageTitleStyle>{children}</PageTitleStyle>;
};

export default PageTitle;

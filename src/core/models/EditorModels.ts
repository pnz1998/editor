import { ReactNode } from 'react';

export interface ToolbarButtonModel {
  format: string,
  icon: ReactNode
  tooltip: string
};

export interface FontSizeModel {
  fontSize: string | number,
  tooltip: string
};
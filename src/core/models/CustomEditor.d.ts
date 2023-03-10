import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

export interface CustomText { 
  text: string,
  bold?: boolean,
  italic?: boolean,
  fontSize?: number,
  color?: string
};

export interface HeadingElement {
  type: 'heading',
  level: number,
  children: CustomText[]
};
export interface ParagraphElement {
  type: 'paragraph'
  children: CustomText[]
}
export type CustomElement = ParagraphElement | HeadingElement;

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}
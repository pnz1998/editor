import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

export type CustomEditor = BaseEditor & ReactEditor;
export interface CustomText { text: string };
export interface CustomElement { type: 'paragraph'; children: CustomText[] };
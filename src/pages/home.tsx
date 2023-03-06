import { FC, useState } from "react";
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react'
import Toolbar from "../components/Toolbar";
import { CustomEditor, CustomElement } from "../core/models/Editor";

const Home: FC = () => {
  const [editor] = useState<CustomEditor>(() => withReact(createEditor()));
  const initialValue: CustomElement[] = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ];
  return (
    <Slate editor={editor} value={initialValue}>
      <Toolbar />
      <Editable />
    </Slate>
  )
};
export default Home;
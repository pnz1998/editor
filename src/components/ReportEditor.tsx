import { FC, PropsWithChildren, useCallback, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { CustomElement } from "../core/models/CustomEditor";
import { Leaf } from "./RenderLeaf";
import Toolbar from "./Toolbar";

const ReportEditor: FC<PropsWithChildren> = ({ children, ...props }) => {
  const [editor] = useState(() => withReact(createEditor()));
  // const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, [])
  const initialValue: CustomElement[] = [
    { 
      type: 'paragraph',
      children: [{ text: 'some word ' }]
    }
  ];
  return (
    <Slate editor={editor} value={initialValue}>
      <Toolbar />
      <Editable 
        style={{
          background: 'white',
          width: '21cm',
          height: '29.7cm',
          display: 'block',
          margin: '0 auto',
          marginBottom: '0.5cm',
          boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
        }}
        renderLeaf={renderLeaf}
        autoFocus
        spellCheck
      />
    </Slate>
  )
};
export default ReportEditor;
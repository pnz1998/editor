/** @jsxImportSource @emotion/react */
import { FC, ReactNode } from "react";
import { useSlate } from 'slate-react';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Editor } from "slate";
import { BaseEditor } from 'slate';

interface MarkButtonModel {
  format: string,
  icon: ReactNode
};

const MarkButton: FC<MarkButtonModel> = ({ format, icon }) => {
  const editor: BaseEditor = useSlate();
  const [ isAvtive, setIsActive ] = useState<boolean>(false);

  const isMarkActive = (editor: any, format: string) => {
    const marks: any = Editor.marks(editor);
    return marks ? marks[format] === true : false
  }
  const toggleMark = (): void => {
    const active = isMarkActive(editor, format);
    if(active) {
      Editor.removeMark(editor, format);
      setIsActive(false);
    } else {
      Editor.addMark(editor, format, true);
      setIsActive(true);
    }
  };
  return (
    <span
      css={css`
        color: ${
          isAvtive? '#414F58' : '#949CA2'
        };
        &:hover {
          color: #414F58;
          cursor: pointer;
        }
      `}
      onMouseDown={(event) => {
        event.preventDefault();
        setIsActive(!isAvtive);
        toggleMark();
      }}
    >
      {icon}
    </span>
  )
};
export default MarkButton;
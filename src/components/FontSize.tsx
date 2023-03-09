/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";
import { FC } from "react";
import { BaseEditor } from "slate";
import { useSlate } from "slate-react";
import { FontSizeModel } from "../core/models/EditorModels";
import { useState } from 'react';

const FontSize: FC<FontSizeModel> = ({ fontSize, tooltip }) => {
  const editor: BaseEditor = useSlate();
  const [ visible, setVisible ] = useState<boolean>(false);
  return (
    <span>
      <Tooltip title={tooltip}>
        <div
          css={css`
            position: relative;
            &:hover {
              color: #414F58;
              cursor: pointer;
            };
            font-size: 1.2rem;
            font-weight: bold;
            width: 48px;
            height: 52px;
            line-height: 46px;
          `}
          onMouseDown={event => {
            event.preventDefault();
            setVisible(!visible);
          }}
        >
          {fontSize}
        </div>
      </Tooltip>
      <div
        css={css`
          position: absolute;
          display: ${
            visible? 'block':'none'
          };
          background: #000;
          width: 52px;
        `}
      >
        <span>1</span>
      </div>
    </span>
  )
};
export default FontSize;
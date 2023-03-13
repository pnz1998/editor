/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";
import { FC } from "react";
import { BaseEditor } from "slate";
import { useSlate } from "slate-react";
import { ToolbarButtonModel } from "../core/models/EditorModels";
import { TEXT_ALIGN_TYPES } from "../core/utils/fontConstant";
import { isBlockActive, toggleBlock } from "../core/utils/toggleBlock";

const BlockButton: FC<ToolbarButtonModel> = ({ format, icon, tooltip }) => {
  const editor: BaseEditor = useSlate();

  return (
    <Tooltip title={tooltip}>
      <span
        css={css`
          color: ${
            isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')? '#414F58' : '#949CA2'
          };
          &:hover {
            color: #414F58;
            cursor: pointer;
          }
        `}
        onMouseDown={event => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {icon}
      </span>
    </Tooltip>
  )
};
export default BlockButton;
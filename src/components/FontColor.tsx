/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";
import { FC, useState } from "react";
import { BaseEditor, Editor } from "slate";
import { useSlate } from "slate-react";
import { FontColorModel } from "../core/models/EditorModels";
import { FONTCOLORLIST } from "../core/utils/constant/fontConstant";
import { ArrowDropDown } from "./Icons";

const FontColor: FC<FontColorModel> = ({ tooltip }) => {
  const editor: BaseEditor = useSlate();
  const [ visible, setVisible ] = useState<boolean>(false);
  const fontColorActive = (editor: any) => {
    const marks: any = Editor.marks(editor);
    if(!marks) return
    if(!marks.color) return '#000'
    return marks['color']
  }
  return (
    <span
      css={css`
        position: relative;
      `}
    >
      <Tooltip title={tooltip}>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              color: #949CA2;
              &:hover {
                color: #414F58;
                cursor: pointer;
              };
              font-size: 1.2rem;
              font-weight: bold;
              width: 62px;
              height: 52px;
              line-height: 46px;
              display: flex;
              margin-left: 12px;
            `}
            onMouseDown={event => {
              event.preventDefault();
              setVisible(!visible);
            }}
          >
            <div
              css={css`
                display: inline-block;
                width: 22px;
                line-height: 53px;
              `}
            >
              <span 
                css={css`
                  display: inline-block;
                  width: 22px;
                  height: 22px;
                  background: ${fontColorActive(editor)?? '#000'};
                `}
              >
              </span>
            </div>
            <ArrowDropDown />
          </div>
        </div>
      </Tooltip>
      <div
        css={css`
          position: absolute;
          right: -80px;
          display: ${
            visible? 'block':'none'
          };
          background: #fff;
          width: 200px;
          height: 168px;
          overflow-y: auto;
          border: 1px solid rgba(0, 0, 0, 0.12);
          margin-top: 7px;
          padding: 12px;
          &::-webkit-scrollbar {
            width: 3px;
          };
          &::-webkit-scrollbar-track{
            background: rgb(239, 239, 239);
            border-radius:2px;
          };
          &::-webkit-scrollbar-thumb{
            background: #bfbfbf;
            border-radius:10px;
          };
          &::-webkit-scrollbar-thumb:hover{
            background: #333;
          };
          &::-webkit-scrollbar-corner{
            background: #179a16;
          }
        `}
      >
        {
          FONTCOLORLIST.map((item, index) => {
            return (
              <span
                css={css`
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background: ${item};
                  margin-right: 5px;
                  cursor: pointer;
                `}
                key={index}
                onMouseDown={event => {
                  event.preventDefault();
                  setVisible(false);
                  Editor.addMark(editor, 'color', item);
                }}
              ></span>
            )
          })
        }
      </div>
    </span>
  )
};
export default FontColor;
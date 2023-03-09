/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react'
import { FormatBoldIcon, FormatFontSizeIcon, FormatItalicIcon } from "./Icons";
import MarkButton from "./MarkButton";

const Toolbar: FC = () => {
  return (
    <div
      css={css`
        width: 21cm;
        height: 55px;
        line-height: 65px;
        margin: 10px auto;
        position: sticky;
        top: 0;
        z-index: 1;
        background: white
      `}
    >
      <MarkButton format="bold" icon={<FormatBoldIcon />}/>
      <MarkButton format="italic" icon={<FormatItalicIcon />}/>
      <MarkButton format="font-size" icon={<FormatFontSizeIcon />}/>
    </div>
  )
};
export default Toolbar;
/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react'
import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight, FormatBoldIcon, FormatItalicIcon, FormatStrikethroughIcon, FormatUnderlinedIcon, SubscriptIcon, SupscriptIcon } from "./Icons";
import MarkButton from "./MarkButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FontSize from "./FontSize";
import FontColor from "./FontColor";
import HighlightColor from "./HighlightColor";
import BlockButton from "./BlockButton";

const Toolbar: FC = () => {
  return (
    <div
      css={css`
        width: 21cm;
        height: 65px;
        margin: 15px auto 0;
        position: sticky;
        top: 0;
        z-index: 1;
      `}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <MarkButton format="bold" tooltip="加粗" icon={<FormatBoldIcon />}/>
        <MarkButton format="italic" tooltip="斜体" icon={<FormatItalicIcon />}/>
        <MarkButton format="underline" tooltip="下划线" icon={<FormatUnderlinedIcon />}/>
        <MarkButton format="strikethrough" tooltip="删除线" icon={<FormatStrikethroughIcon />}/>
        <MarkButton format="supscript" tooltip="上标" icon={<SupscriptIcon />}/>
        <MarkButton format="subscript" tooltip="下标" icon={<SubscriptIcon />}/>
        <Divider orientation="vertical" variant="middle" flexItem/>
        <FontSize tooltip="字号"/>
        <FontColor tooltip="字体颜色"/>
        <HighlightColor tooltip="突出显示"/>
        <Divider orientation="vertical" variant="middle" flexItem/>
        <BlockButton format="left" tooltip="左对齐" icon={<FormatAlignLeft />}/>
        <BlockButton format="center" tooltip="居中对齐" icon={<FormatAlignCenter />}/>
        <BlockButton format="right" tooltip="右对齐" icon={<FormatAlignRight />}/>
        <BlockButton format="justify" tooltip="两端对齐" icon={<FormatAlignJustify />}/>
      </Box>
    </div>
  )
};
export default Toolbar;
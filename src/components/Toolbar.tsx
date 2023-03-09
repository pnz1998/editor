/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react'
import { FormatBoldIcon, FormatFontSizeIcon, FormatItalicIcon } from "./Icons";
import MarkButton from "./MarkButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FontSize from "./FontSize";

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
        <Divider orientation="vertical" variant="middle" flexItem/>
        <FontSize fontSize="18" tooltip="字号" />
      </Box>
    </div>
  )
};
export default Toolbar;
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon"

export const FormatBoldIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
    </SvgIcon>
  );
};

export const FormatItalicIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/>
    </SvgIcon>
  )
};

export const FormatFontSizeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>
    </SvgIcon>
  )
};

export const FormatTitleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 4v3h5.5v12h3V7H19V4H5z"/>
    </SvgIcon>
  )
};
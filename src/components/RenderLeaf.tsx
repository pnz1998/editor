/** @jsxImportSource @emotion/react */
import { RenderLeafProps } from "slate-react";
import { css } from '@emotion/react';

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps): JSX.Element => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.fontSize || leaf.color) {
    children = <span css={css`font-size: ${leaf.fontSize}px; color: ${leaf.color};`}>{children}</span>
  }
  // if (leaf.color) {
  //   children = <span css={css`color: ${leaf.color};`}>{children}</span>
  // }
  return <span {...attributes}>{children}</span>
}
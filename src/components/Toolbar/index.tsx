/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { css } from '@emotion/react'
import { FormatBoldIcon } from "../../assets/icons/FormatBold";
import { useState } from 'react';

interface Position {
  posX: number,
  posY: number
}
const Toolbar: FC = () => {
  const [position, setPosition] = useState<Position>({ posX: 400, posY: 400 });
  const onDragStart = () => {
    console.log(11)
  }
  return (
    <div
      draggable="true"
      onDragStart={onDragStart}
      onDragOver={event => {
        event.preventDefault()
      }}
      css={css`
        background: #9c27b0;
        width: 200px;
        display: flex;
        position: absolute;
        // left: ${position.posX}px;
        // top: ${position.posY}px;
        z-index: 1;
      `}
    >
      <FormatBoldIcon
        sx={{
          color: '#ffffff',
          '&:hover': {
            background: '#651fff'
          }
        }}
      />
      <FormatBoldIcon
        sx={{
          color: '#ffffff',
          '&:hover': {
            background: '#651fff'
          }
        }}
      />
      <FormatBoldIcon
        sx={{
          color: '#ffffff',
          '&:hover': {
            background: '#651fff'
          }
        }}
      />
    </div>
  )
};
export default Toolbar;
import React from "react";

interface SunSvgProps{
  size?: number;
  color?: string;
}

export const SunSvg = ({
  size = 48,
  color = '#f4f4f4',
  ...props
}: SunSvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 -960 960 960'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      aria-label='SunSvg'
      role='img'
      {...props}>
        <path
          d='M480-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-450H40v-60h160v60Zm720 0H760v-60h160v60ZM450-760v-160h60v160h-60Zm0 720v-160h60v160h-60ZM262-658l-100-97 43-44 96 100-39 41Zm494 496-98-100 41-41 99 98-42 43Zm-99-537 98-99 44 42-99 98-43-41ZM162-205l99-98 42 42-98 99-43-43Zm318-275Z'
        />
      </svg>
  );
};
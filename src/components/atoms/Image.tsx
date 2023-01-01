import { ImgHTMLAttributes, FC } from "react";
import { Box, SxProps } from "@mui/material"

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  sx?: SxProps
}

export const Image: FC<ImageProps> = ({ src, alt, sx }) => {
  return (
    <Box component="img" src={src} alt={alt} sx={sx}  />
  )
}
import { Box, SxProps } from "@mui/material"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode,
  sx?: SxProps
}

export const Row: FC<Props> = ({children, sx}) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      ...sx,
    }}>{children}</Box>
  )
}
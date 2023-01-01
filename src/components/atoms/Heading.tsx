import { Box } from "@mui/material"
import { FC, ReactNode } from "react"

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

export const Heading: FC<Props> = ({level, children}) => {
  return <Box component={`h${level}`}>{children}</Box>
}
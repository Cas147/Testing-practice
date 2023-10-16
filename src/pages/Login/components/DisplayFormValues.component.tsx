import { Box, Typography } from "@mui/material"
import { DisplayFormValuesTypes } from "../types"

export const DisplayFormValues = ({isDirty, isValid, values: {username, password}}:DisplayFormValuesTypes): JSX.Element => {
  return (
    <Box color="grey.600" mt={1}>
    {isDirty && !isValid && (
      <>
        <Typography>UserName: {username}</Typography>
        <Typography>Password: {password}</Typography>
      </>
    )}
  </Box>
  )
}

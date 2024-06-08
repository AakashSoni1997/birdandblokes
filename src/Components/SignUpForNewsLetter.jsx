import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const SignUpForNewsLetter = () => {
  return (
    <Box py={4}>

      <Grid container sx={{ background: "#F3CCAF47", position: "relative" }} alignItems={"center"} justifyContent={"space-around"} >
        <Grid item display={"flex"} flexDirection={"column"} p={2}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "68.25px",
              textAlign: "left"
            }}>
            SIGN UP NEWSLETTER
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
              textAlign: "left"

            }}
          >
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY
          </Typography>
        </Grid>
        <Grid item >
          <TextField InputProps={{
            endAdornment: <Box sx={{ background: "black", display: "flex", justifyContent: "center", padding: 1 }}><SendIcon sx={{ color: "white" }} fontSize='large' /></Box>,
          }}
            placeholder='Your email address'
            sx={{
              width: "140%",
              ".MuiInputBase-root ": {
                height: "50px",
                paddingRight: 0
              },
              ".MuiInputBase-adornedEnd": {
                background: "white",
                // color: "blue"
              },
              ".MuiInputBase-inputAdornedEnd": {
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,

              }
            }}
          />
        </Grid>
        <Box height={"135%"} sx={{ position: "absolute", top: "-18%", left: "1.5%", border: "6px solid #C0BCBC", width: "97%" }}>
        </Box>
      </Grid>
    </Box>
  )
}

export default SignUpForNewsLetter
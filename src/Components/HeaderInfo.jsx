import { Grid, Typography } from '@mui/material'
import React from 'react'

const HeaderInfo = () => {
  return (
    <Grid sx={{ background: "#EEB78E", display: "flex", justifyContent: "center", p: 1 }}>
      <Typography sx={{
        fontFamily: 'Poppins',
        fontSize: '17px',
        fontWeight: 400,
        lineHeight: '25.5px',
        textAlign: 'right',
      }}>Free Domestic Shipping on All Orders Over $75.</Typography>
    </Grid>
  )
}

export default HeaderInfo
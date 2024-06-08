import { Grid } from '@mui/material'
import React from 'react'
import NeverPayRetailImage from "../assets/images/NeverPayRetail.svg"


const NeverPayRetailSection = () => {
  return (
    <Grid p={4}>
      <img src={NeverPayRetailImage} height={"100%"} width={"100%"} />
    </Grid>
  )
}

export default NeverPayRetailSection
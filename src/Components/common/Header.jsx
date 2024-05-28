import { FormControl, Grid } from '@mui/material'
import React from 'react'
import logoImage from "../../assets/images/mainLogo.svg"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Header = () => {
  return (
    <Grid container sx={{ background: "#141414", color: "white" }}>
      <Grid item container xs={12} alignItems={"center"} p={4}>
        <Grid item xs={4} display={"flex"} justifyContent={"left"} gap={1}>
          <span>$ US </span>
          <span>| About US</span>
        </Grid>
        <Grid item xs={4} display={"flex"} justifyContent={"center"} >
          <img src={logoImage} alt="logo_image" height={50} width={300} />
        </Grid>
        <Grid item xs={4} display={"flex"} justifyContent={"right"}>Login | Signup <span><ShoppingBagIcon /></span></Grid>
      </Grid>
      <Grid item xs={12}>B</Grid>
      <Grid item xs={12}>C</Grid>
    </Grid >
  )
}

export default Header
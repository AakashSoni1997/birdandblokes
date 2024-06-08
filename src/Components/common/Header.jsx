import { FormControl, Grid, TextField } from '@mui/material'
import React from 'react'
import logoImage from "../../assets/images/mainLogo.svg"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

const mockDataLinks = [{
  id: 1,
  title: "Whats new",
  link: "/whats-new"
},
{
  id: 2,
  title: "Shop",
  link: "/shop"
}, {
  id: 3,
  title: "Learn",
  link: "/learn"
},
{
  id: 4,
  title: "About",
  link: "/about"
},
{
  id: 5,
  title: "Contact",
  link: "/contact"
}
]

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
        <Grid item xs={4} display={"flex"} justifyContent={"right"} gap={2}><span>Login</span> <span> | </span> <span>Signup</span> <span><ShoppingBagIcon /></span></Grid>
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} >
        <TextField sx={{
          width: "50%",
          borderRadius: "20px",
          ".MuiInputBase-root": {
            borderRadius: "40px",
            background: "#232323",
            color: "white"
          }
        }}
          InputProps={{
            endAdornment: <SearchIcon fontSize='large' />,
          }}
          placeholder='What can we help you find?' />
      </Grid>
      <Grid item xs={12} display={"flex"} gap={2} justifyContent={"center"} p={4}>
        {mockDataLinks.map(({ id, title, link }) => (
          <a style={{
            textDecoration: "none", color: "#FFFFFF",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "20.01px",
            letterSpacing: "0.01em",
            textAlign: "center",
          }} key={id} href={link}>{title}</a>
        ))}
      </Grid>
    </Grid >
  )
}

export default Header
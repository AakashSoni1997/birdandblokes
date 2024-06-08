import React from "react";
import { Grid, Box, Typography, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import logoSrc from "../../assets/images/mainLogo.svg";
import LeafImage from "../../assets/images/brightLeaf.svg";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", padding: 4 }}>
      <Grid display={"flex"} justifyContent={"center"}>
        <img src={logoSrc} height={"100px"} width={"200px"} alt="pic" />
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "18px",
              lineHeight: "30.27px",
            }}
          >
            COMPANY
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            about
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            how we give back
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            careers
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            press
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            news
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "18px",
              lineHeight: "30.27px",
            }}
          >
            CUSTOMER SERVICE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            contact
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            my account
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            track my order
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            shipping & returns
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            faqs
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            subscription terms
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "18px",
              lineHeight: "30.27px",
            }}
          >
            CUSTOMER SERVICE
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            Shop
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            Beauty
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            Food
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            Style
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            Travel
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "26.91px",
            }}
          >
            Wellness
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "18px",
              lineHeight: "30.27px",
            }}
          >
            CONNECT WITH B&B
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MailOutlineIcon sx={{ marginRight: 1 }} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
            <InstagramIcon sx={{ marginRight: 1 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "18px",
              lineHeight: "30.27px",
            }}
          >
            EMAIL SIGN UP
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Subscribe to our newsletter (and get 10% off your first purchase!*)
          </Typography>
          <TextField
            InputProps={{
              endAdornment: (
                <Box
                  sx={{
                    background: "#EEB78E",
                    display: "flex",
                    justifyContent: "center",
                    padding: 1,
                  }}
                >
                  <SendIcon sx={{ color: "black" }} fontSize="large" />
                </Box>
              ),
            }}
            placeholder="Your email address"
            sx={{
              width: "100%",
              ".MuiInputBase-root ": {
                height: "50px",
                paddingRight: 0,
              },
              ".MuiInputBase-adornedEnd": {
                background: "white",
              },
              ".MuiInputBase-inputAdornedEnd": {
                color: "#000000",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: 400,
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"}>
        <img src={LeafImage} height={"100px"} width={"200px"} alt="pic" />
      </Grid>
      <Box sx={{ marginTop: 4, paddingTop: 2 }}>
        <Typography variant="body2" align="center">
          Privacy policy | Terms of use | Do not sell my information |
          Accessibility
        </Typography>
        <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
          ©2022 Inc. All Rights Reserved. Birds&Blokes® is a registered
          trademark of Goop, Inc. and is registered with the U.S. Patent and
          Trademark Office.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

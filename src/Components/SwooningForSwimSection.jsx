import { Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import SwooningImage from "../assets/images/SwooningSwim.svg";
import LeafImage from "../assets/images/leafImage.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#F5F6F9",
  color: "#000000",
  padding: "12px 16px",
  borderRadius: 0,
  border: "3px solid #000000",
  " .MuiButtonBase-root": {},
  ":hover": {
    background: "#F5F6F9",
  },
  fontFamily: "Poppins",
  fontSize: "20px",
  fontStyle: "italic",
  fontWeight: "700",
  lineHeight: "33.64px",
  textAlign: "left",
}));

const SwooningForSwimSection = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        p={4}
        sx={{ background: "#EEB78E" }}
        justifyContent={"center"}
      >
        <img src={LeafImage} height={"30%"} width={"30%"} alt="pic" />
        <Grid item xs={9}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: "57.73px",
              textAlign: "center",
            }}
          >
            SWOONING FOR SWIM SEASON
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Celebrate a chapter (or two) from the story of her life.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <StyledButton
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  ml: 2,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #EEB78E 39.06%, #834415 100%)",
                }}
              />
            }
            sx={{ borderColor: "#000000" }}
          >
            View More
          </StyledButton>
        </Grid>
      </Grid>
      <Grid></Grid>
      <img src={SwooningImage} height={"100%"} width={"100%"} alt="pic" />
    </Grid>
  );
};

export default SwooningForSwimSection;

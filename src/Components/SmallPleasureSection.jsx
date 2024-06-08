import { Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import smallPleasureImage from "../assets/images/smallPleasures.svg";

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

const SmallPleasureSection = () => {
  return (
    <Grid
      container
      sx={{
        background:
          "linear-gradient(90deg, #F6EBE7 50%, rgba(246, 235, 231, 0) 98.14%)",
      }}
    >
      <Grid item xs={6}>
        <img
          src={smallPleasureImage}
          width={"100%"}
          height={"100%"}
          alt="pic"
        />
      </Grid>
      <Grid
        item
        xs={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"start"}
        gap={4}
        py={8}
        px={4}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "64px",
            fontWeight: "900",
            lineHeight: "85.88px",
            textAlign: "left",
          }}
          variant="h2"
        >
          Small Pleasures
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Poppins",
            fontSize: "30px",
            fontWeight: "800",
            lineHeight: "40.26px",
            textAlign: "left",
          }}
        >
          HYALURONIC SERUM
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "30.27px",
            textAlign: "left",
          }}
        >
          We transparently build high-quality minimal watches from the finest
          components and materials.
        </Typography>
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
  );
};

export default SmallPleasureSection;

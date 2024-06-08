import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import TimeForGivingImage from "../assets/images/TimeForGiving.svg";
import TimeForGivingImage2 from "../assets/images/timeForGiving2.svg";
import ReactPlayer from "react-player/youtube";

const TimeForGiving = () => {
  return (
    <Grid container p={4} gap={2}>
      <Grid item container xs={12} spacing={2}>
        <Grid item xs={6} position={"relative"}>
          <img
            src={TimeForGivingImage}
            height={"100%"}
            width={"100%"}
            alt="pic"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "3px",
              background: "#FFFFFFE5 90%",
              width: "97%",
              padding: 1.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "30.27px",
                letterSpacing: "0.01em",
                textAlign: "left",
              }}
              variant="subtitle1"
            >
              Men’s & Women's
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "42px",
                fontWeight: 900,
                lineHeight: "56.36px",
                letterSpacing: "0.01em",
                textAlign: "left",
              }}
              variant="h4"
            >
              Time for giving
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} position={"relative"}>
          <img
            src={TimeForGivingImage2}
            height={"100%"}
            width={"100%"}
            alt="pic"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "3px",
              background: "#FFFFFFE5 90%",
              width: "97%",
              padding: 1.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "30.27px",
                letterSpacing: "0.01em",
                textAlign: "left",
              }}
              variant="subtitle1"
            >
              Men’s & Women's
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "42px",
                fontWeight: 900,
                lineHeight: "56.36px",
                letterSpacing: "0.01em",
                textAlign: "left",
              }}
              variant="h4"
            >
              Time for giving
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dPMk6_HTBq8&pp=ygURbGVhcm4gZnVsbCBzdGFrYyA%3D"
          width={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default TimeForGiving;

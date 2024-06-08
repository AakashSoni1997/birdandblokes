import React from 'react';
import socialMediaCardImage1 from "../assets/images/weather1.jpg";
import socialMediaCardImage2 from "../assets/images/weather2.jpg";
import socialMediaCardImage3 from "../assets/images/weather3.jpg";
import socialMediaCardImage4 from "../assets/images/weather4.jpg";
import { Grid, Box, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const iconMapping = {
  TwitterIcon: <TwitterIcon sx={{ fontSize: 40, color: 'white' }} />,
  FacebookIcon: <FacebookIcon sx={{ fontSize: 40, color: 'white' }} />,
  InstagramIcon: <InstagramIcon sx={{ fontSize: 40, color: 'white' }} />,
  PinterestIcon: <PinterestIcon sx={{ fontSize: 40, color: 'white' }} />,
};

const mockDataSocialCard = [
  {
    id: 1,
    iconSrc: "TwitterIcon",
    description: "Exclusive workouts, office hours with experts, recipes, and more.",
    socialMediaLink: "@shopbirdsabndblokes",
    backgroundImageSrc: socialMediaCardImage1,
  },
  {
    id: 2,
    iconSrc: "FacebookIcon",
    description: "Exclusive workouts, office hours with experts, recipes, and more.",
    socialMediaLink: "@shopbirdsabndblokes",
    backgroundImageSrc: socialMediaCardImage2,
  },
  {
    id: 3,
    iconSrc: "InstagramIcon",
    description: "Exclusive workouts, office hours with experts, recipes, and more.",
    socialMediaLink: "@shopbirdsabndblokes",
    backgroundImageSrc: socialMediaCardImage3,
  },
  {
    id: 4,
    iconSrc: "PinterestIcon",
    description: "Exclusive workouts, office hours with experts, recipes, and more.",
    socialMediaLink: "@shopbirdsabndblokes",
    backgroundImageSrc: socialMediaCardImage4,
  },
];

const SocialMediaCard = () => {
  return (
    <Grid container >
      {mockDataSocialCard.map((item) => (
        <Grid
          key={item.id}
          item
          xs={3}
          sx={{
            backgroundImage: `url(${item.backgroundImageSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "25vh",
            position: 'relative',
            padding: 2,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            {iconMapping[item.iconSrc]}
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {item.socialMediaLink}
            </Typography>
            <Typography variant="body2">
              {item.description}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              FOLLOW US
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SocialMediaCard;

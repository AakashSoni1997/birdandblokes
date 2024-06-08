import React from 'react'
import PriceCard1 from "../assets/images/PriceCard1.svg"
import PriceCard2 from "../assets/images/PriceCard2.svg"
import PriceCard3 from "../assets/images/PriceCard3.svg"
import PriceCard4 from "../assets/images/PriceCard4.svg"
import { Button, Grid, Typography, styled } from '@mui/material'


const priceCardMockData = [{
  id: 1,
  title: "Movado Men’s Watch in Stainless Steel ",
  price: "155.00$ - 200.00$",
  imageSrc: PriceCard1
},
{
  id: 2,
  title: "Movado Men’s Watch in Stainless Steel ",
  price: "155.00$ - 200.00$",
  imageSrc: PriceCard2
},
{
  id: 3,
  title: "Movado Men’s Watch in Stainless Steel ",
  price: "155.00$ - 200.00$",
  imageSrc: PriceCard3
},
{
  id: 4,
  title: "Movado Men’s Watch in Stainless Steel ",
  price: "155.00$ - 200.00$",
  imageSrc: PriceCard4
}
]

const SelectedButton = styled(Button)(({ theme, condition }) => ({
  background: condition ? "#834415" : "#000000",
  color: "white",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "26.91px",
  borderRadius: 0,
  ":hover": {
    background: condition ? "#834415" : "#000000",
    color: "white",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26.91px",
    borderRadius: 0
  }
}))

const PriceCardSections = () => {
  return (
    <Grid container gap={4} p={4}>
      {priceCardMockData.map((priceCard, index) => (
        <Grid item xs={2.5} key={priceCard.id} p={1.5} display={"flex"} flexDirection={"column"} gap={1} sx={{ border: index === 0 ? "3px solid #EEB78E" : "none" }}>
          <img src={priceCard.imageSrc} height={"60%"} width={"100%"} />
          <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '26.04px',
            textAlign: 'left',
          }}>
            {priceCard.title}
          </Typography>
          <Typography
            sx={{
              color: "#EEB78E",
              fontFamily: 'Poppins',
              fontSize: '18px',
              fontWeight: 700,
              lineHeight: '30.27px',
              textAlign: 'left',
            }}
          >
            {priceCard.price}
          </Typography>
          <SelectedButton condition={index === 0}>Select Options</SelectedButton>
        </Grid>
      ))}
    </Grid>
  )
}

export default PriceCardSections
import { Container } from "@mui/material";
import { Footer, Header } from "./Components/common";
import HeaderInfo from "./Components/HeaderInfo";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import SmallPleasureSection from "./Components/SmallPleasureSection";
import TimeForGiving from "./Components/TimeForGiving";
import NeverPayRetailSection from "./Components/NeverPayRetailSection";
import PriceCardSections from "./Components/PriceCardSections";
import SwooningForSwimSection from "./Components/SwooningForSwimSection";
import SignUpForNewsLetter from "./Components/SignUpForNewsLetter";
import SocialMediaCard from "./Components/SocialMediaCard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <HeaderInfo />
        <Header />
        <SmallPleasureSection />
        <TimeForGiving />
        <NeverPayRetailSection />
        <PriceCardSections />
        <SwooningForSwimSection />
        <SignUpForNewsLetter />
        <SocialMediaCard />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

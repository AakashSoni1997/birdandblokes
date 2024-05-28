import { Container } from "@mui/material";
import { Footer, Header } from "./Components/common";
import HeaderInfo from "./Components/HeaderInfo";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <HeaderInfo />
        <Header />
        {/* Small Pleasures */}
        {/* Time for giving */}
        {/* Never Pay Retail Again! */}
        {/* Card with the price */}
        {/* SWOONING FOR SWIM SEASON */}
        {/* SIGN UP NEWSLETTER */}
        {/* Social media cards */}
        {/* <Footer /> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;

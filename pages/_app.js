import { useRouter } from "next/router";
import { AppProvider, Navbar } from "../components";
import theme from "../components/_base/theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Navigates to route when navlink is clicked on
  const handleRouteClick = ({ route }) => router.push(route);

  return (
    <AppProvider theme={theme}>
      <Navbar onClick={handleRouteClick} />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;

import { AppContainer, Blur } from "./app.style";
import AuthPage from "./pages/auth/auth.page";
import HomePage from "./pages/home/home.page";
import ProfilePage from "./pages/profile/profile.page";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppContainer>
        <Blur top="-18%" right="0" />
        <Blur top="36%" left="-8rem" />
        {/* <HomePage /> */}
        <ProfilePage />
        {/* <AuthPage /> */}
      </AppContainer>
    </MantineProvider>
  );
}

export default App;

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import Layout from "../@core/Layout/Layout";
import AppAuthrization from "./Auth/AppAuthrization";
import Routes from "./Routes";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NotificationsProvider autoClose={5000}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;

import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import Layout from "../@core/Layout/Layout";
import Routes from "./Routes";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

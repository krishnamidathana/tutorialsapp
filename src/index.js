import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom"; // Update the import

import App from "./App.js";
import ColorModeSwitcher from "./ColorModeSwitcher.js";

const container = document.getElementById("root");
const root = createRoot(container); // Use createRoot from 'react-dom'

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);

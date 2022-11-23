import GlobalStyle from "./assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

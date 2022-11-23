import GlobalStyle from "./assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import InfoGame from "./pages/InfoGame";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<InfoGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

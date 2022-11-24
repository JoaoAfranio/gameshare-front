import GlobalStyle from "./assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import InfoGame from "./pages/InfoGame";
import CategoryGames from "./pages/CategoryGames";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<InfoGame />} />
          <Route path="/category/:id" element={<CategoryGames />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

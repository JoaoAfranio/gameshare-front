import GlobalStyle from "./assets/css/GlobalStyle";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import InfoGame from "./pages/InfoGame";
import CategoryGames from "./pages/CategoryGames";
import Profile from "./pages/Profile";
import CartProvider from "./Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<InfoGame />} />
          <Route path="/category" element={<CategoryGames />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

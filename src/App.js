import GlobalStyle from "./assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import InfoGame from "./pages/InfoGame";
import CategoryGames from "./pages/CategoryGames";
import Profile from "./pages/Profile";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import SucessPage from "./pages/SucessPage";
import CartProvider from "./Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<InfoGame />} />
          <Route path="/category" element={<CategoryGames />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sucess" element={<SucessPage/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

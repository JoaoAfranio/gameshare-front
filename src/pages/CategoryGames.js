import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreviewGame from "../components/PreviewGame";
import COLORS from "../constants/colors";

export default function CategoryGames() {
  const location = useLocation();
  const category = location.state.category;
  const games = category.products;

  return (
    <Container>
      <Header title={category.name} />

      <BoxGames>
        {games.map((product) => (
          <PreviewGame product={product} />
        ))}
      </BoxGames>

      <Footer color={COLORS.secondary} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
`;

const BoxGames = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
`;

import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PreviewGame from "../components/PreviewGame";
import COLORS from "../constants/colors";

export default function CategoryGames() {
  return (
    <Container>
      <Header title="Tabuleiro" />

      <BoxGames>
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
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

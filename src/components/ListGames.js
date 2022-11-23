import styled from "styled-components";
import COLORS from "../constants/colors";
import Footer from "./Footer";
import PreviewGame from "./PreviewGame";

export default function ListGames() {
  return (
    <Container>
      <Header>
        <h1>Tabuleiro</h1>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Header>

      <BoxGames>
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
      </BoxGames>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  padding: 0px 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h1,
  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

const BoxGames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

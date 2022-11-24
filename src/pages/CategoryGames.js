import styled from "styled-components";
import PreviewGame from "../components/PreviewGame";
import COLORS from "../constants/colors";

export default function CategoryGames() {
  return (
    <Container>
      <Header>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <h1>Tabuleiro</h1>
      </Header>

      <BoxGames>
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
        <PreviewGame />
      </BoxGames>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
`;

const Header = styled.div`
  display: flex;
  gap: 20px;

  background-color: ${COLORS.secondary};

  width: 100%;
  height: 80px;
  padding: 20px;

  h1,
  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

const BoxGames = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
`;

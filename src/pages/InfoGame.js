import styled from "styled-components";
import DescriptionGame from "../components/DescriptionGame";
import COLORS from "../constants/colors";

export default function InfoGame() {
  return (
    <Container>
      <Header>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <h1>Detetive</h1>
      </Header>

      <DescriptionGame />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.secondary};
`;

const Header = styled.div`
  display: flex;
  gap: 20px;

  background-color: ${COLORS.primary};

  width: 100%;
  height: 130px;
  padding: 20px;

  h1,
  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

import styled from "styled-components";
import COLORS from "../constants/colors";

export default function Footer({ color }) {
  return (
    <Container color={color}>
      <ion-icon name="person"></ion-icon>
      <ion-icon name="game-controller"></ion-icon>
      <ion-icon name="cart"></ion-icon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 60px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: ${(props) => props.color};

  border-radius: 20px 20px 0 0;

  ion-icon {
    font-size: 22px;
    color: ${COLORS.purple};
  }
`;

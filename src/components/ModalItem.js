import styled from "styled-components";

import mockedIMG from "../assets/imgs/detetive.jpg";
import COLORS from "../constants/colors";

export default function ModalItem() {
  return (
    <Container>
      <BoxImg>
        <img alt="game" src={mockedIMG} />
      </BoxImg>
      <h1>Detetive</h1>
      <BoxHighlight>7.90/hr</BoxHighlight>
      <BoxHighlight className="delete">
        <ion-icon name="trash-bin"></ion-icon>
      </BoxHighlight>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxImg = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }
`;

const BoxHighlight = styled.div`
  background-color: ${COLORS.lightPrimary};
  color: #ffffff;
  padding: 10px;

  border-radius: 5px;

  &.delete {
    background-color: #cf513d;
    padding: 7px;
  }
`;

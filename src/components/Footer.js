import { useState } from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";
import ModalCart from "./ModalCart";

export default function Footer({ color }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Container color={color}>
        <ion-icon name="person"></ion-icon>
        <ion-icon name="game-controller"></ion-icon>
        <ion-icon
          onClick={() => {
            setShow(!show);
          }}
          name="cart"
        ></ion-icon>
      </Container>
      <ModalCart show={show} setShow={setShow} />
    </>
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

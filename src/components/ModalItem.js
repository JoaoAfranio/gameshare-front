import { useContext } from "react";
import styled from "styled-components";

import COLORS from "../constants/colors";
import { CartContext } from "../Contexts/CartContext";

export default function ModalItem({ product, id }) {
  const { cart, setCart } = useContext(CartContext);
  return (
    <Container>
      <BoxImg>
        <img alt="game" src={product.image} />
      </BoxImg>
      <h1>{product.name}</h1>
      <BoxHighlight>{product.value}/hr</BoxHighlight>
      <BoxHighlight
        onClick={() => {
          const listItems = cart;
          listItems.splice(id, 1);
          setCart([...listItems]);
        }}
        className="delete"
      >
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

import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";
import { CartContext } from "../Contexts/CartContext";
import { purchase } from "../services/purchase";
import ModalItem from "./ModalItem";
import swal from "sweetalert";

export default function ModalCart({ show, setShow }) {
  const [totalCart, setTotalCart] = useState();

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += Number(item.value);
    });

    setTotalCart(total);
  }, [cart]);

  if (!show) {
    return;
  }

  function renderItems() {
    if (cart.length > 0) {
      return cart.map((product, idx) => <ModalItem key={idx} product={product} id={idx} />);
    }
    return <TextAlertCart>Você não possui nenhum item no carrinho </TextAlertCart>;
  }

  async function sendPurchase() {
    if (cart.length === 0) {
      swal("Carrinho esta vazio", "Adicione itens ao carrinho", "warning");
      return;
    }

    const userToken = localStorage.getItem("userToken");
    const products = cart.map((items) => items._id);

    try {
      await purchase(products, totalCart, userToken);
      swal("Sucesso", "Compra realizada com sucesso", "success");
      setTotalCart(0);
      setCart([]);
    } catch (err) {
      swal("Ocorreu um erro", err.response.data.message, "error");
    }
  }

  return (
    <ContainerOpacity>
      <Container>
        <Header>
          <h1>Carrinho</h1>
          <ion-icon
            name="close"
            onClick={() => {
              setShow(!show);
            }}
          ></ion-icon>
        </Header>
        <List>{renderItems()}</List>

        <Footer>
          <BoxValue>
            <h1>Total</h1>
            <h1>R$ {totalCart.toFixed(2)}</h1>
          </BoxValue>

          <Button
            onClick={() => {
              sendPurchase();
            }}
          >
            Concluir
          </Button>
        </Footer>
      </Container>
    </ContainerOpacity>
  );
}

const ContainerOpacity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  background: #000000ab;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 350px;
  height: 400px;
  background-color: ${COLORS.lightGrey};
  border-radius: 15px;
  position: absolute;
`;

const Header = styled.div`
  display: flex;
  position: relative;
  padding: 15px;

  height: 70px;

  border-radius: 15px 15px 0 0;
  background-color: ${COLORS.lightPrimary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 24px;
    color: #ffffff;
  }

  ion-icon {
    position: absolute;
    right: 15px;
    font-size: 22px;
    color: #ffffff;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0px;

  padding: 0 20px;

  width: 100%;
  height: 40px;

  border-radius: 0 0 15px 15px;
  background-color: ${COLORS.lightPrimary};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 20px;
  }
`;

const BoxValue = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${COLORS.lightGrey};
`;

const Button = styled.button`
  height: 80%;
  border: none;
  outline: none;
  background-color: #7bc86c;
  color: #ffffff;
  border-radius: 5px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;

  max-height: 300px;
  overflow-y: auto;
`;

const TextAlertCart = styled.p`
  text-align: center;
`;

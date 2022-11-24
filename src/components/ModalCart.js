import styled from "styled-components";
import COLORS from "../constants/colors";
import ModalItem from "./ModalItem";

export default function ModalCart({ show, setShow }) {
  if (!show) {
    return;
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
        <List>
          <ModalItem />
          <ModalItem />
          <ModalItem />
          <ModalItem />
          <ModalItem />
        </List>

        <Footer>
          <BoxValue>
            <h1>Total</h1>
            <h1>R$ 50.70</h1>
          </BoxValue>

          <Button>Concluir</Button>
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
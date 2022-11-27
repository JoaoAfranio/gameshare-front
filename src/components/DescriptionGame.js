import { useContext } from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";
import { CartContext } from "../Contexts/CartContext";

export default function DescriptionGame({ product }) {
  const { cart, setCart } = useContext(CartContext);

  function addItemToCart() {
    const item = {
      _id: product._id,
      image: product.image,
      name: product.name,
      value: product.value,
    };

    setCart([...cart, item]);
  }

  return (
    <Description>
      <BoxImg>
        <img src={product.image} alt="game" />
      </BoxImg>
      <BoxText>
        <p className="title">{product.name}</p>
        <p className="info">{product.publisher}</p>
        <p className="value">R$ {product.value} /dia</p>
      </BoxText>
      <BoxButtons>
        <Button>
          <ion-icon
            onClick={() => {
              window.open(product.externalLink);
            }}
            name="bag"
          ></ion-icon>
        </Button>

        <Button>
          <ion-icon
            onClick={() => {
              addItemToCart();
            }}
            name="cart"
          ></ion-icon>
        </Button>
      </BoxButtons>
    </Description>
  );
}

const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  background-color: ${COLORS.lightPrimary};

  height: 90px;
  width: 90%;

  margin-top: -50px;

  border-radius: 15px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  position: relative;
`;

const BoxImg = styled.div`
  height: 100%;
  width: 100px;

  img {
    border-radius: 15px 0 0 15px;
    height: 100%;
    width: 100px;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${COLORS.primary};

  .title {
    font-size: 20px;
    font-weight: bold;
  }

  .value,
  .info {
    font-size: 14px;
    color: ${COLORS.secondary};
  }

  .value {
    color: #ffffff;
  }
`;

const BoxButtons = styled.div`
  display: flex;
  position: absolute;
  gap: 10px;

  bottom: 5px;
  right: 15px;
`;

const Button = styled.button`
  display: flex;

  padding: 5px;

  background-color: ${COLORS.secondary};
  border: 1px solid ${COLORS.secondary};
  border-radius: 5px;

  color: #ffffff;

  font-size: 18px;
`;

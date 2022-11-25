import styled from "styled-components";

import COLORS from "../constants/colors";

import { useNavigate } from "react-router-dom";

export default function PreviewGame({ product }) {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/games/${product._id}`);
      }}
    >
      <img src={product.image} alt="game" />
      <Info>
        <p>{product.name}</p>
        <p className="rating">
          {product.rating} <ion-icon name="star"></ion-icon>
        </p>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 25px;

  gap: 10px;

  img {
    width: 100px;
    height: 100px;

    border-radius: 15px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 16px;

    color: ${COLORS.lightGrey};
  }

  .rating {
    font-size: 14px;
  }
`;

import styled from "styled-components";

import mockedIMG from "../assets/imgs/detetive.jpg";
import COLORS from "../constants/colors";

export default function PreviewGame() {
  return (
    <Container>
      <img src={mockedIMG} alt="game" />
      <Info>
        <p>Detetive</p>
        <p className="rating">
          3.2 <ion-icon name="star"></ion-icon>
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

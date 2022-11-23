import styled from "styled-components";
import COLORS from "../constants/colors";

import mockedIMG from "../assets/imgs/detetive.jpg";

export default function DescriptionGame() {
  return (
    <Description>
      <BoxImg>
        <img src={mockedIMG} alt="game" />
      </BoxImg>
      <BoxText>
        <p className="title">Detetive</p>
        <p className="info">Editora Nacional</p>
        <p className="info">Policial</p>
      </BoxText>
      <BoxButtons>
        <Button>
          <ion-icon name="bag"></ion-icon>
        </Button>

        <Button>
          <ion-icon name="cart"></ion-icon>
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

  .info {
    font-size: 14px;
    color: ${COLORS.secondary};
  }

  .title {
    font-size: 18px;
    font-weight: bold;
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

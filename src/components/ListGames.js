import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../constants/colors";
import PreviewGame from "./PreviewGame";

export default function ListGames({ category }) {
  const games = (category?.products).slice(0, 3);
  const navigate = useNavigate();

  function navigation() {
    navigate("/category", { state: { category } });
  }

  return (
    <Container>
      <Header>
        <h1>{category.name}</h1>
        <ion-icon
          onClick={() => {
            navigation();
          }}
          name="arrow-forward-outline"
        ></ion-icon>
      </Header>

      <BoxGames>
        {games.map((product, idx) => (
          <PreviewGame key={idx} product={product} />
        ))}
      </BoxGames>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  padding: 0px 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h1,
  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

const BoxGames = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

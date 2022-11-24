import styled from "styled-components";
import ListGames from "../components/ListGames.js";
import COLORS from "../constants/colors.js";
import Footer from "../components/Footer";

export default function Games() {
  return (
    <Container>
      <SearchBox>
        <input placeholder="Pesquisar Jogos" />
        <ion-icon name="search-outline"></ion-icon>
      </SearchBox>

      <ListGames />
      <ListGames />

      <Footer color={COLORS.secondary} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};

  padding: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${COLORS.secondary};

  height: 55px;

  border-radius: 20px;

  input {
    font-size: 15px;
    color: ${COLORS.lightGrey};

    border: none;
    outline: none;
    background-color: ${COLORS.secondary};

    ::placeholder {
      color: #b4bad7;
    }
  }

  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

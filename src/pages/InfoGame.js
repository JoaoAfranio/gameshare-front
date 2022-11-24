import styled from "styled-components";
import DescriptionGame from "../components/DescriptionGame";
import COLORS from "../constants/colors";

export default function InfoGame() {
  return (
    <Container>
      <Header>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <h1>Detetive</h1>
      </Header>

      <DescriptionGame />

      <TextInfo>
        Jogo Detetive com App - Estrela! Um jogo de investigação acima de qualquer suspeita! Tudo começou na mansão de um rico industrial, Dr. Pessoa, a vítima
        do crime. Como um verdadeiro Sherlock, você está lá. Só que além de detetive, você também é um suspeito! Para chegar cada vez mais perto da solução
        deste mistério, vá entrando com seu peão nos possíveis locais do crime e dando palpites sobre o culpado e arma usada. Tire sua deduções e descubra a
        cada partida, um novo e emocionante mistério!
      </TextInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.secondary};
`;

const Header = styled.div`
  display: flex;
  gap: 20px;

  background-color: ${COLORS.primary};

  width: 100%;
  height: 130px;
  padding: 20px;

  h1,
  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

const TextInfo = styled.p`
  margin-top: 20px;
  padding: 0 20px;

  line-height: 20px;

  font-size: 16px;
  color: ${COLORS.lightGrey};
`;

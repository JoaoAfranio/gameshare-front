import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import COLORS from "../constants/colors";

export default function CategoryGames() {
  return (
    <Container>
      <Header title="Perfil" />
      <BoxInfo>
        <Info>
          <Label>Email</Label>
          <Input value="email@hotmail.com" disabled />
        </Info>

        <Info>
          <Label>Nome</Label>
          <Input placeholder="Nome" value="Nome da Pessoa" type="text" />
        </Info>

        <Info>
          <Label>Senha Antiga</Label>
          <Input placeholder="Senha antiga" type="password" />
        </Info>

        <Info>
          <Label>Nova Senha</Label>
          <Input placeholder="Nova Senha" type="password" />
        </Info>

        <Info>
          <Label>Confirmar Senha</Label>
          <Input placeholder="Confirmar senha" type="password" />
        </Info>

        <Button>Confirmar Alterações</Button>
      </BoxInfo>
      <Footer color={COLORS.secondary} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  margin-top: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 8px;
`;

const Label = styled.h1`
  color: ${COLORS.lightGrey};
  font-size: 20px;
`;

const Input = styled.input`
  background-color: ${COLORS.lightGrey};
  height: 30px;
  padding: 5px;

  border: none;
  outline: none;
  border-radius: 15px;
`;

const Button = styled.button`
  width: 80%;
  height: 40px;

  background-color: ${COLORS.purple};
  color: #ffffff;
  font-size: 16px;

  border: none;
  outline: none;
  border-radius: 15px;
`;

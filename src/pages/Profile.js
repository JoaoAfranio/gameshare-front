import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import COLORS from "../constants/colors";

export default function CategoryGames() {
  return (
    <Container>
      <Header title="Perfil" />
      <Title>Dados Pessoais</Title>
      <BoxInfo>
        <Info>
          <Label>Email</Label>
          <Input 
          value="email@hotmail.com" disabled />
        </Info>

        <Info>
          <Label>Nome</Label>
          <Input 
          placeholder="Nome" 
          value="Nome da Pessoa" 
          type="text" />
        </Info>

        <Button>Confirmar Alterações</Button>
      </BoxInfo>

      <Title>Alterar Senha</Title>
      <BoxInfo>
        <Info>
          <Label>Senha Antiga</Label>
          <Input 
          placeholder="Senha antiga" 
          type="password" />
        </Info>

        <Info>
          <Label>Nova Senha</Label>
          <Input 
          placeholder="Nova Senha" 
          type="password" />
        </Info>

        <Info>
          <Label>Confirmar Senha</Label>
          <Input 
          placeholder="Confirmar senha" 
          type="password" />
        </Info>

        <Button>Confirmar Nova Senha</Button>
      </BoxInfo>

      <Title>Alterar Endereço</Title>
      <BoxInfo>
        <Info>
          <Label>Endereço</Label>
          <Input 
          placeholder="Endereço" 
          type="text" />
        </Info>

        <Info>
          <Label>Cidade</Label>
          <Input 
          placeholder="Cidade" 
          type="text" />
        </Info>

        <Info>
          <Label>Estado</Label>
          <Input 
          placeholder="Estado" 
          type="text" />
        </Info>

        <Info>
          <Label>CEP</Label>
          <Input 
          placeholder="CEP" 
          type="text" />
        </Info>

        <Button>Confirmar Novo Endereço</Button>
      </BoxInfo>
      <Footer color={COLORS.secondary} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.primary};
  padding-bottom: 100px;
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
  padding: 5px 10px;

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

const Title = styled.h1`
  margin: 20px 0px 0px 15px;
  font-size: 22px;
  color: ${COLORS.lightGrey};
`;

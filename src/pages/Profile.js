import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';
import Footer from "../components/Footer";
import Header from "../components/Header";
import COLORS from "../constants/colors";

export default function CategoryGames() {
  const token = localStorage.getItem("token");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");

  function nameChange() {

    const body = {
      name: name,
      email: email
    };

    setTimeout(() => {
      const promise = axios.post("http://localhost:5000/profile-name", body,
          { headers: { Authorization: `Bearer ${token}` } });

      promise.then((res) => alert("Alteração realizada com sucesso!"));

      promise.catch((error) => alert(error.response.data.message));
  }, 2000);

  }

  function passwordChange() {

    const body = {
      oldPassword: oldPassword,
      newPassword: password,
      newPasswordConfirm: passwordConfirm
    };

    setTimeout(() => {
      const promise = axios.post("http://localhost:5000/profile-password", body,
          { headers: { Authorization: `Bearer ${token}` } });

      promise.then((res) => alert("Alteração realizada com sucesso!"));

      promise.catch((error) => alert(error.response.data.message));
  }, 2000);

  }

  function addressAdd() {

    const body = {
      address: address,
      city: city,
      state: state,
      cep: cep
    };

     setTimeout(() => {
      const promise = axios.post("http://localhost:5000/profile-address", body,
          { headers: { Authorization: `Bearer ${token}` } });

      promise.then((res) => alert("Alteração realizada com sucesso!"));

      promise.catch((error) => alert(error.response.data.message));
  }, 2000);

  }

  return (
    <Container>
      <Header title="Perfil" />
      <Title>Dados Pessoais</Title>
      <BoxInfo>
        <Info>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email" />
        </Info>

        <Info>
          <Label>Nome</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            type="text" />
        </Info>

        <Button type = "submit"
          onClick = {nameChange}>Confirmar Alterações</Button>
      </BoxInfo>

      <Title>Alterar Senha</Title>
      <BoxInfo>
        <Info>
          <Label>Senha Antiga</Label>
          <Input
            value={oldPassword}
            onChange={(e) => setOldPassword((e.target.value).toString())}
            placeholder="Senha antiga"
            type="password" />
        </Info>

        <Info>
          <Label>Nova Senha</Label>
          <Input
            value={password}
            onChange={(e) => setPassword((e.target.value).toString())}
            placeholder="Nova Senha"
            type="password" />
        </Info>

        <Info>
          <Label>Confirmar Senha</Label>
          <Input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm((e.target.value).toString())}
            placeholder="Confirmar senha"
            type="password" />
        </Info>

        <Button type = "submit"
        onClick = {passwordChange}>Confirmar Nova Senha</Button>
      </BoxInfo>

      <Title>Adicionar Endereço</Title>
      <BoxInfo>
        <Info>
          <Label>Endereço</Label>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Endereço"
            type="text" />
        </Info>

        <Info>
          <Label>Cidade</Label>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Cidade"
            type="text" />
        </Info>

        <Info>
          <Label>Estado</Label>
          <Input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Estado"
            type="text" />
        </Info>

        <Info>
          <Label>CEP</Label>
          <Input
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="CEP"
            type="text" />
        </Info>

        <Button type = "submit"
        onClick={addressAdd}>Confirmar Endereço</Button>
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

import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import COLORS from "../constants/colors";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    const body = {
      email: email,
      password: password,
    };

    setTimeout(() => {
      const promise = axios.post("http://localhost:5000/", body);

      promise.then((res) => {
        navigate("/games");
      });

      promise.catch((err) => {
        alert(err.response.data.message);
        setEmail("");
        setPassword("");
      });
    }, 2000);
  }

  return (
    <SignInUp>
      <Logo>
        <h1>GameShare</h1>
      </Logo>

      <Form>
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu email..." type="email" />

        <input name="password" value={password} onChange={(e) => setPassword(e.target.value.toString())} placeholder="Digite a sua senha..." type="password" />

        <button type="submit" onClick={login}>
          Entrar
        </button>
      </Form>

      <Registration>
        <LinkToLogin to="/sign-up">Não tem uma conta? Cadastre-se!</LinkToLogin>
      </Registration>
    </SignInUp>
  );
}

export default SignInPage;

const SignInUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(360deg, rgba(2, 0, 36, 1) 10%, rgba(31, 35, 65, 1) 90%, rgba(46, 50, 92, 1) 100%);
`;

const Logo = styled.div`
  width: 40vh;
  height: 15vh;
  margin-top: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 7vh;
    color: #ffffff;
  }
`;

const Form = styled.div`
  margin-top: 7vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 32vh;
    height: 6vh;
    padding-left: 4vh;
    margin-bottom: 3vh;
    border-radius: 15px;

    border: none;
    outline: none;
    background-color: ${COLORS.secondary};
    color: #ffffff;

    &::placeholder {
      color: ${COLORS.lightGrey};
    }
  }

  button {
    width: 37vh;
    height: 6vh;
    margin-top: 1vh;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 3vh;

    border-radius: 15px;
    outline: none;
    border: none;
    background-color: ${COLORS.purple};
    color: #ffffff;
  }
`;

const Registration = styled.div`
  width: 50vh;
  height: 4vh;
  margin-top: 4vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkToLogin = styled(Link)`
  font-weight: 400;
  font-size: 2vh;

  position: fixed;
  bottom: 5vh;

  text-decoration: none;
  color: #ffffff;
`;

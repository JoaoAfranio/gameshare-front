import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import COLORS from "../constants/colors";
import { ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function register(e) {
    e.preventDefault();

    const body = {
      email: email,
      name: name,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    setLoading(true);

    setTimeout(() => {
      const promise = axios.post("http://localhost:5000/sign-up", body);
      promise.then((res) => {
        swal("Sucesso", "Usuário cadastrado com sucesso!", "success");
        navigate("/");
      });
      promise.catch((err) => {
        swal("Ocorreu um erro", err.response.data.message, "error");
        setLoading(false);
        setEmail("");
        setName("");
        setPassword("");
        setPasswordConfirm("");
      });
    }, 2000);
  }

  return (
    <SignInUp>
      <Logo>
        <h1>GameShare</h1>
      </Logo>

      <Form
        onSubmit={(e) => {
          register(e);
        }}
      >
        <input required name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite o seu nome" type="text" />

        <input required name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu email" type="email" />

        <input
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.toString())}
          placeholder="Digite sua senha"
          type="password"
        />

        <input
          required
          name="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value.toString())}
          placeholder="Digite sua senha novamente"
          type="password"
        />

        <button type="submit">
          {loading ? (
            <ThreeDots height="80" width="80" radius="9" color="#ffffff" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
          ) : (
            "Cadastrar"
          )}
        </button>
      </Form>

      <Registration>
        <LinkToLogin to="/">Já tem uma conta? Entre agora!</LinkToLogin>
      </Registration>
    </SignInUp>
  );
}

export default SignUpPage;

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
  margin-bottom: 5vh;

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

const Form = styled.form`
  margin-top: 4vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

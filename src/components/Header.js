import styled from "styled-components";
import COLORS from "../constants/colors";
import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <Container>
      <ion-icon
        onClick={() => {
          navigate(-1);
        }}
        name="arrow-back-outline"
      ></ion-icon>
      <h1>{title}</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 20px;

  background-color: ${COLORS.secondary};

  width: 100%;
  height: 80px;
  padding: 20px;

  h1,
  ion-icon {
    font-size: 22px;
    color: ${COLORS.lightGrey};
  }
`;

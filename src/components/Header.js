import styled from "styled-components";
import COLORS from "../constants/colors";

export default function Header({ title }) {
  return (
    <Container>
      <ion-icon name="arrow-back-outline"></ion-icon>
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

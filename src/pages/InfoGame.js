import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DescriptionGame from "../components/DescriptionGame";
import Footer from "../components/Footer";
import COLORS from "../constants/colors";
import { findProductByID } from "../services/products";
import { useNavigate } from "react-router-dom";

export default function InfoGame() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProductByID();
  }, []);

  async function getProductByID() {
    const res = await findProductByID(id);
    setProduct(res.data);
  }

  return (
    <Container>
      <Header>
        <ion-icon
          onClick={() => {
            navigate(-1);
          }}
          name="arrow-back-outline"
        ></ion-icon>
        <h1>Informações do Jogo</h1>
      </Header>

      <DescriptionGame product={product} />

      <TextInfo>{product.description}</TextInfo>

      <Footer color={COLORS.primary} />
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

import styled from "styled-components";
import COLORS from "../constants/colors";
import Footer from "../components/Footer";

function SucessPage() {
    return (
        <SucessScreen>
            <Icon>
                <ion-icon name="checkmark-circle"></ion-icon>
            </Icon>
            <p>Pedido realizado com sucesso!</p>
            <Footer color={COLORS.secondary} />
        </SucessScreen>
    )
}

export default SucessPage;

const SucessScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 43vh;
    background-color: ${COLORS.primary};

    p{
        margin-top: 2vw;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 3.5vw;
        color: white;
    }
`;

const Icon = styled.div`
    ion-icon{
        font-size: 10vw;
        color: green;
    }
`
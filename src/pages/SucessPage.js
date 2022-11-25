import styled from "styled-components";

function SucessPage() {
    return (
        <SucessScreen>
            <ion-icon name="checkmark-circle"></ion-icon>
            <p>Pedido realizado com sucesso!</p>
        </SucessScreen>
    )
}

export default SucessPage;

const SucessScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 43vh;

    ion-icon{
        font-size: 15vw;
        color: green;
    }

    p{
        margin-top: 2vw;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 5vw;
    }
`;
import  styled  from "styled-components"


export default function PortfolioValue(){

    return(
        <StyledSection>
            <h3>My Holdings</h3>
            <p>5,5555 $</p>
        </StyledSection>
    )
}

const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
border: solid black;
width: 50%;
margin: 0 auto;
`;
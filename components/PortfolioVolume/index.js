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
border-radius: 15px;
width: 50%;
margin: 0 auto;
background-color: #fff9c4; /* Hellgelbe Hintergrundfarbe */
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5) 10px,
    transparent 10px,
    transparent 20px);
`;
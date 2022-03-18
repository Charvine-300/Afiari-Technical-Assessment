import styled from 'styled-components'

interface FlexboxProps {
    justify: string,
    align: string,
    direction: string,
    Landdirect: string
}

const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};

  @media only screen and (orientation: landscape) {
    flex-direction: ${props => props.Landdirect};
  }
`;
  
  /*@media only screen and (min-width: 768px) {
    flex-direction: ${props => props.Bigdirection};
    justify-content: ${props => props.Bigjustify};
  }*/
  

export default Flexbox;
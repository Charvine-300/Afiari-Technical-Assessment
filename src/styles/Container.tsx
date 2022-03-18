import styled from 'styled-components'

interface ContainerProps {
    margin: string,
    width: string,
    padding: string,
    Landwidth: string,
    Bigwidth: string,
    Bigmargin: string,
}

const Container = styled.div<ContainerProps>`
  height: fit-content;
  border-radius: 10px;
  background-color: #FFFFFF;  
  margin: ${props => props.margin};
  width: ${props => props.width};
  padding: ${props => props.padding};

  @media only screen and (orientation: landscape) {
    width: ${props => props.Landwidth};
  }

  @media only screen and (min-width: 1024px) {
    width: ${props => props.Bigwidth};
    margin: ${props => props.Bigmargin};

  }
`;
  
export default Container;
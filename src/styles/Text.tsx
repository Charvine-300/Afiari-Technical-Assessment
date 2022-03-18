import styled from 'styled-components'

interface TextProps {
    size: string,
    align: string,
    weight: string,
    theme: boolean,
    Bigsize: string,
}

const Text = styled.p<TextProps>`
  margin: 10px 0px;
  font-size: ${props => props.size};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.theme === true ? '#1C1F1E' : '#5B605E'};

  @media only screen and (min-width: 1024px) {
    font-size: ${props => props.Bigsize};
  }
`;
  
export default Text;
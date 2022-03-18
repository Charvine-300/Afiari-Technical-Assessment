import styled from 'styled-components'

interface ButtonProp {
  width: string,
  height: string
}


const Button = styled.button<ButtonProp>`
  color: #FFFFFF;
  display: block;
  margin: 20px auto;
  padding: 10px 0px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  background-color: #0A503D;
  width: ${props => props.width};
  height: ${props => props.height};
`;
  
  

export default Button;
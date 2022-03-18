import styled from 'styled-components'


const Dropdown = styled.div`
  width: 120px;
  height: 100px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px 0px 20px 20px;
  border-radius: 5px;
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  box-shadow: 0px 8px 16px 0px #5B605E;
  background-color: #FFFFFF;

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {   
    background: #d1d1d1;
      border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {    
    background: #888;
  }
`;
 
  

export default Dropdown;
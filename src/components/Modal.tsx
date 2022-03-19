import React from 'react';
import 'animate.css';
import styled from 'styled-components';
import Text from '../styles/Text';
import Flexbox from '../styles/Flexbox';
import Button from '../styles/Button';
import Container from '../styles/Container';

interface ModalProps {
  alertItem: string,
  setModal: any,
}

const AlertBox = styled(Flexbox)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
`;

const AlertColor = {
  color: '#D41212',
}


function Modal({ alertItem, setModal }: ModalProps) {
  function removeModal() {
    setModal(false);
  }

  return (
    <AlertBox justify='center' align='center' direction='row' Landdirect='row' className='animate__animated animate__zoomIn'>
      <Container margin='0' Bigmargin='0%' width='200px' padding='20px' Landwidth='300px' Bigwidth='400px'>
        <Text as='h1' size='20px' align='center' weight='bolder' theme={true} Bigsize='20px'>
          Alert!
        </Text>
        <Text style={AlertColor} size='13px' align='center' weight='400' theme={false} Bigsize='20px'>
          {alertItem}
        </Text>
        <Button width='70px' height='30px' onClick={removeModal}> OK </Button>
      </Container>
    </AlertBox>
  )
}

export default Modal
import axios from 'axios';
import React, { CSSProperties, useState, useEffect } from 'react';
import Output from './components/Output';
import Input from './components/Input';
import Modal from './components/Modal';
import styled from 'styled-components';
import Flexbox from './styles/Flexbox';
import Decor from './decor.png';

const BackImage = styled(Flexbox)`
  width: 100vw;
  height: 100%;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
  
  @media screen and (min-width: 1024px) {
    width: 90%;
    height: 100vh;
    margin: 0 auto;
  }
`;
  
  const Wrapper: CSSProperties  = {
  height: '100%',
  position: 'relative',
  backgroundImage: `url(${Decor})`,
  backgroundSize: 'cover',
}

function App() {
  const [modal, setModal] = useState(false);
  const [stateVal, setStateVal]: any = useState();
  const [cityVal, setCityVal]: any = useState();
  const [alertItem, setAlertItem] = useState('');
  const [countryVal, setCountryVal] = useState([]);
  

  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(response => {
      console.log(response.data.data);
      setCountryVal(response.data.data);
    })
    
    /*axios.get(' https://countriesnow.space/api/v0.1/countries/state/cities')
    .then(response => {
      console.log(response.data.data);
      setCityVal(response.data.data);
    })*/
  }, []);



  return (
    <div style={Wrapper}>
      {modal && <Modal alertItem={alertItem} setModal={setModal} />}
      <BackImage justify='space-around' align='center' direction='column' Landdirect='column'>
        <
          Input 
          countryVal={countryVal} 
          setModal={setModal} 
          setAlertItem={setAlertItem} 
          setStateVal={setStateVal} 
          stateVal={stateVal} 
          setCityVal={setCityVal}
          cityVal={cityVal}
        />
        <Output />
      </BackImage>
    </div>
  );
}

export default App;

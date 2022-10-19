import axios from 'axios';
import React, { CSSProperties, useState, useEffect } from 'react';
import Output from './components/Output';
import Input from './components/Input';
import Modal from './components/Modal';
import styled from 'styled-components';
import Flexbox from './styles/Flexbox';
import Decor from './decor.png';


const Hide: CSSProperties = {
  display: 'none',
}

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
  const [display, setDisplay] = useState(Hide);
  const [modal, setModal] = useState(false);
  const [stateVal, setStateVal]: any = useState();
  const [alertItem, setAlertItem] = useState('');
  const [countryVal, setCountryVal] = useState([]);
  const [cityVal, setCityVal]: any = useState();
  const [stateName, setStateName] = useState('');
  const [cityName, setCityName] = useState('');
  const [email, setEmail] = useState('');
  const [countryName, setCountryName] = useState('');
  const [flagIcon, setFlagIcon] = useState('');
  const [newEntry, setNewEntry] = useState(0);
  const [ID, setID] = useState(0);
  const [entries, setEntries] = useState<any>([]);
  
  
  useEffect(() => {
    var profileBox: any = localStorage.getItem("allEntries");
    var profileInfo = JSON.parse(profileBox);
    if (profileInfo !== null) {
      setEntries(profileInfo);
    }

    else {
      setEntries([{email: 'example@gmail.com', country: 'Nigeria', state: 'Lagos', city: 'Ikeja', id: 1}]);
    }

    //Fetching list of countries in the world
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(response => {
      setCountryVal(response.data.data);
    })
  }, []);
  
  
  function submitForm() {
    if (cityName === '') {
      //Open Modal for City
      setModal(true);
      setAlertItem('Choose a City to continue');
    }
    else if (cityName !== '') {
      var contactInfo;
      
      // Parse any JSON previously stored in allEntries
      var entryBox: any = localStorage.getItem("allEntries");
      contactInfo = JSON.parse(entryBox);
      if(contactInfo == null) {
        contactInfo = [];
      }

      var contact = {
        email: email,
        country: countryName,
        state: stateName,
        city: cityName,
        id: ID,
      }
      localStorage.setItem("entry", JSON.stringify(contact));

      // Save allEntries back to local storage
      contactInfo.push(contact);
      localStorage.setItem("allEntries", JSON.stringify(contactInfo));
      setNewEntry(newEntry + 1);

      //Cleaning out the form for new entries
      setEmail('');
      setCountryName('');
      setStateName('');
      setCityName('');
      setFlagIcon('');
      setDisplay(Hide);

      //Getting item from localStorage for display
      const profiles: any = localStorage.getItem("allEntries");
      const parsedProfiles = JSON.parse(profiles);
      setEntries(parsedProfiles);
      console.log(entries);
    }
  }



  return (
    <div style={Wrapper}>
      {modal && <Modal alertItem={alertItem} setModal={setModal} />}
      <BackImage wrap="wrap" justify='space-around' align='center' direction='column' Landdirect='column'>
        <
          Input 
          countryVal={countryVal} 
          setModal={setModal} 
          setAlertItem={setAlertItem} 
          setStateVal={setStateVal} 
          stateVal={stateVal} 
          setCityVal={setCityVal}
          cityVal={cityVal}
          email={email}
          setEmail={setEmail}
          countryName={countryName}
          setCountryName={setCountryName}
          stateName={stateName}
          setStateName={setStateName}
          cityName={cityName}
          setCityName={setCityName}
          submitForm={submitForm}
          flagIcon={flagIcon}
          setFlagIcon={setFlagIcon}
          display={display}
          setDisplay={setDisplay}
          ID={ID}
          setID={setID}
        />
        <Output 
          newEntry={newEntry}
          entries={entries}
        />
      </BackImage>
    </div>
  );
}

export default App;

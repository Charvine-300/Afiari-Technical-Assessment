import React, { CSSProperties, useState } from 'react';
import Text from '../styles/Text';
import Container from '../styles/Container';
import Button from '../styles/Button';
import Dropdown from '../styles/Dropdown';
import Arrow from '../img/down-arrow.svg';
import Loading from '../img/loading.svg';

interface CountryProps {
  countryVal: {
    name: string,
    flag: string,
    iso2: string,
    iso3: string,
  }[],
  setModal: any,
  setAlertItem: any,
  setStateVal: any,
  stateVal: {
    name: string,
    iso3: string,
    iso2: string,
    states: {
      name: string,
      state_code: string
    }[]
  },
  setCityVal: any,
  cityVal: string[]
  email: string,
  setEmail: any,
  countryName: string,
  setCountryName: any,
  stateName: string,
  setStateName: any,
  cityName: string,
  setCityName: any,
  submitForm: any,
  flagIcon: string,
  setFlagIcon: any,
  display: any,
  setDisplay: any,
  ID: number,
  setID: any,
}

//Styles for the component
const Titles: CSSProperties = {
  margin: '5px 0px',
};

const Flag: CSSProperties = {
  width: '15px', 
  height: '15px',
  paddingRight: '10px',
  marginBottom: '-3px',
}

const ListItem: CSSProperties = {
  fontSize: '13px',
  margin: '0px',
  fontWeight: 'lighter',
  listStyleType: 'disc',
  textTransform: 'capitalize',
  cursor: 'pointer',
}

const InputForm: CSSProperties = {
  width: '95%',
  height: 'fit-content',
  border: '1px solid #C5C3C3',
  borderRadius: '5px',
  margin: '15px 0px',
  padding: '5px 0px 5px 15px',
  position: 'relative',
};

const ArrowBox: CSSProperties = {
  width: '10px',
  height: '10px',
  position: 'absolute',
  zIndex: '1',
  top: '15px',
  right: '15px',
}

function Input({
  countryVal, 
  setModal, 
  setAlertItem, 
  setStateVal, 
  stateVal, 
  setCityVal, 
  cityVal,
  email,
  setEmail,
  countryName,
  setCountryName,
  stateName,
  setStateName,
  cityName,
  setCityName,
  submitForm,
  flagIcon,
  setFlagIcon,
  display,
  setDisplay,
  ID,
  setID
}: CountryProps) {

 
  const [country, setCountry] = useState(false);
  const [state, setState] = useState(false);
  const [city, setCity] = useState(false);
 
  

  function emailBox() {
    setEmail('example@gmail.com');
  }

  function countryList() {
    if (email === '') {
      setModal(true);
      setAlertItem('Insert Email Address to continue');
    }
    else if (email !== '') {
      setCountry(true);
    }
    if (state === true) {
      setState(false);
    }
    if (city === true) {
      setCity(false);
    }
  }

  function stateList() {
    if (flagIcon === '') {
      setModal(true);
      setAlertItem('Choose a Country to continue');
    }
    else if (flagIcon !== '') {
      setState(true);
    }
    if (country === true) {
      setCountry(false);
    }
    if (city === true) {
      setCity(false);
    }
  }

  function cityList() {
    if (stateName === '') {
      setModal(true);
      setAlertItem('Choose a State to continue');
    }
    else if (stateName !== '') {
      setCity(true);
    }
    if (country === true) {
      setCountry(false);
    }
    if (state === true) {
      setState(false);
    }
  }


  function selectCountry(e: any) {
    setDisplay(Flag);
    setFlagIcon(Loading);
    setCountry(false);
    setCountryName(e.target.textContent);

    fetch('https://countriesnow.space/api/v0.1/countries/states', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({country: `${e.target.textContent}`})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setStateVal(data.data);
      
      return fetch('https://countriesnow.space/api/v0.1/countries/flag/images', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({country: `${e.target.textContent}`})
      })
    })
    .then(res => res.json())
    .then(info => {
      console.log(info)
      setFlagIcon(info.data.flag);
    })
  }

  function selectState(e: any) {
    setStateName("Loading...");
    setState(false);
    fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"country": `${countryName}`, "state": `${e.target.textContent}`})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCityVal(data.data);
      setStateName(e.target.textContent);
    })
  }

  function selectCity(e: any) {
    setCityName(e.target.textContent);
    setID(ID + 1);
    setCity(false);
  }

  return (
    <Container margin='15% 0% 5% 0%' width='70%' padding='5%' Bigwidth='35%' Bigmargin='0%' Landwidth='80%'>
      <Text as='h1' size='20px' align='center' weight='bolder' theme={true} Bigsize='40px'>
        Let's know you more
      </Text>
      <Text size='13px' align='center' weight='400' theme={false} Bigsize='20px'>
        Fill in the appropriate details
      </Text>
      <Container margin='0%' Bigmargin='0%' width='90%' padding='5%' Bigwidth='90%' Landwidth='90%'>
        <div style={InputForm} onClick={emailBox}>
          <Text style={Titles} size='13px' align='left' weight='600' theme={false} Bigsize='13px'>
            Email
          </Text>
          <Text style={Titles} size='13px' align='left' weight='400' theme={true} Bigsize='15px'>
            {email}
          </Text>
        </div>
        <div style={InputForm}>
          {
            country && 
            <Dropdown>
              {countryVal.map(flag => (
                <li style={ListItem} key={flag.iso2} onClick={(e) => {selectCountry(e)}} >
                  {flag.name}
                </li>
              ))}
            </Dropdown>
          }
          <img src={Arrow} alt='Arrow icon' style={ArrowBox} onClick={countryList} />
          <Text style={Titles} size='13px' align='left' weight='600' theme={false} Bigsize='13px'>
            Country
          </Text>
          <img src={flagIcon} style={display} alt={flagIcon} />
        </div>
        <div style={InputForm}>
          {
            state && 
            <Dropdown>
              {
                stateVal.states.map(state => (
                  <li style={ListItem} key={state.state_code} onClick={(e: any) => {selectState(e)}}>
                    {state.name} 
                  </li>
                )
              )}
            </Dropdown>
          }
          <img src={Arrow} alt='Arrow icon' style={ArrowBox} onClick={stateList} />
          <Text style={Titles} size='13px' align='left' weight='600' theme={false} Bigsize='13px'>
            State
          </Text>
          <Text style={Titles} size='13px' align='left' weight='400' theme={true} Bigsize='15px'>
            { stateName }
          </Text>
        </div>
        <div style={InputForm}>
          {
            city && 
            <Dropdown>
              {cityVal.map(city => (
                <li style={ListItem} key={city} onClick={(e) => {selectCity(e)}}>
                  {city} 
                </li>
              ))}
            </Dropdown>
          }
          <img src={Arrow} alt='Arrow icon' style={ArrowBox} onClick={cityList} />
          <Text style={Titles} size='13px' align='left' weight='600' theme={false} Bigsize='13px'>
            City/Town
          </Text>
          <Text style={Titles} size='13px' align='left' weight='400' theme={true} Bigsize='15px'>
            { cityName }
          </Text>
        </div>
      </Container>
      <Button width='200px' height='40px' type='submit' onClick={submitForm}>
        Submit 
      </Button>
    </Container>
  );
}

export default Input
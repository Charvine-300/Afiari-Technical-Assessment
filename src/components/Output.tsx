import React, { CSSProperties, useEffect, useState } from 'react';
import Text from '../styles/Text';
import Container from '../styles/Container';
import Flexbox from '../styles/Flexbox';
import Close from '../img/close.svg';
import Pen from '../img/pen.svg';

interface OutputProps {
  setNewEntry: any,
  newEntry: number,
  open: boolean,
}

const line = {
  height: '1px',
  flexWidth: '100%',
  margin: '15px 0px',
  backgroundColor: '#C5C3C3',
}

const Icons: CSSProperties = {
  width: '10px',
  height: '10px',
  margin:  '0px 10px',
}

const Width: CSSProperties = {
  width: '100%',
  display: 'inline-flex',
  justifyContent: 'space-between',
}

function Output({setNewEntry, newEntry, open}: OutputProps) {

  const Array = [
    {id: 1, title: 'Email'},
    {id: 2, title: 'Country'},
    {id: 3, title: 'State'}, 
    {id: 4, title: "City"}
  ];

  var contacts: any[] = [];

  useEffect(() => {
    var entryBox: any = localStorage.getItem("allEntries");
    contacts = JSON.parse(entryBox);

    if (contacts !== null) {
      console.log(contacts);
    }
  }, [open]);

  return (
    <Container margin='0% 0% 15% 0%' width='70%' padding='5%' Bigwidth='35%' Bigmargin='0%' Landwidth='80%'>
      <Text size='20px' align='center' weight='bolder' theme={true} Bigsize='40px'>  
        Contact List
      </Text>
      <div style={line}></div>
      <Flexbox justify='space-around' align='center' direction='column' Landdirect='column'>
        <Flexbox style={Width} justify='space-between' align='center' direction='row' Landdirect='row'>
          {Array.map(item => (
            <div key={item.id}> 
              <Text size='15px' align='left' weight='400' theme={false} Bigsize='20px'>
                {item.title}
              </Text>
            </div>
          ))}
        </Flexbox>
        <div style={Width}>
          {open && contacts.map(contact => (
            <Flexbox key={contact.id} style={Width} justify='space-between' align='center' direction='row' Landdirect='row'>
              <Text size='13px' align='left' weight='400' theme={true} Bigsize='20px'>
                 {contact.email}
              </Text>
              <Text size='13px' align='left' weight='400' theme={true} Bigsize='20px'>
                {contact.country}
              </Text>
              <Text size='13px' align='left' weight='400' theme={true} Bigsize='20px'>
                {contact.state}
              </Text>
              <Text size='13px' align='left' weight='400' theme={true} Bigsize='20px'>
                {contact.city}
              </Text>
              <div>
                <img src={Pen} alt='Edit icon' style={Icons} />
                <img src={Close} alt='Delete icon' style={Icons} />
              </div>
            </Flexbox>
          ))}
        </div>
        
      </Flexbox>
    </Container>
  );
}

export default Output
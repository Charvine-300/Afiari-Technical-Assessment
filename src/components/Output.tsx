import React, { CSSProperties } from 'react';
import Text from '../styles/Text';
import Container from '../styles/Container';
import Flexbox from '../styles/Flexbox';

interface OutputProps {
  newEntry: number
  entries: any,
}

const line = {
  height: '1px',
  flexWidth: '100%',
  margin: '15px 0px',
  backgroundColor: '#C5C3C3',
}

const Width: CSSProperties = {
  width: '100%',
  height: '100%',
  flexWrap: 'wrap',
  display: 'inline-flex',
  justifyContent: 'space-between',
}

function Output({ newEntry, entries }: OutputProps) {

  const Array = [
    {id: 1, title: 'Email'},
    {id: 2, title: 'Country'},
    {id: 3, title: 'State'}, 
    {id: 4, title: "City"}
  ];


  return (
    <Container margin='0% 0% 15% 0%' width='70%' padding='5%' Bigwidth='35%' Bigmargin='0%' Landwidth='80%'>
      <Text size='20px' align='center' weight='bolder' theme={true} Bigsize='40px'>  
        Contact List
      </Text>
      <div style={line}></div>
      <Flexbox wrap="wrap" justify='space-around' align='center' direction='column' Landdirect='column'>
        <Flexbox style={Width} wrap="wrap" justify='space-between' align='center' direction='row' Landdirect='row'>
          {Array.map(item => (
            <div key={item.id}> 
              <Text size='15px' align='left' weight='400' theme={false} Bigsize='20px'>
                {item.title}
              </Text>
            </div>
          ))}
        </Flexbox>
        <div style={Width}>
          {entries.map((profile: any)  => (
            <Flexbox key={profile.id} style={Width} wrap="wrap" justify='space-around' align='center' direction='row' Landdirect='row'>
              <Text size='5px' align='left' weight='400' theme={true} Bigsize='10px'>
                 {profile.email}
              </Text>
              <Text size='5px' align='left' weight='400' theme={true} Bigsize='10px'>
                {profile.country}
              </Text>
              <Text size='5px' align='left' weight='400' theme={true} Bigsize='10px'>
                {profile.state}
              </Text>
              <Text size='5px' align='left' weight='400' theme={true} Bigsize='10px'>
                {profile.city}
              </Text>
            </Flexbox>
          ))}
        </div>
        
      </Flexbox>
    </Container>
  );
}

export default Output
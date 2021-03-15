import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import { getData } from './api/data';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  margin-top: 60px;
`;

const Header = styled.h2`
  color: #3DADC5;
`;

const SubHeader = styled.h3`
  color: black;
`;

function App() {
  const [updatedAt, setUpdatedAt] = useState('Sample Header');
  const loadData = async () => {
    const data = await getData();
    const replaceT = (data.properties.meta.updated_at).replace('T', ' ');
    const removeZ = replaceT.replace('Z', '')
    setUpdatedAt(removeZ);
  }
  return(
    <Layout>
      <Header> Simple Electron Application </Header>
      <SubHeader>{ updatedAt }</SubHeader>
      <Button label='Click me' onClick={loadData}/>
    </Layout>
  );
}

export default App;
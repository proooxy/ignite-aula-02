import styled from 'styled-components'
import Modal from 'react-modal'
import { Dashboad } from './components/Dashboard';
import { Header } from './components/header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionsModal';

Modal.setAppElement('#root')


export function App() {

  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
    
  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
      
  }

  return (
    <>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboad />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />

    </>

  );
}



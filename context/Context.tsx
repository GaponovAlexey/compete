import { ABI, tokenAddresses } from '@/components/utils/constans';
import React, { ChildContextProvider } from 'react';
import Web3 from 'web3';

const account = 'https://testnet.era.zksync.dev';
const web3 = new Web3(account);

export const TransContext = React.createContext({})

// const { ethereum } = window;

const getEtherContract = () => {
  const provider = new web3.eth.Contract(ABI, tokenAddresses.WETH);
  console.log(provider);
};

export const TransProviderApp = ({ children }: any) => {
  return (
    <TransContext.Provider value={{ values: "55" }}> 
      {children}
    </TransContext.Provider>
  );
};

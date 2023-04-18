import { useEffect, useState } from 'react';
import Web3 from 'web3';

const Main = () => {
  // let w3 = new Web3(window.ethereum)
  // let contractP2PTrade = new w3.eth.Contract(p2pTrade, smartContractAddress);
  const web3 = new Web3('https://testnet.era.zksync.dev');
  console.log("web3", web3)

  
  const erc20Abi : any = ['./ABI/ZkSync.json']; 

  const WETH = new web3.eth.Contract(erc20Abi, '0x20b28B1e4665FFf290650586ad76E977EAb90c5D');
  // const LINK = new web3.eth.Contract(erc20Abi, '0x40609141Db628BeEE3BfAB8034Fc2D8278D0Cc78');
  // const USDC = new web3.eth.Contract(erc20Abi, '0x0faF6df7054946141266420b43783387A78d82A9');
  // const DAI = new web3.eth.Contract(erc20Abi, '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b');
  // const wBTC = new web3.eth.Contract(erc20Abi, '0x0BfcE1D53451B4a8175DD94e6e029F7d8a701e9c');

  useEffect(() => {
    const load = async () => {
      const balance = await WETH.methods.balanceOf('0xYourAddress').call();
      console.log('WETH balance:', balance);
    }
    load()
  },[])


  const [max, setMax] = useState(0);

  return (
    <div className="main_wrapper">
      <div className="main_wrapper_right">
        <div className="main_content_wrapper">aф
          <div className="top_menu">
            <div className="text-[32px] cursor-pointer">Exchange</div>
            <div className="flex">
              <div className="twl_one">
                <div className="twl_one_count cursor-pointer">$2,936,362</div>
              </div>
              <div className="twl_two cursor-pointer">$2,936,362 TVL</div>
            </div>
          </div>
          <div className="main_swap">
            <div className="wrapper_swap">
              <div>Swap</div>
              <div className="swap_menu">
                <div onClick={(e) => setMax(0)} className="swap_update"></div>
                <div className="swap_config"></div>
              </div>
            </div>
            <div className="wrapper_input_crypto ">
              <div className="input_one">
                <div className="flex">
                  <div className="swap_logo_crypto_one"></div>
                  <div className="mx-2">
                    <div className="text-[10px] text-[#A4A4A9]">from</div>
                    <div className="change_crypto">ETH</div>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="0"
                  value={max}
                  onChange={(e: any) => setMax(e.target.value)}
                  className="crypto_input_one"
                />
                <div className="flex justify-between relative ">
                  <button
                    onClick={(e) => setMax(12)}
                    className="absolute -left-16 bottom-2"
                  >
                    {' '}
                    | Max
                  </button>
                </div>
              </div>
              <div className="flex justify-end text-[#A4A4A9] pr-6 text-[12px]">
                Balance: 12ETH
              </div>
              <div className="change"></div>
              <div className="input_one">
                <div className="flex">
                  <div className="swap_logo_crypto_two"></div>
                  <div className="mx-2">
                    <div className="text-[10px] text-[#A4A4A9]">to</div>
                    <div className="change_crypto">ETH</div>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="0"
                  className="crypto_input_two"
                />
              </div>
              <div className="flex justify-end text-[#A4A4A9] pr-6 text-[12px]">
                Balance: 2334 USDT
              </div>
            </div>
            <button className="btn_connected">Connected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

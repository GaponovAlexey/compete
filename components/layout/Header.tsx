import { ethers } from 'ethers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const [account, setAccount] = useState<string | null>(null);
  const { asPath } = useRouter();

  const handleConnect = async () => {
    try {
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error('not connect...');
      }

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const provider = new ethers.JsonRpcProvider(asPath);
      console.log('web3Provider', provider);
      console.log('balanse', await provider.getBalance(accounts[0]));

      setAccount(accounts[0]);
      console.log('account', accounts);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="header_wrap">
      <div className="header_main">
        <div className="header_menu_one cursor-pointer">
          <Image
            src="/svg/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
          <ul className="header_menu_one_toggle">
            <li className="header_menu_one_toggle_el">Trade</li>
            <li className="header_menu_one_toggle_el">Earn</li>
            <li className="header_menu_one_toggle_el">xVictory</li>
            <li className="header_menu_one_toggle_el">Launchpad</li>
            <li className="header_menu_one_toggle_el">More</li>
          </ul>
        </div>
        <div className="header_menu_two">
          <div className="menu_two_dot">...</div>
          <div className="menu_two_sync">
            <div className="zkSync_one">zkSync</div>
          </div>
          <div onClick={handleConnect} className="menu_two_connect">
            {account ? account : 'Connect'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

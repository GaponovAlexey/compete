import Image from 'next/image';
const Header = () => {
  const handleConnect = async () => {
    if (!window.ethereum as any) {
      console.log('da');
    } 
    console.log("window.ethereum",window.ethereum )
    
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
            Connect
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

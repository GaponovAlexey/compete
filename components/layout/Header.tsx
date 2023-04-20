import { TransContext } from "@/context"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext } from "react"

const Header = () => {
  const { connectWallet, currentAccount } = useContext(TransContext) as any
  const { asPath } = useRouter()

  console.log("currentAccount", currentAccount)

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
          <div onClick={connectWallet} className="menu_two_connect">
            {currentAccount ? currentAccount : "Connect"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

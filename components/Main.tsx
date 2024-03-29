import { TransContext } from "@/context"
import { useContext, useState } from "react"

const Main = () => {
  const { connectWallet, currentAccount, formData, setFormData, handleChange } =
    useContext(TransContext) as any

  const [max, setMax] = useState(0)

  return (
    <div className="main_wrapper">
      <div className="main_wrapper_right">
        <div className="main_content_wrapper">
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
                    {" "}
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
  )
}

export default Main

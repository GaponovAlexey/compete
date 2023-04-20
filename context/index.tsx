import { ABI, tokenAddresses } from "@/components/utils/constans"
import { BaseContract } from "ethers"
import React, { useEffect, useState } from "react"
import Web3 from "web3"

const account = "https://testnet.era.zksync.dev"
const web3 = new Web3(account)
let ethereum = null
if (typeof window !== "undefined") {
  ethereum = window.ethereum
}

export const TransContext = React.createContext({})

const getEtherContract = () => {
  const pr = new BaseContract(ABI, tokenAddresses.WETH)
  console.log("pr", pr)

  const provider = new web3.eth.Contract(ABI, tokenAddresses.WETH)
  console.log(provider)
}

export const TransProviderApp = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [formData, setFormData] = useState({
    addressTo: "1",
    amount: "2",
    keyword: "3",
    message: "4",
  })

  const handleChange = (e, name) => {
    setFormData((el) => ({ ...el, [name]: e }))
  }

  console.log("formData", formData)

  const checkConnect = async () => {
    if (!ethereum) return alert("Please install Metamask")

    const account = await ethereum.request({ method: "eth_accounts" })
    console.log("ac", account)
  }

  // connect
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask")

      const account = await ethereum.request({ method: "eth_requestAccounts" })
      if (account) {
        setCurrentAccount(account[0])
      }
    } catch (e) {
      console.log("error in ConnectWallet", e)
      throw new Error("No Eth ")
    }
  }

  // Transaction
  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask")
    } catch (e) {
      console.log("sendTransaction", e)

      throw new Error("No Eth Trans")
    }
  }

  useEffect(() => {
    checkConnect()
  }, [])

  return (
    <TransContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
      }}
    >
      {children}
    </TransContext.Provider>
  )
}

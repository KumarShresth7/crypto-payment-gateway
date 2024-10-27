"use client"
import { useState } from "react";
import QRCode from 'qrcode'

export default function Page() {
    const [amount, setAmount] = useState('')
    const paymentAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-semibold">Send Payment</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in ETH"
        className="mt-4 p-2 border rounded"
      />
      {/* <div className="mt-6">
        <QRCode value={`${paymentAddress}?amount=${amount}`} />
      </div> */}
      <p className="mt-2">Send {amount || 0} ETH to {paymentAddress}</p>
    </div>
    );
}
'use client';

import Head from 'next/head'
import { useState, useEffect } from 'react'
import DesktopIcon from '../../components/DesktopIcon'
import Window from '../../components/Window'
import StockContent from '../../components/StockContent'
import NewsContent from '../../components/NewsContent'

export default function Home() {
  const [activeWindow, setActiveWindow] = useState(null)
  const [currentTime, setCurrentTime] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [showInstallWindow, setShowInstallWindow] = useState(false)
  
  useEffect(() => {
    setShowPopup(true)

    const timer = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit'
      });
      const date = now.toLocaleDateString('en-US', {
        timeZone: 'America/New_York',
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
      });
      setCurrentTime(`${date} ${time}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stockTickers = [
    { symbol: 'OSD', price: '173.50', change: '+69%' },
    { symbol: 'GFH', price: '402.75', change: '-69%' },
    { symbol: 'CDS', price: '142.25', change: '+420%' },
    { symbol: 'SDH', price: '178.90', change: '+96%' },
    { symbol: 'YUI', price: '185.30', change: '-420%' },
    { symbol: 'GJG', price: '142.25', change: '+690%' },
    { symbol: 'YTRE', price: '178.90', change: '+96%' },
    { symbol: 'UIY', price: '185.30', change: '-420%' },
  ]

  const handleInstallClick = () => {
    setShowPopup(false);
    setShowInstallWindow(true);
  };

  const handleComputerClick = () => {
    setShowInstallWindow(true);
    setActiveWindow(null);
  };

  const handleNewsClick = () => {
    window.open('https://x.com/MCAIFEESOL/status/1857920456210129373', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#008080] flex flex-col">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex-1 relative" style={{ height: 'calc(100vh - 48px)' }}>
        <div className="absolute left-0 top-0 w-[140px] p-2">
          <div className="grid grid-cols-1 gap-4">
            <DesktopIcon 
              icon="/icons/my-computer.ico"
              label="My Computer"
              onClick={handleComputerClick}
              isActive={activeWindow === 'computer'}
            />
            <DesktopIcon 
              icon="/icons/x.ico"
              label="News"
              onClick={handleNewsClick}
              isActive={activeWindow === 'news'}
            />
          </div>
        </div>
        {showPopup && (
          <Window
            title="Warning.exe"
            onClose={() => setShowPopup(false)}
            onMinimize={() => setShowPopup(false)}
            className="w-[400px] h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="p-4 font-['MS_Sans_Serif'] ">
              <p className="text-sm mb-4">WARNING: Clicking random memes may lead to instant regret. Get McAifee before getting Whackd!</p>
              <button 
                className="win95-button px-4 py-1 flex items-center justify-center w-full"
                onClick={handleInstallClick}
              >
                $WHACKD
              </button>
            </div>
          </Window>
        )}

        {showInstallWindow && (
          <Window
            title="McAifee Installation"
            onClose={() => setShowInstallWindow(false)}
            onMinimize={() => setShowInstallWindow(false)}
            className="w-[500px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="p-4 font-['MS_Sans_Serif']">
              <div className="mb-4 flex flex-col ">
                <p className="text-sm mb-2">Rumors says he is back…</p>
                <div className="w-full h-5 border border-[#808080] border-r-[#FFFFFF] border-b-[#FFFFFF] bg-[#C0C0C0] p-[2px] mt-2">
                  <div className="h-full bg-[#000080]" style={{width: '45%'}}></div>
                </div>
                <p className="text-sm text-gray-600 py-2">CA: GSjgSTYChZr6JvKKKQEMhZHZBfe1iMfuEyh4Xk2Fpump</p>
              <a href="https://x.com/MCAIFEESOL/status/1857920456210129373" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                X/Twitter
              </a>
              <a href="https://t.me/JohnMcAifee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Telegram
              </a>
              <a href="https://dexscreener.com/solana/Gir3ea5cyVrCsmS1aBY51rhA1QKRh7ZN4DhgmJ4di76g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Dexscreener
              </a>
              </div>
              <p className="text-sm text-gray-600">Please wait while the installation completes...</p>
            </div>
            
          </Window>
          
        )}
      </div>
      <div className="">
        <div className="fixed bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf] flex items-center px-2">
          <button className="win95-button px-4 py-1 mr-2">
            Start
          </button>
          <div className="win95-taskbar-divider mx-2" />
    
          <div className="flex-1 flex items-center space-x-4 overflow-x-auto px-2 font-['VT323']">
            {stockTickers.map((stock, index) => (
              <div key={stock.symbol} className="flex items-center space-x-1 min-w-fit">
                <span className="font-bold">{stock.symbol}</span>
                <span>${stock.price}</span>
                <span className={stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stock.change}
                </span>
                {index < stockTickers.length - 1 && <div className="win95-taskbar-divider mx-2" />}
              </div>
            ))}
          </div>
          <div className="win95-button px-3 py-1 min-w-[100px] text-center font-['VT323']">
            {currentTime}
          </div>
        </div>
      </div>
    </div>
  )
} 
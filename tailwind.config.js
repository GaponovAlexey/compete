/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arrow-d': "url('/svg/arrowDown.svg')",
        'zk': "url('/svg/headerZk.svg')",
        'tw': "url('/svg/twitter.svg')",
        'tg': "url('/svg/telegram.svg')",
        'dis': "url('/svg/discord.svg')",
        'ml': "url('/png/ml.png')",
        'mr': "url('/png/mr.png')",
        'swapUp': "url('/svg/reload.svg')",
        'swapConf': "url('/svg/set.svg')",
        'eth': "url('/svg/eth.svg')",
        'usdt': "url('/svg/usdt.svg')",
        'change': "url('/svg/change.svg')",
      },
    },
  },
  plugins: [],
}

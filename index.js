const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({checkUpdate: false});
const axios = require('axios');
const config = require('./config.json');
const ownerId = config.userid;
const prefix = config.prefix;

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'send' && args.length === 2 && message.author.id === ownerId) {
    const ltcAddress = args[0];
    const amountInput = args[1];
    const ltcAmount = parseFloat(amountInput);
    message.delete();

    if (isNaN(ltcAmount)) {
      return message.channel.send('Invalid amount. Please provide a valid number.');
    }

    try {
      const coingeckoResp = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd'
      );
      const ltcToUsdRate = coingeckoResp.data.litecoin.usd;
      const convertedLtcAmount = parseFloat((ltcAmount / ltcToUsdRate).toFixed(8));

      const txId = await sendLTC(ltcAddress, convertedLtcAmount);
      message.channel.send(`✅ | Successfully Sent \`${amountInput}$\` To \`${ltcAddress}\`!\n🔗 | https://live.blockcypher.com/ltc/tx/${txId}/`);
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while processing the transaction.');
    }
  }

  if (command === 'receive') {
    message.delete();
    try {
      message.channel.send(`🔗 | Address : \`${config.ltc_address}\`\n📌 | Note : Please Make Sure To Send ScreenShot Or Blockchain After Payment.`);
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while fetching the balance.');
    }
  }

  if (command === 'balance') {
    message.delete();
    try {
      const balanceResp = await axios.get(
        `https://api.blockcypher.com/v1/ltc/main/addrs/${config.ltc_address}`
      );
      
      const balanceLitoshi = balanceResp.data.balance;
      const balanceLTC = balanceLitoshi / 100000000;
      
      const coingeckoResp = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd'
      );
      const ltcToUsdRate = coingeckoResp.data.litecoin.usd;
      const balanceUSD = balanceLTC * ltcToUsdRate;
      
      message.channel.send(`💸 | Balance : \`${balanceUSD.toFixed(2)}$\`\n🔗 | Address : \`${config.ltc_address}\``);
    } catch (error) {
      console.error(error);
      message.channel.send('An error occurred while fetching the balance.');
    }
  }
   
});

async function sendLTC(address, amount) {
  const resp = await axios.post(
    'https://api.tatum.io/v3/litecoin/transaction',
    {
      fromAddress: [
        {
          address: config.ltc_address,
          privateKey: config.ltckey,
        }
      ],
      to: [
        {
          address: address,
          value: amount
        }
      ],
      fee: '0.00005', 
      changeAddress: config.ltc_address
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': config.apikey
      }
    }
  );

  
  return resp.data.txId;
}

client.once('ready', () => {
  console.clear()
  console.log(`[+] Successfully Connected To : @${client.user.username}`)
});

client.login(config.token)
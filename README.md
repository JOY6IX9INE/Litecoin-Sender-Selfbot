# Litecoin Sender Selfbot

This Discord selfbot allows you to send Litecoin via discord. It integrates with the Litecoin blockchain and utilizes the Tatum API for transaction processing.

## Features

- **Send LTC** : Send Litecoin to any LTC address directly from Discord.
- **Check Balance** : View the current balance of your Litecoin address.
- **Receive Address** : Get your Litecoin address for receiving payments.

## Setup

1. Clone or download the repository.
2. Install dependencies: `npm install `
3. Setup `config.json` with your token, user id, ltc address, ltc private key, and Tatum api key.
4. Run the selfbot : `node index.js`
Refer https://docs.tatum.io/ for api keys and stuff.

## Usage

- To send LTC : `.send <address> <amount>`
- To check balance : `.balance`
- To get receive address : `.receive`

**Note :** Make sure to keep your Discord token and API keys secure. Do not share them publicly.

# Disclaimer
This tool is created for educational purposes and ethical use only. Any misuse of this tool for malicious purposes is not condoned. The developers of this tool are not responsible for any illegal or unethical activities carried out using this tool.

[![Star History Chart](https://api.star-history.com/svg?repos=JOY6IX9INE/Litecoin-Sender-Selfbot&type=Date)](https://star-history.t9t.io/#JOY6IX9INE/Litecoin-Sender-Selfbot&Date)

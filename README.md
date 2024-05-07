# Litecoin Sender Selfbot

This Discord selfbot allows you to send Litecoin via discord. It integrates with the Litecoin blockchain and utilizes the Tatum API for transaction processing.

## Features

- **Send LTC**: Send Litecoin to any LTC address directly from Discord.
- **Check Balance**: View the current balance of your Litecoin address.
- **Receive Address**: Get your Litecoin address for receiving payments.

## Commands

- **send <address> <amount>**: Send a specified amount of Litecoin to the provided address.
- **balance**: Check the current balance of your Litecoin address.
- **receive**: Get your Litecoin address for receiving payments.

## Setup

1. Clone the repository: `git clone https://github.com/yourusername/litecoin-sender-selfbot.git`
2. Install dependencies: `npm install `
3. Create a `config.json` file with your Discord token, user ID, Litecoin address, Litecoin private key, and Tatum API key.
4. Run the selfbot: `node index.js`

## Usage

- To send LTC: `.send <address> <amount>`
- To check balance: `.balance`
- To get receive address: `.receive`

**Note:** Make sure to keep your Discord token and API keys secure. Do not share them publicly.

## Disclaimer

This selfbot is for educational purposes only. Use it responsibly and at your own risk.

## License

[MIT License](LICENSE)

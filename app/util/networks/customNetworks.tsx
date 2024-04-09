import { toHex } from '@metamask/controller-utils';

/* eslint-disable @typescript-eslint/no-require-imports, import/no-commonjs */
const InfuraKey = process.env.MM_INFURA_PROJECT_ID;
const infuraProjectId = InfuraKey === 'null' ? '' : InfuraKey;

const PopularList = [
  {
    chainId: toHex('56'),
    nickname: 'BNB Smart Chain',
    rpcUrl: 'https://bsc-dataseed1.binance.org',
    ticker: 'BNB',
    warning: false,
    rpcPrefs: {
      blockExplorerUrl: 'https://bscscan.com',
      imageUrl: 'BNB',
      imageSource: require('../../images/binance.png'),
    },
  },
  {
    chainId: toHex('145'),
    nickname: 'Sora Network',
    rpcUrl: 'https://rpc-testnet.soraai.bot',
    ticker: 'SETH',
    warning: false,
    rpcPrefs: {
      blockExplorerUrl: 'https://explorer.soraai.bot',
      imageUrl: 'SORA',
      imageSource: require('../../images/sora-head-logos.png'),
    },
  },
];

export default PopularList;

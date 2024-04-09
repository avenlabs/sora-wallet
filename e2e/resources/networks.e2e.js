import { toHex } from '@metamask/controller-utils';

/* eslint-disable @typescript-eslint/no-require-imports, import/no-commonjs */
const InfuraKey = process.env.MM_INFURA_PROJECT_ID;
const infuraProjectId = InfuraKey === 'null' ? '' : InfuraKey;
const TENDERLY_KEY = process.env.TENDERLY_NETWORK_ID;

const PopularNetworksList = {
  BNB: {
    providerConfig: {
      type: 'rpc',
      chainId: toHex('56'),
      rpcUrl: 'https://bsc-dataseed.binance.org/',
      nickname: 'BNB Smart Chain',
      ticker: 'BNB',
    },
  },
};

const CustomNetworks = {
  EthereumMainCustom: {
    providerConfig: {
      type: 'rpc',
      chainId: '0x1',
      rpcUrl: 'https://eth.llamarpc.com',
      nickname: 'Ethereum Main Custom',
      ticker: 'ETH',
    },
  },
  Sepolia: {
    providerConfig: {
      type: 'mainnet',
      chainId: '11155111',
      rpcTarget: 'https://sepolia.infura.io/v3/',
      nickname: 'Sepolia Test Network',
      ticker: 'SepoliaETH',
    },
  },

  Tenderly: {
    isCustomNetwork: true,
    providerConfig: {
      type: 'rpc',
      chainId: '0x1',
      rpcUrl: `https://rpc.tenderly.co/fork/${TENDERLY_KEY}`,
      nickname: 'Tenderly',
      ticker: 'ETH',
    },
  },
  Gnosis: {
    providerConfig: {
      type: 'rpc',
      chainId: '100',
      rpcUrl: 'https://rpc.gnosischain.com',
      nickname: 'Gnosis',
      ticker: 'xDAI',
    },
  },
};
export { CustomNetworks, PopularNetworksList };

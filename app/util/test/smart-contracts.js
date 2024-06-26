import {
  hstBytecode,
  hstAbi,
  piggybankBytecode,
  piggybankAbi,
  nftsAbi,
  nftsBytecode,
  erc1155Abi,
  erc1155Bytecode,
  failingContractAbi,
  failingContractBytecode,
  multisigAbi,
  multisigBytecode,
} from '@metamask/test-dapp/dist/constants.json';

const hstFactory = {
  initialAmount: 100,
  tokenName: 'TST',
  decimalUnits: 4,
  tokenSymbol: 'TST',
  bytecode: hstBytecode,
  abi: hstAbi,
};

const nftsFactory = {
  bytecode: nftsBytecode,
  abi: nftsAbi,
};

const erc1155Factory = {
  bytecode: erc1155Bytecode,
  abi: erc1155Abi,
};

const piggybankFactory = {
  bytecode: piggybankBytecode,
  abi: piggybankAbi,
};

const failingContract = {
  bytecode: failingContractBytecode,
  abi: failingContractAbi,
};

const multisigFactory = {
  bytecode: multisigBytecode,
  abi: multisigAbi,
};

const SMART_CONTRACTS = {
  HST: 'hst',
  NFTS: 'nfts',
  ERC1155: 'erc1155',
  PIGGYBANK: 'piggybank',
  FAILING: 'failing',
  MULTISIG: 'multisig',
};

const contractConfiguration = {
  [SMART_CONTRACTS.HST]: hstFactory,
  [SMART_CONTRACTS.NFTS]: nftsFactory,
  [SMART_CONTRACTS.ERC1155]: erc1155Factory,
  [SMART_CONTRACTS.PIGGYBANK]: piggybankFactory,
  [SMART_CONTRACTS.FAILING]: failingContract,
  [SMART_CONTRACTS.MULTISIG]: multisigFactory,
};

export { SMART_CONTRACTS, contractConfiguration };

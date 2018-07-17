var common = {
  name: 'Dongri',
  unit: 'DNGR'
}

var main = Object.assign({}, {
  hashGenesisBlock: '039bcb0e9c9540be6dc0e62b9eb6dfa838293a78d16f097b86415e4a932e90ec',
  port: 9533,
  portRpc: 9532,
  protocol: {
    magic: 0x18074f13
  },
  seedsDns: [
    'dnsseed.dongriproject.com'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
//  bip44: 22,
    private: 0xb0,
    private2: 0xb2, // old wif
    public: 0x1f,
    scripthash: 0x5a,
    scripthash2: 0x05 // old '3' prefix. available for backward compatibility.
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '4266cec485430edefb5260465358b44b023fdf5717a523ba07615e4da9f1d80b',
  port: 19533,
  portRpc: 19532,
  protocol: {
    magic: 0x18074f13
  },
  seedsDns: [
    'testnet-dnsseed.dongriproject.com'
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
//  bip44: 22,
    private: 0xef,
    public: 0x6f,
    scripthash: 0x75,
    scripthash2: 0xc4
  }
}, common)

var regtest = Object.assign({}, {
  hashGenesisBlock: '4266cec485430edefb5260465358b44b023fdf5717a523ba07615e4da9f1d80b',
  port: 20544,
  portRpc: 20643,
  protocol: {
    magic: 0xdab5bffa
  },
  seedsDns: [],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
//  bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4
  }
}, common)

module.exports = {
  main: main,
  test: test,
  regtest: regtest
}

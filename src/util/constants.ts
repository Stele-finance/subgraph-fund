import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const ZERO_BI = BigInt.fromI32(0)
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BD = BigDecimal.fromString('0')
export const ONE_BD = BigDecimal.fromString('1')

// Mainnet addresses
export const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
export const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
export const UNISWAP_V3_FACTORY = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

// Stele Fund Addresses
export const STELE_FUND_SETTING_ADDRESS = '0x650C304b66d8e4eB76d54AeD35A655c7d2Dd7BE6'
export const STELE_FUND_INFO_ADDRESS = '0x8fef1Adf80AeFC547478A4deCD5079EE2F925881'

// Cache durations (in seconds)
export const PRICE_CACHE_DURATION = 900 // 15 minutes
export const POOL_INFO_CACHE_DURATION = 604800 // 1 week
export const POOL_LIQUIDITY_CACHE_DURATION = 21600 // 6 hours
export const POOL_SLOT0_CACHE_DURATION = 900 // 15 minutes
export const TOKEN_INFO_CACHE_DURATION = 604800 // 1 week

export const UNKNOWN = 'Unknown'
export const DECIMAL_18 = '1000000000000000000'
export const DECIMAL_6 = '1000000'
export const USDC_DECIMALS = BigDecimal.fromString(DECIMAL_6) // 10^6 for USDC decimals

// Transaction types
export const TYPE_DEPOSIT = 'DEPOSIT'
export const TYPE_WITHDRAW = 'WITHDRAW'
export const TYPE_NORMAL = 'NORMAL'
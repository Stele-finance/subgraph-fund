import {
  Deposit as DepositEvent,
  ManagerNFTContractSet as ManagerNFTContractSetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Swap as SwapEvent,
  Withdraw as WithdrawEvent,
  WithdrawFee as WithdrawFeeEvent
} from "../generated/SteleFund/SteleFund"
import {
  Deposit,
  ManagerNFTContractSet,
  OwnershipTransferred,
  Swap,
  Withdraw,
  WithdrawFee
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.investor = event.params.investor
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.investorShare = event.params.investorShare
  entity.fundShare = event.params.fundShare
  entity.fundAmount = event.params.fundAmount
  entity.feeAmount = event.params.feeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerNFTContractSet(
  event: ManagerNFTContractSetEvent
): void {
  let entity = new ManagerNFTContractSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.managerNFTContract = event.params.managerNFTContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.investor = event.params.investor
  entity.percentage = event.params.percentage
  entity.investorShare = event.params.investorShare
  entity.fundShare = event.params.fundShare

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawFee(event: WithdrawFeeEvent): void {
  let entity = new WithdrawFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fundId = event.params.fundId
  entity.manager = event.params.manager
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

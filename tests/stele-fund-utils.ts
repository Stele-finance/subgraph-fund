import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Deposit,
  ManagerNFTContractSet,
  OwnershipTransferred,
  Swap,
  Withdraw,
  WithdrawFee
} from "../generated/SteleFund/SteleFund"

export function createDepositEvent(
  fundId: BigInt,
  investor: Address,
  token: Address,
  amount: BigInt,
  investorShare: BigInt,
  fundShare: BigInt,
  fundAmount: BigInt,
  feeAmount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("investor", ethereum.Value.fromAddress(investor))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "investorShare",
      ethereum.Value.fromUnsignedBigInt(investorShare)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "fundShare",
      ethereum.Value.fromUnsignedBigInt(fundShare)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "fundAmount",
      ethereum.Value.fromUnsignedBigInt(fundAmount)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )

  return depositEvent
}

export function createManagerNFTContractSetEvent(
  managerNFTContract: Address
): ManagerNFTContractSet {
  let managerNftContractSetEvent =
    changetype<ManagerNFTContractSet>(newMockEvent())

  managerNftContractSetEvent.parameters = new Array()

  managerNftContractSetEvent.parameters.push(
    new ethereum.EventParam(
      "managerNFTContract",
      ethereum.Value.fromAddress(managerNFTContract)
    )
  )

  return managerNftContractSetEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSwapEvent(
  fundId: BigInt,
  tokenIn: Address,
  tokenOut: Address,
  amountIn: BigInt,
  amountOut: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )

  return swapEvent
}

export function createWithdrawEvent(
  fundId: BigInt,
  investor: Address,
  percentage: BigInt,
  investorShare: BigInt,
  fundShare: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("investor", ethereum.Value.fromAddress(investor))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "percentage",
      ethereum.Value.fromUnsignedBigInt(percentage)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "investorShare",
      ethereum.Value.fromUnsignedBigInt(investorShare)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "fundShare",
      ethereum.Value.fromUnsignedBigInt(fundShare)
    )
  )

  return withdrawEvent
}

export function createWithdrawFeeEvent(
  fundId: BigInt,
  manager: Address,
  token: Address,
  amount: BigInt
): WithdrawFee {
  let withdrawFeeEvent = changetype<WithdrawFee>(newMockEvent())

  withdrawFeeEvent.parameters = new Array()

  withdrawFeeEvent.parameters.push(
    new ethereum.EventParam("fundId", ethereum.Value.fromUnsignedBigInt(fundId))
  )
  withdrawFeeEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )
  withdrawFeeEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawFeeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawFeeEvent
}

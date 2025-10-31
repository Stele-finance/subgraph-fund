import {
  ManagerNFTMinted as ManagerNFTMintedEvent,
} from "../generated/SteleFundManagerNFT/SteleFundManagerNFT"
import {
  ManagerNFT
} from "../generated/schema"

export function handleManagerNFTMinted(event: ManagerNFTMintedEvent): void {
  // Create ManagerNFT state entity
  let managerNFT = new ManagerNFT(event.params.tokenId.toString())
  managerNFT.tokenId = event.params.tokenId
  managerNFT.fundId = event.params.fundId
  managerNFT.manager = event.params.manager
  managerNFT.owner = event.params.manager
  managerNFT.investment = event.params.investment
  managerNFT.currentTVL = event.params.currentTVL
  managerNFT.returnRate = event.params.returnRate
  managerNFT.fundCreated = event.params.fundCreated
  managerNFT.mintedAt = event.params.mintedAt
  managerNFT.transactionHash = event.transaction.hash
  managerNFT.save()
}
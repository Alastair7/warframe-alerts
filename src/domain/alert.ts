import type { Mission } from "./mission"
import type { Reward } from "./reward"

export interface Alert {
  id: string
  mission: Mission
  reward: Reward
  activation: Date
  expiry: Date
  tag: string
}

import type { Mission } from "./mission"

export interface Alert {
  id: string
  mission: Mission
  activation: string
  expiry: string
  tag: string
}

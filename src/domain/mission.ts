import type { Reward } from "./reward"

export interface Mission {
  description: string
  reward: Reward
  nodeKey: string
  typeKey: string
  factionKey: string
  minEnemyLevel: number
  maxEnemyLevel: number
  maxWaveNum: number
}

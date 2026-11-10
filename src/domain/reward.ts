export interface Reward {
  countedItems: Item[]
  credits: number
}

export interface Item {
  key: string
  type: string
  count: number
}

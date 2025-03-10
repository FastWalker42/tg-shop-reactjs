export type ItemData = {
  id: number
  title: string
  imgUrl: string
  price: number
  saled_price?: number
  desc: string
  bgColor: string
  info: Array<{
    name: {
      ru: string
    }
    value: string
  }>
  options?: Array<{
    name: {
      ru: string
    }
    value: Record<string, number>
  }>
}

export type CartItem = {
  id: number
  quantity: number
  selectedOption?: string
}

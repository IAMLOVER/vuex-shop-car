const goods = [
  {id:'1',title:'苹果',price:'5.21',inventory:5},
  {id:'2',title:'草莓',price:'10.66',inventory:2},
  {id:'3',title:'榴莲',price:'99',inventory:1},
]

export const getAllGoods = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(goods)
    }, 100)
  })
}

export const buyGoods = (products,cb,errCb) => {
  setTimeout(() => {
    Math.random() > 0.5 ? cb() : errCb()
  }, 100)
}
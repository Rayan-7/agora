import { inject, observer } from 'mobx-react'
import React from 'react'

const Item = inject("market")(observer((props) => {
  let storeList=props.market
  const buyItem=()=>{
    storeList.buyItem(props.item.name)
  }
  const changePrice=()=>{
    let pricePrompt=parseInt(prompt("enter your price?"))
    console.log(pricePrompt)
    if(!pricePrompt){
      alert("please enter a price bigger than 0")
      return
    }
    if(isNaN(pricePrompt)){
      alert("the price should be number")
      return
    }
    if(pricePrompt>100||pricePrompt<1){
      alert("the price should be lower than 100$ and bigger than 1$")
      return
    }
    storeList.changePrice(props.item.name,pricePrompt)
  }
  return (
  <div >
      <li>{props.item.quantity} {props.item.name} available at ${props.item.price} per item</li>
      <button type="button" onClick={buyItem}>buy Item</button>
      <button type="button" onClick={changePrice}>change Price</button>
  </div>
  )
}))

export default Item;
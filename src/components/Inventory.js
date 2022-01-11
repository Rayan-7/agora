import { inject, observer } from 'mobx-react'
import React ,{ useState } from 'react'
import Item from './Item';

const Inventory = inject("market")(observer((props) => {
  let storeItems=props.market.items
  let storeList=props.market

  
  const [itemInput,setInput]=useState("")
  
  const handle=(e)=>{
    let itemInputTmp=itemInput
    itemInputTmp=e.target.value
    setInput(itemInputTmp)
  }
  
  const addItemStateToMbx=()=>{
    storeList.addItem(itemInput)
    setInput("")
  }
  return ( 
   <div>
      <div>
       <input type="text" onChange={handle} value={itemInput} placeholder='enter new Item'></input>
       <button type="button" onClick={addItemStateToMbx}>add Item</button>
      </div>
      {storeItems.map(item=><Item item={item}/>)}
      <li>the count of table is {storeList.numItems}</li>
  </div>
  )
}))


export default Inventory
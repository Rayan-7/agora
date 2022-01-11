import { observable, action, makeObservable, computed } from 'mobx'
import { Item } from './Item'

export class Inventory {

    constructor() {
        this.items = []

        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            changePrice:action,
            numItems:computed
        })
    }
    addItem(name,price,quantity){
       if(name.length<2 || name.length >30){
           alert("name length of item should be bigger than 2 letters and smaller than 30 letters"+
           "and not have a numbers exist")
            return
       }
       let itemFound=this.items.find(item=>item.name==name)
       if(itemFound)
            itemFound.quantity++
       else
          {
            let newItem=new Item(name,price,quantity)
            this.items.push(newItem)
          }
    }
    buyItem(name){
        for(let i=0; i<this.items.length; i++)
        {
            if(this.items[i].name==name)
            {
                if(this.items[i].quantity>0)
                    this.items[i].quantity--
                if(this.items[i].quantity==0){
                    this.items.splice(i,1)
                }
            }
        }
    }
    changePrice(name,price){
        let itemFound=this.items.find(item=>item.name==name)
        if(itemFound){
            itemFound.price=price
        }
    }
    get numItems(){
        return this.items.length
    }

}


export default Inventory; 

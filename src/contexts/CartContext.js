import { createContext ,useContext} from "react";
 
// items :[
//     {
//         id:1,
//         title:"xyz",
//         price:"45",
//         quantity:1,
//     }
// ]

export const CartContext=createContext({
    items:[],
    addItem: (id) => {},
    updateItem: (id,quantity) => {},
    removeItem: (id) => {},
    total: (id,price,quantity) =>{ },
})

export const useCart = () =>{
    return useContext(CartContext)
}

export const Cartprovider=CartContext.Provider
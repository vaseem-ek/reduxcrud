import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../assets/FakeData";

const productslice=createSlice({
    name:"products",
    initialState:{
        users:productData
    },
    reducers:{
        addProduct(state,action){
            state.users.push(action.payload)
        },
        deleteProduct(state,action){
          state.users=  state.users.filter((user)=>user.id !==action.payload.id)
        },
        updateProduct(state,action){
            state.users.map(user=>{
                if(user.id===action.payload.id){
                    user.name=action.payload.name
                    user.produ=action.payload.produ
                    user.price=action.payload.price
                }
            })
        }

    }

})

export default productslice.reducer
export const {addProduct,deleteProduct,updateProduct}=productslice.actions
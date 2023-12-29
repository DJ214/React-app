import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const STATUSES = {
    SUCCESS:"success",
    ERROR:"error",
    LOADING:"loading"
}

const productSlice = createSlice({
    name : "product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    },
    // reducers:{
    //     setProducts(state,action){
    //         state.data = action.payload;
    //     },
    //     setStatus(state,action){
    //         state.status = action.payload;

    //     }

    // }
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status = STATUSES.LOADING
        }).addCase(fetchProducts.fulfilled,(state,actions)=>{
            state.status = STATUSES.SUCCESS;
            state.data = actions.payload
        }).addCase(fetchProducts.rejected,(state)=>{
            state.status = STATUSES.ERROR;
        })
    }

});

export const {setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;


export const fetchProducts = createAsyncThunk("products",async ()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
})


// Creating thunk 
// Thunk --> Thunk is a function that wraps another function or expression to delay computation
// export function fetchProducts(){

//     return async function(dispatch){
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const res = await axios.get("https://fakestoreapi.com/products");
//             dispatch(setProducts(res.data))
//             dispatch(setStatus(STATUSES.SUCCESS));
//         }catch(error){
//             dispatch(setStatus(STATUSES.ERROR));
//         }

//     } 
// }
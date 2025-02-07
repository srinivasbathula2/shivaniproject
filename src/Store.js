import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: "Potato", price: 200,image:"potato.jpeg"},
            { name: "Tomato", price: 300 ,image:"toamato.jpeg"},
            { name: "Raddish", price: 150,image:"radish.jpeg"},
            { name: "Paneer", price: 800,image:"paneer.jpeg"},
            { name: "Eggplant", price: 100,image:"eggplant.jpeg" },
        ],
        nonVeg: [
            { name: "Chicken", price: 200,image:"chicken.jpeg" },
            { name: "Mutton", price: 500,image:"mutton.jpeg" },
            { name: "Prawns", price: 400 ,image:"prawns.jpeg"},
            { name: "Crab", price: 250 ,image:"crab.jpeg"},
            { name: "Squid", price: 350, image:"squid.jpeg"},
        ],
        milk: [
            { name: "Heritage", price: 30 ,image:"heritage.jpeg"},
            { name: "Amul", price: 50,image:"amul.jpeg" },
            { name: "Dodla Dairy", price: 50, image:"dodla.jpeg" },
            { name: "Hatsun", price: 80 ,image:"hatsun.jpeg" },
            { name: "Jersey", price: 45 ,image:"jersey.jpeg" }
        ]
    },
    reducers: {}
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearcart: () => []
    }
});

const authslice =createSlice({
    name:"auth",
    initialState:[],
    reducers:{
        isAuthenticated:localStorage.getItem("username")?
        true:false,
        user:localStorage.getItem("username")||""//get stored username
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username,action.payload");//clear form local storage
        },
        logut:(state)=>{
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username");//clear from local storage
        },
    },

});


const purchasedetailsSlice = createSlice({
    name: 'purchasedetails',
    initialState: [],
    reducers: {
        addpurchasedetails: (state, action) => {
            state.push(action.payload);
        }
    }
});


const store = configureStore({
    reducer:{
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchasedetails: purchasedetailsSlice.reducer,auth:authslice.reducer
        }
});

export default store;
export const { addToCart, increment, decrement, remove, clearcart } = cartSlice.actions;
export const { addpurchasedetails } = purchasedetailsSlice.actions;
export const {login,logout}=authslice.actions;

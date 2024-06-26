import { createSlice, nanoid } from '@reduxjs/toolkit';


const carsSlice = createSlice({
    name:'cars',
    initialState:{
        searchTerm:'',
        data:[]
    },

    reducers:{
        addCar(state,action){
            state.data.push({
                name:action.payload.name,
                cost:action.payload.cost,
                key:nanoid()
            });
        },

        removeCar(state,action){
            const updated = state.data.filter((car)=>car.key!== action.payload);
            state.data = updated;
        },

        changeSearchTerm(state,action){
            state.searchTerm = action.payload;
        }


    }
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from "../../models/IUser"
import { fetchUsers } from './ActionCreators';


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = '';
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.isLoading = false;
                state.error = 'Error to loading'
                });
       
    },
});

export default userSlice.reducer




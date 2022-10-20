import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { fetchNewMail } from '../withGateway'
import { RootState } from './store'

export interface Mail { 
    email: string
    name: string
    message: string
}

export const saveNewMail = createAsyncThunk(
    'Mail/save',
    async(payload: Mail, thunkApi) => {
        await fetchNewMail(payload)
        thunkApi.dispatch(openPopup())
    }
)

interface mailsState {
    isPopupVisible: boolean,
} 

const initialState: mailsState = {
    isPopupVisible: false
}

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        openPopup: (state: mailsState) => {
            state.isPopupVisible = true
        },
        closePopup: (state: mailsState) => {
            state.isPopupVisible = false
        },
    },
})

export const { openPopup, closePopup } = mailSlice.actions

export const selectPopupVisibility = (state: RootState) => state.mail.isPopupVisible

export default mailSlice.reducer
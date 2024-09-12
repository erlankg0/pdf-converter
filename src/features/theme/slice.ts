import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITheme {
    mode: string;
}

const initialState: ITheme = {
    mode: 'light',
}

const themeSlice = createSlice({
    name: '@@theme',
    initialState,
    reducers: {
        toggleTheme: (state, actions: PayloadAction<string>) => {
            state.mode = actions.payload;
        },
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

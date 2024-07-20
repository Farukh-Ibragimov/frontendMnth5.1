import { createSlice } from '@reduxjs/toolkit';


const calculatorSlice = createSlice({
    name: 'calculator',
    initialState:{
        displayValue: '0',
        operator: null,
        previousValue: null,
    },
    reducers: {
        inputNumber: (state, action) => {
            state.displayValue = state.displayValue === '0' ? action.payload : state.displayValue + action.payload;
        },
        inputOperator: (state, action) => {
            state.operator = action.payload;
            state.previousValue = state.displayValue;
            state.displayValue = '0';
        },
        calculate: (state) => {
            const current = parseFloat(state.displayValue);
            const previous = parseFloat(state.previousValue);
            const operations = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '×': (a, b) => a * b,
                '÷': (a, b) => a / b,
            };

            const result = operations[state.operator]?.(previous, current);

            if (result !== undefined) {
                state.displayValue = String(result);
                state.operator = null;
                state.previousValue = null;
            }
        },
        clear: (state,action) => {
            state.displayValue = '0';
            state.operator = null;
            state.previousValue = null;
        },
    },
});

export const { inputNumber, inputOperator, calculate, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;

import {useSelector, useDispatch} from "react-redux";
import style from './counterPage.module.css'

const CounterPage = () => {
    const number = useSelector(state => state.number)
    const dispatch = useDispatch()



    const subtractOne = () => {

        dispatch({
            type: "SUBTRACT_ONE",
            payload: 1
        })
    }
    const subtractTen = () => {

        dispatch({
            type: "SUBTRACT_TEN",
            payload: 10
        })
    }
    const addTen = () => {

        dispatch({
            type: "ADD_TEN",
            payload: 10
        })
    }
    const addOne = () => {

        dispatch({
            type: "ADD_ONE",
            payload: 1
        })
    }


    const reset = () => {
        dispatch({
            type: "RESET"
        })
    }
    return (
        <div>
            <div>
                <button onClick={subtractOne} disabled={number === 0}>-1</button>
                <button onClick={subtractTen} disabled={number === 0}>-10</button>
                <h1 className={style.count}>{number}</h1>
                <button onClick={addTen} >+10</button>
                <button onClick={addOne} >+1</button>
            </div>
            <button className={style.reset} onClick={reset} name="reset">reset</button>
        </div>
    )
}

export default CounterPage
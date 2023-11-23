import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {counterSlice} from "../store/counter-slice";

const Sample = (props) => {
    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h3>Sample Component {counter}</h3>

                <div className='mt-5'>
                    <button className="btn btn-primary btn-sm me-3" onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
                </div>
            </div>
        </>
    );
};

export default Sample;
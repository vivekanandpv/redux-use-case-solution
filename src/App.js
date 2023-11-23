import React from 'react';
import Sample from "./components/Sample";
import Demo from "./components/Demo";
import {useSelector} from "react-redux";
const App = (props) => {
    const counter = useSelector(store => store.counter);

    return (
        <>
            <div className="p-5">
                <h3 className='text-center'>
                    App Component {counter}</h3>
                <hr/>
              <div className="row mt-5">
                <div className="col">
                  <div className="card m-4 p-4">
                    <Sample />
                  </div>
                </div>
                <div className="col">
                  <div className="card m-4 p-4">
                    <Demo />
                  </div>
                </div>
              </div>
            </div>
        </>
    );
};

export default App;
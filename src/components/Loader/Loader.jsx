import React from 'react';
import {Circles} from 'react-loader-spinner';


const SpinnerLoader = () => (
    <Circles
    height="80"
    width="80"
    color='white'
    ariaLabel='circles-loading'
    wrapperStyle={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    visible={true}
  />
)
export default SpinnerLoader;
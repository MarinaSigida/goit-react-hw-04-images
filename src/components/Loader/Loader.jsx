import React from 'react';
import {Circles} from 'react-loader-spinner';


const SpinnerLoader = () => (
    <Circles
    height="80"
    width="80"
    color='black'
    ariaLabel='circles-loading'
    wrapperStyle={{}}
    visible={true}
  />
)
export default SpinnerLoader;
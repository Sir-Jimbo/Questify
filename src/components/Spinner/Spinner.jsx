import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
   <Loader
      type="TailSpin"
      color="blue"
      height={100}
      width={100}
      timeout={300}
   />
);

export default Spinner;
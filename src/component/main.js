/* eslint-disable no-unused-vars */
import React from 'react';
import {Route} from 'react-router-dom';
import Hisrory from './history/history.js';
import Results from './results/results.js';

const Main = props =>{
  return (
    <main>
      <Route exact path='/'>
        {/* <Results /> */}
      </Route>
      <Route exact path= '/history' render={()=><Hisrory/>}></Route>
    </main>
  );
};
export default Main;


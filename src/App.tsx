import React from 'react';
import Cars from "./Components/Cars";




function App() {

    const topCars = [
        {id: 1, manufacturer:'BMW', model:'m5cs'},
        {id: 2, manufacturer:'Mercedes', model:'e63s'},
        {id: 3, manufacturer:'Audi', model:'rs6'}
    ]
  return (
    <>
<Cars topCars={topCars}/>


    </>
  );
}

export default App;

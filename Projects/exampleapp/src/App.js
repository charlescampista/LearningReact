import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
   const [personState, setPeopleState] = useState({
    person: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');
  console.log(personState, otherState);
  

  const swhitchNameHandler = () => {
    setPeopleState({  
      person: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ],
      otherState: personState.otherState
    });
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>THIS IS REALLY WORKING!</p>
      <button onClick={swhitchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name} age={personState.person[0].age}/>
      <Person name={personState.person[1].name} age={personState.person[1].age}/>
      <Person name={personState.person[2].name} age={personState.person[2].age}>Argumento entre tags</Person>
    </div>
  ); 
  
}

export default app;

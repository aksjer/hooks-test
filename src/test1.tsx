import React, { useState, useContext } from 'react';
import './App.css';
import useDocumentTitle from './useDocumentTitle';
import useFormInput from './useFormInput';
import useWindowWidth from './useWindowWitdh';
import { HihiContext } from './App';

function Test1() {
  const [count, setCount] = useState<number>(0);
  // const [gender, setGender] = useState<string>('male');
  // const [gender, setGender] = useFormInput('male');
  const theme = useContext(HihiContext);
  const name = useFormInput('bob');
  const [person, setPerson] = useState({ name: '', age: 0 });
  const width = useWindowWidth();
  useDocumentTitle(`${person.name} : ${person.age}`);

  setTimeout(() => setPerson({ name: 'me', age: 43 }), 2000);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
      {/* <div>my gender : {gender}</div>
      <select onChange={e => setGender(e)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select> */}
      {person.name && person.age && (
        <>
          <div>Person name : {person.name}</div>
          <div>Person age : {person.age}</div>
        </>
      )}

      <div>{width}</div>
      <div>
        <input {...name} />
      </div>
      <div>My name is : {name.value}</div>
      <div>{theme.gender}</div>
    </div>
  );
}

export default Test1;

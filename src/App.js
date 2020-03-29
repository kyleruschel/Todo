import React, { useState, useReducer } from 'react';
import Input from './Components/Input/input';
import List from './Components/List/list';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';

const App = () => {
  const [val, setVal] = useState('');

  const [myArray, dispatch] = useReducer((myArray, { type, value }) => {
    switch (type) {
      case "add":
        return [...myArray, value];
      case "remove":
        return myArray.filter((_, index) => index !== value);
      default:
        return myArray;
    }
  }, []);

  const onChange = e => {
    setVal(e);
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "add", value: val })
    setVal('');
  }

  const remove = i => {
    dispatch({ type: "remove", value: i })
  }

  return (
    <Container fluid className='app'>
      <Row>
        <Col className='headerColumn'>
          <h1>Todo List</h1>
        </Col>
      </Row>
      <Row>
        <Col className='inputColumn'>
          <Input val={val} onChange={onChange} onSubmit={onSubmit} />
        </Col>
      </Row>
      <Row>
        <Col className='listColumn'>
          <List list={myArray} remove={remove} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

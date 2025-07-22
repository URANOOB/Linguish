import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const Display = (props) => {
  return (
    <div>
      {props.counter}
    </div>
  )
}

const Button = (props) => {
  return (
    <StyledWrapper>
      <button className="button-name" role="button" onClick={props.onClick}>
        {props.text}
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .button-name {
    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    box-shadow:
      rgba(45, 35, 66, 0.2) 0 2px 4px,
      rgba(45, 35, 66, 0.15) 0 7px 13px -3px,
      #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition:
      box-shadow 0.15s,
      transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
  }

  .button-name:focus {
    box-shadow:
      #d6d6e7 0 0 0 1.5px inset,
      rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      #d6d6e7 0 -3px 0 inset;
  }

  .button-name:hover {
    box-shadow:
      rgba(45, 35, 66, 0.3) 0 4px 8px,
      rgba(45, 35, 66, 0.2) 0 7px 13px -3px,
      #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  .button-name:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }`;



const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increasedByOne = () => setCounter(counter + 1)
  const decreasedByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increasedByOne} text='plus' />
      <Button onClick={decreasedByOne} text='minus' />
      <Button onClick={setToZero} text='zero' />
    </div>
  )
}


export default App
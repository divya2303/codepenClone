import React from 'react'
import Header from './Header';
import Code from './Code';
import Result from './Result';
export default function Home() {
  return (
    <>
        <Header/>
        <hr style={{border: "0.25px solid grey", margin: 0}}/>
        <Code/>
        <Result/>
    </>
  )
}

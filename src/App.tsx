import React, { useState } from 'react'
import { ThemeProvider } from "styled-components"

import PlayCard from './components/PlayCard'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const theme = {
    bingo: {
      B: "#F8D800",
      I: "#0396FF",
      N: "#EA5455",
      G: "#3CD500",
      O: "#CA26FF"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <PlayCard />
      </div>
    </ThemeProvider>
  )
}

export default App;

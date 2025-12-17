import React from "react";
import Routes from "./Routes";
import { Toaster } from 'react-hot-toast'

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Toaster position="top-right" />
    </>
  )
  
};

export default App;
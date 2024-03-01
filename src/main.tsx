import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Projetos from './Projects.tsx'
import "./styles/_main.scss";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Projetos/>
  </React.StrictMode>,
)

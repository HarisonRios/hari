import './_main.scss';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import App from './App';
import Projects from './components/projects/Projects';
import NotFound from "./NotFound";

const Root = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Projects.tsx" element={<Projects />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);



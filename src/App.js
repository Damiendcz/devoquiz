import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

import Header from "./Layout/Header";
import Home from "./components/Home";
import QuizPage from './pages/QuizPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:label" element={<QuizPage />} />
          <Route path="/quiz/:label/:slug" element={<QuizPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

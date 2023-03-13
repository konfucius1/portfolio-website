import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import SharedLayout from './pages/SharedLayout.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

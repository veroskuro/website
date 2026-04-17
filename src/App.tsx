import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Detective from './pages/Detective';
import Artifacts from './pages/Artifacts';
import Deductions from './pages/Deductions';
import DeductionPost from './pages/DeductionPost';
import Investigation from './pages/Investigation';
import FieldNotes from './pages/FieldNotes';
import Now from './pages/Now';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detective" element={<Detective />} />
          <Route path="artifacts" element={<Artifacts />} />
          <Route path="deductions" element={<Deductions />} />
          <Route path="deductions/:slug" element={<DeductionPost />} />
          <Route path="investigation" element={<Investigation />} />
          <Route path="field-notes" element={<FieldNotes />} />
          <Route path="now" element={<Now />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

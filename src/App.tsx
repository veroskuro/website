import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Dossier from './pages/Dossier';
import Artifacts from './pages/Artifacts';
import Deductions from './pages/Deductions';
import DeductionPost from './pages/DeductionPost';
import Investigation from './pages/Investigation';
import FieldNotes from './pages/FieldNotes';
import Now from './pages/Now';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dossier" element={<Dossier />} />
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

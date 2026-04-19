import { useEffect } from 'react';
import Lenis from 'lenis';
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
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

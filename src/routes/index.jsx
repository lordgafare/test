import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomeViews = lazy(() => import('../views/home/'));
const ContentsViews = lazy(() => import('../views/list/'));
const TableComponent = lazy(() => import('../views/list/table.jsx'));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomeViews />} />
        <Route path="/content" element={<ContentsViews />} />
        <Route path="/table" element={<TableComponent />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
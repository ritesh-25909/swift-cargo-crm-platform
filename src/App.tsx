import { Navigate, Route, Routes } from 'react-router-dom';
import { LegacyWorkspace } from './components/LegacyWorkspace';

export default function App() {
  return <Routes>
    <Route path="/" element={<LegacyWorkspace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}

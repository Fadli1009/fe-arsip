import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import Dashboard from './pages/Dashboard.jsx';
import Document from './pages/Document.jsx';
import Pengguna from './pages/Pengguna.jsx';
import DocumentDetail from './pages/DocumentDetail.jsx';
import ArsipCreate from './pages/ArsipCreate.jsx';
import Login from './pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/document' element={<Document />} />
      <Route path='/document/create' element={<ArsipCreate />} />
      <Route path='/document/:slug' element={<DocumentDetail />} />
      <Route path='/pengguna' element={<Pengguna />} />
    </Routes>
  </BrowserRouter>,
)

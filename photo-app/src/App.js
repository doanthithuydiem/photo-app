import React, { Suspense } from 'react';
import './App.css';
import  Spinner  from './components/spinner';
import NotFound from './components/notFound';
import Header from './components/header';
import AddEditPage from './features/Photo/Pages/addEdit';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';

const Photo = React.lazy (() => import('./features/Photo')); 

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback = {<Spinner />} >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/photos" element={ <Photo />}  />
            <Route path="/photos/add" element={ <AddEditPage/>}  />
            <Route path="/photos/:photosId" element={ <AddEditPage/>}  />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>   
      </Suspense>
    </div>
  );
}

export default App;

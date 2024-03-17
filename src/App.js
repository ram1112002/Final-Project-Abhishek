import React from 'react';
import SideMenu from './components/MenuBar/Menu.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import ContractorPage from './pages/ContractorPage/Contractor.component';
import ArchitecturePage from './pages/ArchitecturePage/Architecture.component';
import DesignerPage from './pages/DesignerPage/Designer.component';
import MaterialsPage from './pages/MaterialsPage/Materials.componet';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: 'flex' }}>
        <SideMenu />
        <main style={{ flex: 1 ,marginLeft: '50px'}}> {/* Main content area */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/contractor' element={<ContractorPage/>} />
            <Route path='/architecture' element={<DesignerPage/>} />
            <Route path='/designer' element={<ArchitecturePage/>} />
            <Route path='/materials' element={<MaterialsPage/>} />
          </Routes>
        </main>
      </div>

    </BrowserRouter>
  );
}

export default App;

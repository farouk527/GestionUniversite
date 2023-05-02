import logo from './logo.svg';
import './App.css';
import Authetificationform from './Authetificationform';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';
import Dashboard from './welcome';
import React,{useState,useEffect} from 'react';
import AddStudentForm from './AddStudentForm';
import AddTeacherForm from './AddTeacherForm';
import EmploiDuTempsTable from './Emploi';
import DescriptionPage from './descprition';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const storedAuthState = localStorage.getItem('isAuthenticated');

    if (storedAuthState) {
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
    
  }, []);

  return (
    <div className="App">
      <Router>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
       {isAuthenticated && 
       <Navbar/>}
        <Routes>
          <Route path="/" element={<Authetificationform />} />
          
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/welcome"  element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />      
          <Route path="/add_etudiant"  element={isAuthenticated ? <AddStudentForm /> : <Navigate to="/" />} />        
          <Route path="/add_enseignant"  element={isAuthenticated ? <AddTeacherForm /> : <Navigate to="/" />} />        
          <Route path="/emploi"  element={isAuthenticated ? <EmploiDuTempsTable /> : <Navigate to="/" />} />        

          <Route path="/description"  element={isAuthenticated ? <DescriptionPage /> : <Navigate to="/" />} />        

        </Routes>
          </AuthContext.Provider>
      </Router>
      
    </div>
  );
}

export default App;

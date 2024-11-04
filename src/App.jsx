import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Pets from './Components/Pets/Pets';
import AdoptForm from './Components/AdoptForm/AdoptForm';
import AdminLogin from './Components/AdminPanel/AdminLogin';
import './App.css';
import Layout from './Components/Layout';
import AdoptPage from './Components/Services/AdoptPage';
import PostPetPage from './Components/Services/PostPetPage';
import FaqAdopter from './Components/Faq/FaqAdopter';
import FaqRehomer from './Components/Faq/Faqrehomer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home description="Be ready to give your pet the love, care, and attention they deserve before bringing them into your home." />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />{' '}
        <Route
          path="/adopt"
          element={
            <Layout>
              <AdoptPage />
            </Layout>
          }
        />
        <Route
          path="/rehome"
          element={
            <Layout>
              <PostPetPage />
            </Layout>
          }
        />{' '}
        <Route
          path="/faq-adopter"
          element={
            <Layout>
              <FaqAdopter />
            </Layout>
          }
        />{' '}
        <Route
          path="/faq-rehomer"
          element={
            <Layout>
              <FaqRehomer />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/pets"
          element={
            <Layout>
              <Pets />
            </Layout>
          }
        />
        <Route
          path="/adopt-form"
          element={
            <Layout>
              <AdoptForm />
            </Layout>
          }
        />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
};

export default App;

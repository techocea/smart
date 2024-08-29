import React from "react";
import ReactDOM from "react-dom/client";
import Document from "./components/document";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Header,
  Footer,
  AboutPage,
  ServicePage,
  FinancePage,
  BlogPage,
  Contact,
  Australia,
  Canada,
  Ireland,
  UnitedKingdom,
  UnitedStates,
  Italy,
} from "./utils/imports";

// import SignIn from "./components/SignIn.jsx";
// import SignUp from "./components/SignUp.jsx";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const routeTitles = {
  "/": "Home - Negombo Smart Achievers",
  "/about": "About Us - Negombo Smart Achievers",
  "/services": "Our Services - Negombo Smart Achievers",
  "/study-destinations/australia":
    "Study in Australia - Negombo Smart Achievers",
  "/study-destinations/canada": "Study in Canada - Negombo Smart Achievers",
  "/study-destinations/ireland": "Study in Ireland - Negombo Smart Achievers",
  "/study-destinations/united-kingdom":
    "Study in the UK - Negombo Smart Achievers",
  "/study-destinations/united-states":
    "Study in the USA - Negombo Smart Achievers",
  "/study-destinations/italy": "Study in Italy - Negombo Smart Achievers",
  "/financial": "Financial Services - Negombo Smart Achievers",
  "/contact": "Contact Us - Negombo Smart Achievers",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-white h-auto">
      <ToastContainer />
      <BrowserRouter>
        <Document titles={routeTitles} />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <App />
              </MainLayout>
            }
          />

          <Route
            path="/about"
            element={
              <MainLayout>
                <AboutPage />
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <ServicePage />
              </MainLayout>
            }
          />
          <Route
            path="/study-destinations/australia"
            element={
              <MainLayout>
                <Australia />
              </MainLayout>
            }
          />
          <Route
            path="/study-destinations/canada"
            element={
              <MainLayout>
                <Canada />
              </MainLayout>
            }
          />
          <Route
            path="/study-destinations/ireland"
            element={
              <MainLayout>
                <Ireland />
              </MainLayout>
            }
          />
          <Route
            path="/study-destinations/united-kingdom"
            element={
              <MainLayout>
                <UnitedKingdom />
              </MainLayout>
            }
          />
          <Route
            path="/study-destinations/united-states"
            element={
              <MainLayout>
                <UnitedStates />
              </MainLayout>
            }
          />
          <Route
            path="/study-destinations/italy"
            element={
              <MainLayout>
                <Italy />
              </MainLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <MainLayout>
                <BlogPage />
              </MainLayout>
            }
          />
          <Route
            path="/financial"
            element={
              <MainLayout>
                <FinancePage />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          {/* <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

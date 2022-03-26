import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FloraAndFaunaPage from "./pages/FloraAndFaunaPage";
import PriceEntryPage from "./pages/PriceEntryPage";
import PriceServicePage from "./pages/PriceServicePage";
import RoomsPage from "./pages/RoomsPage";
import RoomsDetailPage from "./pages/RoomsDetailPage";
import RegulationsPage from "./pages/RegulationsPage";
import TasksPage from "./pages/TasksPage";
import AdminPage from "./pages/AdminPage";

import Header from "./components/header/Header";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={Login}/>
        {/* <Route path="/signin" element={}/> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/flora_and_fauna" element={<FloraAndFaunaPage />} />
        <Route path="/entry_price" element={<PriceEntryPage />} />
        <Route path="/service_price" element={<PriceServicePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms_detail" element={<RoomsDetailPage />} />
        <Route path="/regulations" element={<RegulationsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/admin/userList" element={<AdminPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default MainRoutes;

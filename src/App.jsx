import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";

const Home = lazy(() => import("./Pages/Home"))
const LPDC = lazy(() => import("./Pages/LPDC"));
const Loading = lazy(() => import("./Components/Loading"));


const App = () => (
  <BrowserRouter>
    <Layout />

    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/le-pilier-du-charisme" element={<LPDC />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    <Footer />
  </BrowserRouter>
);

export default App
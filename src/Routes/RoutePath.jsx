import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Path";
import AppLoader from "../components/common/AppLoader";
import Navbar from "../components/common/Navbar";

const Login = lazy(() => import("../components/Login/Login"));
const Home = lazy(() => import("../components/pages/Home"));

export default function RoutePath() {
  const { HOME, LOGIN } = ROUTES;
  return (
    <>
    <Navbar />
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={HOME} element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

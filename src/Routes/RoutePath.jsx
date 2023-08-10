import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Path";
import { useLocation } from "react-router-dom";

import AppLoader from "../components/common/AppLoader";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { useSelector } from "react-redux";

const Login = lazy(() => import("../components/Login/Login"));
const Home = lazy(() => import("../components/pages/Home"));
const Feeds = lazy(() => import("../components/pages/Feeds"));
const Todo = lazy(() => import("../components/pages/Todo"));
const Salary = lazy(() => import("../components/pages/Salary"));
const LeaveApply = lazy(() => import("../components/pages/Leave/Leave Apply/LeaveApply"));
const LeaveBalances = lazy(() =>
  import("../components/pages/Leave/LeaveBalances")
);
const LeaveCalendar = lazy(() =>
  import("../components/pages/Leave/LeaveCalendar")
);
const HolidayCalendar = lazy(() =>
  import("../components/pages/Leave/HolidayCalendar")
);
const DocumentCenter = lazy(() => import("../components/pages/DocumentCenter"));
const People = lazy(() => import("../components/pages/People"));
const Helpdesk = lazy(() => import("../components/pages/Helpdesk"));
const WorkflowDelegates = lazy(() =>
  import("../components/pages/WorkflowDelegates")
);

export default function RoutePath() {
  const {
    HOME,
    LOGIN,
    FEEDS,
    TODO,
    SALARY,
    LEAVE_APPLY,
    LEAVE_BALANCES,
    LEAVE_CALENDAR,
    HOLIDAY_CALENDAR,
    DOCUMENT_CENTER,
    PEOPLE,
    HELPDESK,
    WORKFLOW_DELEGATES,
  } = ROUTES;
  const location = useLocation();
  const isSidebarOpen = useSelector((state) => state.common.isSidebarOpen);

  return (
    <div
      style={{
        marginLeft:
          isSidebarOpen && location.pathname !== "/login" ? "200px" : "0", // Adjust the width based on your Sidebar width
        backgroundColor: "rgb(247, 247, 247)",
        height: "100vh",
      }}
    >
      {location.pathname !== LOGIN && <Navbar />}
      {location.pathname !== LOGIN && isSidebarOpen && <Sidebar />}
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path={LOGIN} element={<Login />} />
          <Route path={HOME} element={<Home />} />
          <Route path={FEEDS} element={<Feeds />} />
          <Route path={TODO} element={<Todo />} />
          <Route path={SALARY} element={<Salary />} />
          <Route path={LEAVE_APPLY} element={<LeaveApply />} />
          <Route path={LEAVE_CALENDAR} element={<LeaveCalendar />} />
          <Route path={HOLIDAY_CALENDAR} element={<HolidayCalendar />} />
          <Route path={DOCUMENT_CENTER} element={<DocumentCenter />} />
          <Route path={PEOPLE} element={<People />} />
          <Route path={HELPDESK} element={<Helpdesk />} />
          <Route path={WORKFLOW_DELEGATES} element={<WorkflowDelegates />} />
          <Route path={LEAVE_BALANCES} element={<LeaveBalances />} />
        </Routes>
      </Suspense>
    </div>
  );
}

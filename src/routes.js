/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 xpdtr (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by xpdtr

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import Assignment from "@material-ui/icons/Assignment";
import Business from "@material-ui/icons/Business";
import People from "@material-ui/icons/People";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import Projects from "views/Projects/Projects.js";
import Filings from "views/Filings/Filings.js";
import FormDetail from "views/Filings/FormDetail";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/projects",
    name: "Projects",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Assignment,
    component: Projects,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Buildings",
    rtlName: "قائمة الجدول",
    icon: Business,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/filings",
    name: "Filings",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Filings,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Tasks",
    rtlName: "الرموز",
    icon: AssignmentTurnedIn,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Contacts",
    rtlName: "خرائط",
    icon: People,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Config",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;

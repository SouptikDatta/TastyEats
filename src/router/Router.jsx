import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/shop/Payment";
import Order from "../pages/dashboard/Order";
import ManageBookings from "../pages/dashboard/admin/ManageBookings";
import FAQs from "../pages/FAQs";
import About from "../pages/About";
import Offers from "../pages/Offers";
import Contact from "../pages/Contact";
import Favorites from "../pages/shop/Favorites";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faqs",
        element: <FAQs/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: '/offers',
        element: <Offers/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: "/cart-page",
        element:<PrivateRoute><CartPage/></PrivateRoute>,
      },
      {
        path: "/order",
        element:<PrivateRoute><Order/></PrivateRoute>
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile/></PrivateRoute>
      },
      {
        path: "/process-checkout",
        element:<PrivateRoute><Payment/></PrivateRoute>
      }
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  //admin routes
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
    children: [
      {
        path: '',
        element: <Dashboard/>
      },
      {
        path: 'users', 
        element: <Users/>
      },
      {
        path: 'manage-items',
        element: <ManageItems/>
      },
      {
        path: 'add-menu', 
        element: <AddMenu/>
      },
      {
        path: 'update-menu/:id', 
        element: <UpdateMenu/>,
        loader: ({params}) => fetch(`https://tastyeats-server.onrender.com//menu/${params.id}`)
      },
      {
        path: 'manage-bookings',
        element: <ManageBookings/>
      }
    ]
  }
]);

export default router;
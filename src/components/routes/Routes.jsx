import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import AboutUsPage from "../About-us-page/AboutUsPage";
import CatagoryDetails from "../catagoryDetails/CatagoryDetails";
import Login from "../login/Login";
import Register from "../register/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../services/Services";
import Error from "../404_Not_found/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=>fetch('/data.json')
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/about-us',
            element: <PrivateRoute><AboutUsPage></AboutUsPage></PrivateRoute>
        },
        {
            path:'/services',
            element: <PrivateRoute><Services></Services></PrivateRoute>,
            loader: ()=>fetch('/data.json')
        },
        {
            path:'/catagory-details/:id',
            element: <PrivateRoute><CatagoryDetails></CatagoryDetails></PrivateRoute>,
            loader: ()=>fetch('/blogs.json')
        }
      ]
    },
]);

export default router;
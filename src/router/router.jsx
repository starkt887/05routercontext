import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import RootLayout from "./laytout/RootLayout";
import Dashboard from "../pages/private/Dashboard";
import Products from "../pages/private/Products";
import Categories from "../pages/private/Categories";
import AuthLayout from "./laytout/AuthLayout";



export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Categories />} />
            </Route>

        </Route>
    ))
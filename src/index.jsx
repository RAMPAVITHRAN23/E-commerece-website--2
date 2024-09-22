import "./index.css";
import ReactDOM from "react-dom/client";
import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Function components
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import ErrorPage from "./component/ErrorPage/errorpage";
import ProductDetails from "./component/ProductDetails/ProductDetails";


// Lazy load components
const Body = lazy(() => import("./component/Bodyc/Bodyc"));
const Card = lazy(() => import("./component/Card/card"));
const Contact = lazy(() => import("./component/Contact/contact"));
const Help = lazy(() => import("./component/Help/help"));
const Content = lazy(() => import("./component/Content/content"));

// Applayout component
const Applayout = () => {
    useEffect(() => {
        console.log("App Layout Mounted");
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

// Define routes with lazy loading for components
const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                    <Body />

                ),
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
            {
                path: "/card",
                element: (
                    <Suspense fallback={<div>Loading Card...</div>}>
                        <Card />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<div>Loading Contact...</div>}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/help",
                element: (
                    <Suspense fallback={<div>Loading Help...</div>}>
                        <Help />
                    </Suspense>
                ),
            },
            {
                path: "/content",
                element: (
                    <Suspense fallback={<div>Loading Content...</div>}>
                        <Content />
                    </Suspense>
                ),
            },
            {
                path: "/product",  // Define a route for /product (without :id)
                element: <div>Please select a product.</div>,  // You can add a default component here
            },
        ],
    },
    // Add other routes here if needed
]);

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root"));

// Root render method with RouterProvider
root.render(<RouterProvider router={router} />);

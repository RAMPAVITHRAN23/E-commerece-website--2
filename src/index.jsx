import "./index.css";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Function components
import Card from "./component/Card/card";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import ErrorPage from "./component/ErrorPage/errorpage";
// import { Productdata } from "./component/api/Dummydata";
// import Commentcomponent from "./component/CommentComponent/commentcomponent";
// import Counter from "./component/Counter/counter";

// Applayout component
const Applayout = () => {
    useEffect(() => {
        console.log("Hello");
    }, []);

    return (
        <>
            <Header />
            {/* <Commentcomponent />
            <Counter />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                {Productdata.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        content={item.content}
                    />
                ))}
            </div> */}
            <Outlet />

            <Footer />
        </>
    );
};

// Define routes
const router = createBrowserRouter([

    {
        path: "/",
        element: <Applayout />,
        
        children: [
            {
                path: "/offer",
                element: <Card/>
            },
            {
                path: "/help",
                element: <p>Help Page</p>
            },
            {
                path: "*",
                element: <ErrorPage/>
            },
        ],
        errorElement: <ErrorPage/>
        
    },

    // Add other routes here
]);

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root"));

// Root render method with RouterProvider
root.render(
    <RouterProvider router={router} />
);

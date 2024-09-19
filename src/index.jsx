import "./index.css";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";

// Function components
import Card from "./component/Card/card";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import { Productdata } from "./component/api/Dummydata";
import Commentcomponent from "./component/CommentComponent/commentcomponent";
import Counter from "./component/Counter/counter";
import {createBrowserRouter} from "react-router-dom"



// Applayout component
const Applayout = () => {


    const [count, setCounter] = useState(1);
    useEffect(() => {
        console.log("Hello");
        setCounter(count + 1)
        console.log(count)
    }, []);

    return (
        <>
            <Header />
            <Commentcomponent /> {/* Fixed typo */}
            <Counter />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {Productdata.map((item) => (
                    <Card
                        key={item.id} // Use a stable key like 'id' from Productdata
                        title={item.title}
                        image={item.image}
                        content={item.content}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

const AppRouter = createBrowserRouter([
    {
        element:<Card/>,
        path:"/offer"
    }

])

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={AppRouter} />
);


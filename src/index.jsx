import "./index.css";
import ReactDOM from "react-dom/client"; // Updated import for ReactDOM
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// Function components
import Card from "./component/Card/card";
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import { Productdata, Productdata2 } from "./component/api/Dummydata"; // Single import for both
import Commentcomponent from "./component/CommentComponent/commentcomponent";
import Counter from "./component/Counter/counter";

// Applayout component
const Applayout = () => {
    // Declare state variable 'counts' and the setter function 'setCounts'
    

    return (
        <>
            <Header />

            <Commentcomponent />

            <Counter/>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
                {Productdata.map((items) => (
                    <Card
                        key={uuidv4()}
                        title={items.title}
                        image={items.image}
                        content={items.content}
                    />
                ))}
            </div>

        </>
    );
};

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root"));

// Root render method
root.render(<Applayout />);

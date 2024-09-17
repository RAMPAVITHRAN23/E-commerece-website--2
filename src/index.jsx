import "./index.css";
import ReactDOM from "react-dom/client"; // Updated import for ReactDOM
import { v4 as uuidv4 } from "uuid";
uuidv4();

// Function component
import Card from "../component/Card/card";
import Productdata from "../component/api/Dummydata";
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";

// React Element
const paraElement = <p>SPARK TUNE</p>;

// Applayout component
const Applayout = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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

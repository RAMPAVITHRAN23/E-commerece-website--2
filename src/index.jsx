import "./index.css";
import ReactDOM from "react-dom/client";  // Updated import for ReactDOM

// React Element
const paraElement = <p> SPARK TUNE</p>;

// Function component
const Header = () => {
    return <p>Header da !!!</p>;
};

// Footer component
const Footer = () => {
    return <p>Footer component </p>;
};

// Applayout component
const Applayout = () => {
    return (
        <>
            <Header />
            <div>
                <img className="h-11"
                    src="https://m.media-amazon.com/images/I/41mId0YamjL._SX300_SY300_QL70_FMwebp_.jpg"
                    alt="card-1 image"
                />
                <p>
                    Amazon Basics TWS in-Ear Earbuds (AB-A8) with Fast Charging up to 50 Hours of Playtime | Dual 10mm Driver |
                    IPX4 Water-Resistance | Bluetooth 5.3 | Charging Case with Mic | Touch Control (Orange)
                </p>
                <button className="bg-orange-500 p-2 rounded-lg">
                    Add to cart
                </button> {/* Tailwind class for button */}
            </div>
            <Footer />
        </>
    );
};

// Root creation
const root = ReactDOM.createRoot(document.getElementById("root"));

// Root render method
root.render(<Applayout />);

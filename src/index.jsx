import "./index.css";
import ReactDOM from "react-dom/client"; // Updated import for ReactDOM

// React Element
const paraElement = <p>SPARK TUNE</p>;

// Function component
const Header = () => {
    return <p>Header da !!!</p>;
};

// Footer component
const Footer = () => {
    return <p>Footer component</p>;
};

// Product data as an array (not a function)
const Productdata = [
    {
        id:"1",
        title: "Amazon Basics TWS in-Ear Earbuds (AB-A8) with Fast Charging up to 50 Hours of Playtime Dual 10mm Driver | IPX4 Water-Resistance | Bluetooth 5.3 | Charging Case with Mic | Touch Control (Orange)",
        image: "https://m.media-amazon.com/images/I/41mId0YamjL._SX300_SY300_QL70_FMwebp_.jpg",
        content: "MRP: ₹999.00 (-67%)",
    },
    {
        id:"2",
        title: "Amazon Basics TWS in-Ear Earbuds (AB-A8) with Fast Charging up to 50 Hours of Playtime Dual 10mm Driver | IPX4 Water-Resistance | Bluetooth 5.3 | Charging Case with Mic | Touch Control (Orange)",
        image: "https://m.media-amazon.com/images/I/41mId0YamjL._SX300_SY300_QL70_FMwebp_.jpg",
        content: "MRP: ₹999.00 (-67%)",
    },
    {
        id:"3",
        title: "Amazon Basics TWS in-Ear Earbuds (AB-A8) with Fast Charging up to 50 Hours of Playtime Dual 10mm Driver | IPX4 Water-Resistance | Bluetooth 5.3 | Charging Case with Mic | Touch Control (Orange)",
        image: "https://m.media-amazon.com/images/I/41mId0YamjL._SX300_SY300_QL70_FMwebp_.jpg",
        content: "MRP: ₹999.00 (-67%)",
    },
];

// Card Component
const Card = ({ title, image, content }) => {
    return (
        <>
            <div className="space-y-4 shadow-xl h-[250px] p-4">
                <img src={image} alt="Product" className="h-20" />
                <p>{title}</p>
                <p>{content}</p>
                <button className="bg-orange-400 p-2 rounded-lg">Add to cart</button>
            </div>
        </>
    );
};

// Applayout component
const Applayout = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {Productdata.map((items) => (
                    <Card
                        key={items}
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

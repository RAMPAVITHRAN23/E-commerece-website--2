import React, { useEffect, useState } from "react";
import Card from "../Card/card";
import axios from "axios";

const Body = () => {
    const [productData, setProductData] = useState([]); // Changed to lowercase for consistency

    const fetchData = async () => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            setProductData(response.data); // Use response.data to set the state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>

            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {productData.length > 0 ? (
                        productData.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    image={"https://i.imgur.com/1twoaDy.jpeg"}
                                    description={item.description}
                                    price={item.price}
                                    category={item.category}// Assuming item.image contains the correct URL
                                />);
                        }
                        )) : (
                        <p>Loading products...</p> // Loading message while data is being fetched
                    )}
                </div>
            </div>
            <p>Hello body</p>
        </>
    );
};

export default Body;

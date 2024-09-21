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
            <p>Hello body</p>
            {productData.length > 0 ? (
                productData.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            title={item.title}
                            image={"https://i.imgur.com/1twoaDy.jpeg"} // Assuming item.image contains the correct URL
                        />
                    );
                })
            ) : (
                <p>Loading products...</p> // Loading message while data is being fetched
            )}
        </>
    );
};

export default Body;

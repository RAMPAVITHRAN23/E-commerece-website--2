import { useState } from "react";

const Commentcomponent = () => {
    
    const [data, Setdata] = useState();
    const [name, Setname] = useState("");
    const [message, Setmessage] = useState("");
    
    return (
        <>
            <p>JSX</p>
            <input
                className="border border-spacing-0 border-blue-900 w-100"
                type="Search"
                placeholder="Enter your name"
                onChange={(e) => {
                    Setname(e.target.value);
                    console.log("Name:", e.target.value);
                }}
            />

            <input
                className="border border-spacing-0 border-blue-900 w-100"
                type="Search"
                placeholder="Enter your msg"
                onChange={(e) => {
                    Setmessage(e.target.value);
                    console.log("message:", e.target.value);
                }}
            />
            <button
                className="bg-orange-400 rounded-lg p-2 m-5"
                onClick={() => {
                    Setdata ([ {name,message}]);
                }}
            >
                Submit
            </button>

            {
                data.map((e) => {
                    console.log(e)
                    return(
                        <>
                        <p>Message</p>
                        <p className="text-black">{e.name}</p>
                        <p className="text-black">{e.message}</p>
                        </>
                    )
                })
            }

            {JSON.stringify(data)}
            
        </>
    );
};

export default Commentcomponent;

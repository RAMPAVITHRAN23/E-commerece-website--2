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

export default Card
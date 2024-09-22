import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="h-56 w-full">
                    <Link to={`/products/${props.id}`}>
                        <img
                            className="mx-auto h-full dark:hidden"
                            src={props.image}
                            alt={props.title}
                        />
                        <img
                            className="mx-auto hidden h-full dark:block"
                            src={props.image}
                            alt={props.title}
                        />
                    </Link>
                </div>
                <div className="pt-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                            {props.category}
                        </span>
                    </div>
                    <Link
                        to={`/products/${props.id}`}
                        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                        {props.title}
                    </Link>
                    <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                            &#8377;{props.price}
                        </p>
                        <Link to={`/products/${props.id}`}>
                            <button
                                type="button"
                                className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                <svg
                                    className="-ms-2 me-2 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                    />
                                </svg>
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
    
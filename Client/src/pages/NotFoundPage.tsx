import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * NotFoundPage Component
 *
 * A component that renders a 404 page.
 *
 * @component
 * @returns {JSX.Element} - The rendered NotFoundPage component.
 */
const NotFoundPage = () => {

    const navigate = useNavigate();

    const handleClickGoBack = (e:React.MouseEvent<HTMLButtonElement> )=> {
        e.preventDefault();
        navigate("/");
    }

    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-red-500">404</p>
                <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        onClick={handleClickGoBack}
                        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                        Go back home
                    </button>
                </div>
            </div>
        </main>
    );
};

export default NotFoundPage;
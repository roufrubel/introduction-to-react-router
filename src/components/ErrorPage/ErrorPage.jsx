import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h4>Oops!</h4>
            <p>error.statusText || error.message</p>
             {
                    error.status === 404 && <div>
                        <p>Page not found</p>
                        <p>go back home page</p>
                        <Link to="/"><button>Go Home</button></Link>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;
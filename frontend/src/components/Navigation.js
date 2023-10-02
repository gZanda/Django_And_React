import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation() {
    return (
        <div id="navbar">
            <Link to="/" className="navItem">
                <h1>Task App</h1>
            </Link>
            <Link to="/tasks/create" className="navItem">
                Create Task
            </Link>
        </div>
    );
}

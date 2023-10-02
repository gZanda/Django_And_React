import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <div id="content">
                <Routes>
                    <Route path="/" element={<TasksPage />} />
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/tasks/create" element={<TaskFormPage />} />
                    <Route path="/tasks/:title" element={<TaskFormPage />} />
                </Routes>
            </div>
            <Toaster />
        </BrowserRouter>
    );
}

export default App;

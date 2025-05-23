import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SettingsPage from "./pages/SettingsPage";
import RegisterPage from "./pages/RegisterPage";
import NewProjectForm from "./components/Shared/Forms/NewProjectForm";
import AuthorizedLayout from "./pages/layouts/AuthorizedLayout";
import NoNavbarLayout from "./pages/layouts/NoNavbarLayout";
import ProjectsPage from "@pages/ProjectsPage.tsx";
import RecipesPage from "@pages/RecipesPage.tsx";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<AuthorizedLayout />}>
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/recipes" element={<RecipesPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="/add-new-project" element={<NewProjectForm />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                    <Route element={<NoNavbarLayout />}>
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

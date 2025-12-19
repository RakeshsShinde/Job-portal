import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import OnboardingPage from "./pages/OnboardingPage";
import MyJobs from "./pages/MyJobs";
import JobListingPage from "./pages/JobListingPage";
import JobPage from "./pages/JobPage";
import PostJobsPage from "./pages/PostJobsPage";
import SavedJobs from "./pages/SavedJobs";
import { ThemeProvider } from "./theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <OnboardingPage /> },
      { path: "/jobs", element: <JobListingPage /> },
      { path: "/job/:id", element: <JobPage /> },
      { path: "/post-job", element: <PostJobsPage /> },
      { path: "/saved-jobs", element: <SavedJobs /> },
      { path: "/my-jobs", element: <MyJobs /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

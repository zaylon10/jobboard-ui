import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppLayout from "./layout/applayout.jsx"; // Make sure you import this
import LandingPage from "./pages/landingpage";
import JobListing from "@/pages/job-listing.jsx";
import JobPage from "@/pages/job.jsx";
import PostJob from "@/pages/post-job.jsx";
import SavedJob from "@/pages/saved-job.jsx";
import MyJobs from "@/pages/my-jobs.jsx";
import Onboarding from "@/pages/onboarding.jsx"; // Make sure you import this
import { ThemeProvider } from "@/components/theme-provider"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },

    ],
  },
]);

function App() {
  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
  </ThemeProvider>;
}

export default App;

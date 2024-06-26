import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApplicationWrapper } from "./../Components/ApplicationWrapper/ApplicationWrapper";
import { Routes } from "../Types";

const applicationRouter = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationWrapper />,
    children: [
      {
        path: Routes.PodcastCommands,
        element: <div>Podcast Templates</div>,
        children: [
          {
            path: Routes.PodcastCommandNew,
            element: <div>Podcast Template New</div>
          },
          {
            path: Routes.PodcastCommandProfile,
            element: <div>Podcast Template Profile</div>
          }
        ]
      },
      {
        path: Routes.PodcastTemplates,
        element: <div>Podcast Templates</div>,
        children: [
          {
            path: Routes.PodcastTemplateNew,
            element: <div>Podcast Template New</div>
          },
          {
            path: Routes.PodcastTemplateProfile,
            element: <div>Podcast Template Profile</div>
          }
        ]
      }
    ]
  }
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={applicationRouter} />;
};

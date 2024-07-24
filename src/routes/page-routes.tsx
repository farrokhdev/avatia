import React, { ReactElement } from "react";
import { ROUTES } from "./route-path";
import { HomePage, LitepaperPage } from "../pages";
// import { GenderTypeStep } from "../pages/create-avatar/GenderTypeStep";
import { UploadAvatarStep } from "../pages/create-avatar/generation.pages/UploadAvatarStep";
import CreateStepsLayout from "../pages/create-avatar/CreateStepsLayout.page";
import { GenerateAvatarPage } from "../pages/create-avatar/generate.page";

export const PAGE_ROUTES: {
  id: number;
  path: string;
  element: ReactElement;
}[] = [
  {
    id: 1,
    path: ROUTES.INDEX,
    element: <HomePage />,
  },
  {
    id: 2,
    path: ROUTES.CREATE_AVATAR,
    element: <CreateStepsLayout />,
  },
  // {
  //   id: 3,
  //   path: ROUTES.GENDER_TYPE,
  //   element: <GenderType />,
  // },
  // {
  //   id: 4,
  //   path: ROUTES.GENERATE_IMAGE_STEPS,
  //   element: <GenerationStepsLayout />,
  // },
  {
    id: 3,
    path: ROUTES.LITEPAPER,
    element: <LitepaperPage />,
  },
  {
    id: 5,
    path: ROUTES.GENERATE_AVATAR,
    element: <GenerateAvatarPage />,
  },
];

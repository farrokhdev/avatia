import React, { type ReactElement } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { NotFoundPage } from "../pages";
import { PAGE_ROUTES } from "./page-routes";
import { useGlobalGenerateContext } from "../contexts/generateContext";
import { ROUTES } from "./route-path";

const Routes: React.FC = (): ReactElement => {
  const { username, gender } = useGlobalGenerateContext();

  return (
    <Router>
      <Switch>
        {PAGE_ROUTES.map(({ id, path, element }) => {
          // if (path === ROUTES.GENERATE_IMAGE_STEPS) {
          //   if (username && gender) {
          //     return <Route key={id} path={path} element={element} />;
          //   }
          // } else {
          return <Route key={id} path={path} element={element} />;
          // }
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Switch>
    </Router>
  );
};

export default Routes;

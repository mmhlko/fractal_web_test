import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { TRoutes } from "./types";
import { routes } from "./routeConfig";

const AppRouter = () => {

    const routeMap = ({ path, element }: TRoutes) => <Route path={path} element={element} key={path} />

    return (
        <Routes>
            {routes.map(routeMap)}
        </Routes>
    )
}

export default memo(AppRouter);
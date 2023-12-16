import { TRoutes } from "pages/types";
import { MainPage } from "./main-page/MainPage";
import { StepsPage } from "./steps-page/StepsPage";

export const RoutePath = {
    main: "/",
    steps: "/steps",
}

export const routes: TRoutes[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.steps, element: <StepsPage /> },
]
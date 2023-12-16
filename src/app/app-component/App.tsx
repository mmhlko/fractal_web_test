import { memo } from "react";
import AppRouter from "pages/AppRouter";

const App = () => {

    return (
        <main >
            <AppRouter />
        </main>
    )
}

export default memo(App);
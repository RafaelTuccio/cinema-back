import Header from "../Header";
import { routesConfig } from "../../infra/routesConfig";
import { Route } from "react-router-dom";
const Layout = () => {

    return(
        <>
        <Header />
            <div className="container">
                {
                    routesConfig.map((value, key) => {
                        return <Route
                        key={key}
                        path={value.path}
                        component={value.component}
                        exact={value.exact}
                        ></Route>
                    })
                }
            </div>

        </>
    );
}
export default Layout;
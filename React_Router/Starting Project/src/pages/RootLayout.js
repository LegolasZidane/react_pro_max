//Using this component, we render the links below the main navigation(our objective).
//The nav bar now wraps these components being rendered(also our objective).
import { Outlet } from 'react-router-dom';

import MainNavigation from "../components/MainNavigation.js";

function RootLayout() {
  return <>
    <MainNavigation />
    {/*The main part is just for css*/}
    <main>
    <Outlet />
    </main>
  </>;
}

export default RootLayout;

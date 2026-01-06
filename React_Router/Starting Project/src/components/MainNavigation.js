//This is the navigation part above the header, hence a component.

/* import { Link } from "react-router-dom"; React renders links as anchor elements.
So styling anchor elements actually styles links.*/

import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/*NavLinks are alternative to links in react, which have special className where we
            destructure the isActive prop to check and therefore return active css classes.*/}

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              /* This can also be done but only with NavLinks.
                style={({ isActive }) => ({
                textAlign: isActive ? "center" : "left",
                })} */

              //the end prop helps us de-activate parent links of the nav bar.
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

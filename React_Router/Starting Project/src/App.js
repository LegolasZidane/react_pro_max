import {
  //a function to create routes and a component to use these routes
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

//import all the components required in routing
import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";
import RootLayout from "./pages/RootLayout.js";
import ErrorPage from "./pages/ErrorPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";

// *For versions < 6.4, we use the following code*
// createRoutesFromElements -> createBrowserRoutes -> RouterProvider
// https://example.com/products
//https-> protocol
//example.com->domain name
// "/products"->path
// even "/" is a path

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path="/products" element={<ProductsPage />}/>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  //route objects
  {
    path: "/", //https://google.com/ the default path
    element: <RootLayout />,
    errorElement: <ErrorPage />, //a fallback page if any error occurs
    //We do this because we want the links to work properly as they are inside the RouterProvider.
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },

      //Adding path parameter("/:....") is a dynamic way to overcome redundant/hard-coded paths
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

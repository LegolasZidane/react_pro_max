import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";
import RootLayout from "./pages/RootLayout.js";
import ErrorPage from "./pages/ErrorPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";

// https://example.com/products
//https-> protocol
//example.com->domain name
// /products->path
// even / is a path

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path="/products" element={<ProductsPage />}/>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

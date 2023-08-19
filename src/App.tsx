import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Artist from "./pages/artist/Artist";
import Footer from "./components/footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "artist/:artistId",
    element: <Artist />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

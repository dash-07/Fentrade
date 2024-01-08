import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ResetPassword from "./pages/ResetPassword";
import Rates from "./pages/Rates";
import About from "./pages/About";
import Faq from "./pages/Faq";
import "./fonts/VastagoGrotesk-Black.otf";
import "./fonts/VastagoGrotesk-Bold.otf";
import "./fonts/VastagoGrotesk-ExtraLight.otf";
import "./fonts/VastagoGrotesk-Heavy.otf";
import "./fonts/VastagoGrotesk-Light.otf";
import "./fonts/VastagoGrotesk-Medium.otf";
import "./fonts/VastagoGrotesk-Regular.otf";
import "./fonts/VastagoGrotesk-SemiBold.otf";
import "./fonts/VastagoGrotesk-Thin.otf";

const Layout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "rates",
        element: <Rates />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

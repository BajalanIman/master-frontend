import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import RootLayout from "./pages/Root/Root";
import Home from "./pages/Home";
import MapBrandenbur from "./pages/map/MapBrandenburg/MapBrandenbur";
import Panoramas from "./pages/panorama/Panoramas";
import Openweather from "./pages/openweather/Openweather";
import Login from "./pages/admin/users/Login/Login";
import NewUsers from "./pages/admin/users/NewUsers";
import UserManagement from "./pages/admin/users/UserManagement";
import About from "./pages/NavigationBar/About/About";
import Help from "./pages/NavigationBar/Help/Help";
import ContactForm from "./pages/Footer/ContactForm";
import AdminDataSender from "./pages/admin/adminDataSender";

export const CartContext = createContext({ 123: 1 });

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mapbrandenbur", element: <MapBrandenbur /> },
      { path: "/panoramas", element: <Panoramas /> },
      { path: "/openweather", element: <Openweather /> },
      { path: "/login", element: <Login /> },
      { path: "/newuser", element: <NewUsers /> },
      { path: "/usermanagement", element: <UserManagement /> },
      { path: "/about", element: <About /> },
      { path: "/help", element: <Help /> },
      { path: "/contact", element: <ContactForm /> },
      { path: "/admin-data-sender", element: <AdminDataSender /> },
    ],
  },
]);

function App() {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage(language);
  }, [language]);

  return (
    <>
      <CartContext.Provider
        value={{
          language,
          setLanguage,
        }}
      >
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;

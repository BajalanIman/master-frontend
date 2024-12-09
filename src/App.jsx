import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import MapBrandenbur from "./pages/map/MapBrandenbur";
import Panoramas from "./pages/panorama/Panoramas";
import Openweather from "./pages/openweather/Openweather";
// import TestDatabase from "./TestDatabase";
import Login from "./pages/admin/users/Login";
import NewUsers from "./pages/admin/users/NewUsers";
import UserManagement from "./pages/admin/users/UserManagement";
import About from "./pages/NavigationBar/about/About";
import Help from "./pages/NavigationBar/help/Help";
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
      <div className="w-full flex justify-center bg-red-500"></div>
    </>
  );
}

export default App;

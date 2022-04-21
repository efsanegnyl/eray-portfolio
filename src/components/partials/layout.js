import React  from "react";
import Header from "./header";

function Layout({ children }) {
    return (
   <div className="w-full min-h-screen bg-primary-dark-900  relative">
       <Header />
       {children}
   </div>

    );
}

export default Layout;

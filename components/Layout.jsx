import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import { useAuth } from "../context/AuthContext";


export default function Layout(props) {
  const { children } = props;
  const { currentUser } = useAuth()
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-900 text-white">
      {currentUser && <Header />}
      <PageTitle/>
      <main className="flex-1 flex flex-col p-4">{children}</main>
      <Footer />
    </div>
  );
}

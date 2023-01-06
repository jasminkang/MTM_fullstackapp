
import Head from "next/head";
import Login from "../components/Login";
import AdminDashboard from "../components/AdminDashboard";
import Image from "next/image";
import {useAuth } from "../context/AuthContext";

const Administration = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            {!currentUser && <Login />}
            {currentUser && <AdminDashboard />}
        </div>)
};

export default Administration
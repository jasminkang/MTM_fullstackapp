import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

export default function useFetchBlogs() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState("");

  const { currentUser } = useAuth();

  const collection = "users"

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, collection, currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlogs(docSnap.data().blogs).then;
        } else {
          setBlogs({});
        }
      } catch (err) {
        setError("Failed to load");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { loading, error, blogs, setBlogs };
}

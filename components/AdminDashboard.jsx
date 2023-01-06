import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import BlogCard from "./BlogCard";
import useFetchBlogs from "../hooks/fetchBlogs";

const AdminDashboard = () => {
  const { userInfo, currentUser } = useAuth();
  const [edit, setEdit] = useState(null);
  const [edittedValue, setEdittedValue] = useState("");
  const [blog, setBlog] = useState("");

  const { blogs, setBlogs, loading, error } = useFetchBlogs();

  async function handleAddBlog() {
    const newKey =
      Object.keys(blogs).length === 0 ? 1 : Math.max(...Object.keys(blogs)) + 1;
    setBlogs({ ...blogs, [newKey]: blog });
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        blogs: {
          [newKey]: blog,
        },
      },
      { merge: true }
    );
    setBlog("");
  }

  async function handleEditBlog() {
    if (!edittedValue) {
      return;
    }
    const newKey = edit;
    setBlogs({ ...blogs, [newKey]: edittedValue });
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        blogs: {
          [newKey]: edittedValue,
        },
      },
      { merge: true }
    );
    setEdit(null);
    setEdittedValue("");
  }

  function handleAddEdit(blogKey) {
    return () => {
      console.log(blogs[blogKey]);
      setEdit(blogKey);
      setEdittedValue(blogs[blogKey]);
    };
  }

  function handleDelete(blogKey) {
    return async () => {
      const tempObj = { ...blogs };
      delete tempObj[blogKey];

      setBlogs(tempObj);
      const userRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userRef,
        {
          blogs: {
            [blogKey]: deleteField(),
          },
        },
        { merge: true }
      );
    };
  }

  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap=3 sm:gap-5">
      <div className="flex items-stretch">
        <input
          type="text"
          placeholder="Enter blog post"
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
          className="outline-none p-3 text-base sm:text-lg text-slate-900 flex-1"
        />
        <button
          onClick={handleAddBlog}
          className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40"
        >
          ADD
        </button>
      </div>
      {loading && (
        <div className="flex-1 grid place-items-center">
          <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
        </div>
      )}
      {!loading && (
        <>
          {Object.keys(blogs).map((blog, i) => {
            return (
              <BlogCard
                handleEditBlog={handleEditBlog}
                key={i}
                handleAddEdit={handleAddEdit}
                edit={edit}
                blogKey={blog}
                edittedValue={edittedValue}
                setEdittedValue={setEdittedValue}
                handleDelete={handleDelete}
              >
                {blogs[blog]}
              </BlogCard>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;

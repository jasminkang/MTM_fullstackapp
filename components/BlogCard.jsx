import React from "react";

export default function BlogCard (props) {
  const {
    children,
    edit,
    handleAddEdit,
    edittedValue,
    setEdittedValue,
    blogKey,
    handleEditBlog,
    handleDelete,
  } = props;

  return (
    <div className="p-2 relative sm:p-3 border flex items-stretch border-white border-solid ">
      <div className="flex-1 flex">
        {!(edit === blogKey) ? (
          <>{children}</>
        ) : (
          <input
            className="bg-inherit flex-1 text-white outline-none"
            value={edittedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
            />
        )}
      </div>
      <div className="flex items-center">
        {edit === blogKey ? (
          <i
            onClick={handleEditBlog}
            className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={handleAddEdit(blogKey)}
            className="fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer"
          ></i>
        )}
        <i
          onClick={handleDelete}
          className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};


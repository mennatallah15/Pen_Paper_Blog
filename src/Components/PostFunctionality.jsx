import React from "react";

const PostFunctionality = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  setImage,
}) => {
  return (
    <div className="Form mt-3">
      <h1>Add New Post</h1>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input w-full max-w-xs mb-2"
          placeholder="Title"
          {...register("Title")}
          value={undefined}
        />
        <h2> {errors.Title && <p>Title is required.</p>}</h2>
        <textarea
          className="input w-full max-w-xs mb-2"
          placeholder="Description"
          {...register("Description")}
        />
        <h2>{errors.Description && <p>Description is required.</p>}</h2>

        <select
          {...register("Category", { required: true })}
          className="input w-full max-w-xs mb-2"
        >
          <option id="DefaultSelect">--Choose Category--</option>
          <option value="1">Food 🍏</option>
          <option value="2">Education 👨‍🏫</option>
          <option value="3">Fashion 🧚‍♀️</option>
          <option value="4">Health 👩‍⚕️</option>
          <option value="5">Technology 🤳</option>
        </select>

        {errors.Category && (
          <p style={{ color: "red" }}> {errors.Category?.message}</p>
        )}

        <input
          type="file"
          className="Add-input file-input w-full max-w-xs mb-5 file:bg-orange-800 file:text-white
                hover:file:bg-orange-900"
          {...register("ImageFile", { required: true })}
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImage(e.target.files[0]);
          }}
          // value={Image || ""}
        />
        <h2> {errors.ImageFile?.message}</h2>

        <button className="btn w-full max-w-xs">Add Post</button>
      </form>
    </div>
  );
};

export default PostFunctionality;

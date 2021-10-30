import React, { useRef } from "react";

const UploadForm = () => {
  const uploadEl = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('image', uploadEl.current.files[0]);

    const response = await fetch("http://localhost:3001/upload", {
      method: "post",
      body: formData,
    });

    console.log("response :>> ", response);
  };

  return (
    <form
      onSubmit={onSubmit}
      action="#"
      method="post"
      encType="multipart/form-data"
    >
      <label>
        Choose File:
        <input ref={uploadEl} type="file" name="image" />
      </label>

      <button type="submit">Upload!</button>
    </form>
  );
};

export { UploadForm };

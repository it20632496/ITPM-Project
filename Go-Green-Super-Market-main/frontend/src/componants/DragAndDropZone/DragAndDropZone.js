import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropZone = ({ images, setImages }) => {
  // const [images, setImages] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImages([
        ...images,
        ...acceptedFiles?.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    accept: "image/*",
  });

  const handleRemoveImage = (image) => {
    setImages(images.filter((img) => image.name !== img.name));
  };
  return (
    <>
      <div
        {...getRootProps()}
        className="border border-primary p-5 text-center d-flex align-items-center justify-content-center"
        style={{ height: "250px" }}
      >
        <input {...getInputProps()} multiple />
        {isDragActive ? (
          <p className="h5">Drop the files here ...</p>
        ) : (
          <p className="h5">
            Drag and drop files here, or click to select files
          </p>
        )}
      </div>
      <div class="my-4">
        {images?.map((image) => (
          <div
            key={image.name}
            class="row d-flex justify-content-between align-items-center"
          >
            <div class="col-3">
              <img
                src={image.preview}
                class={"img-thumbnail"}
                alt={image.name}
                style={{ height: "70px" }}
              />
            </div>
            <p class="col-7">{image.name}</p>
            <div class="col-2" onClick={() => handleRemoveImage(image)}>
              <i class="bi bi-trash"></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DragAndDropZone;

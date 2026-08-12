import { useState } from "react";

const DiseaseDetection = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select a crop image");
      return;
    }

    console.log(image);

    // Later send image to Express/AI API
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700">
          🦠 Crop Disease Detection
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Upload a crop image and let AI analyze it.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md"
        >

          <label className="block border-2 border-dashed border-green-300 rounded-xl p-10 text-center cursor-pointer hover:bg-green-50">

            <div className="text-5xl mb-4">
              📷
            </div>

            <p className="font-semibold">
              Click to upload crop image
            </p>

            <p className="text-sm text-gray-500 mt-2">
              PNG, JPG or JPEG
            </p>

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleImage}
              className="hidden"
            />

          </label>

          {preview && (
            <div className="mt-6">
              <img
                src={preview}
                alt="Crop preview"
                className="max-h-80 mx-auto rounded-xl"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Analyze Crop
          </button>

        </form>

      </div>

    </div>
  );
};

export default DiseaseDetection;
import React, { useState } from "react";
import axios from "axios";

const AddCrimeSceneForm = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [lodgeName, setLodgeName] = useState("");
  const [area, setArea] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddCrimeScene = async () => {
    try {
      // Send a request to add a new crime scene
      const response = await axios.post("https://crime-report-app-production.up.railway.app/api/v1/crime-scene", {
        roomNumber,
        lodgeName,
        area,
      });

      if (response.status === 201) {
        setSuccessMessage("Crime scene added successfully!");
        setErrorMessage(null);
        // Clear the form fields
        setRoomNumber("");
        setLodgeName("");
        setArea("");
      }
    } catch (error) {
      console.error("Failed to add crime scene: ", error);
      setErrorMessage("Failed to add crime scene. Please try again.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Add New Crime Scene</h2>

        {successMessage && (
          <p className="text-green-500 mb-4">{successMessage}</p>
        )}

        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}

        <form>
          <div className="mb-4">
            <label htmlFor="roomNumber" className="block text-gray-700 font-semibold mb-2">Room Number:</label>
            <input
              type="text"
              id="roomNumber"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter room number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lodgeName" className="block text-gray-700 font-semibold mb-2">Lodge Name:</label>
            <input
              type="text"
              id="lodgeName"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter lodge name"
              value={lodgeName}
              onChange={(e) => setLodgeName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="area" className="block text-gray-700 font-semibold mb-2">Area:</label>
            <input
              type="text"
              id="area"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
            onClick={handleAddCrimeScene}
          >
            Add Crime Scene
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrimeSceneForm;

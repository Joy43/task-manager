import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/Axiospublic";

const Taskform = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    taskName: "",
    emailAddress: "",
    name: "",
    phoneConfirmation: "",
    priority: "",
    occupation: "",
    range: "",
    date: "",
    textarea: "",
    fileUpload: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPublic.post("/task", formData);

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Upload successful",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Fill up task
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">Task Name</label>
              <input
                id="taskName"
                type="text"
                placeholder="Name of the task you"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.taskName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">
                phoneNumber
              </label>
              <input
                id="phoneConfirmation"
                type="number"
                placeholder="Phone Confirmation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.phoneConfirmation}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">priority</label>
              <select
                id="priority"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Middle">Middle</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                occupation
              </label>
              <select
                id="occupation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.occupation}
                onChange={handleInputChange}
              >
                <option value="">Select Occupation</option>
                <option value="student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Doctor">Doctor</option>
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Range</label>
              <input
                id="range"
                type="range"
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.range}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Text Area</label>
              <textarea
                id="textarea"
                placeholder="Text Area"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.textarea}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600
                    hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2
                     focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="fileUpload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        value={formData.fileUpload}
                        onChange={handleInputChange}
                      />
                    </label>

                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className=" px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Upload
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Taskform;

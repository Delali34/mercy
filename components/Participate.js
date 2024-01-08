// pages/contact.js
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaCheckCircle, FaUpload } from "react-icons/fa";

const regionsInGhana = [
  "Greater Accra",
  "Ashanti",
  "Northern",
  "Western",
  "Eastern",
  "Volta",
  "Brong-Ahafo",
  "Central",
  "Upper East",
  "Upper West",
];

const cleanEnergyTechOptions = [
  "Solar",
  "Wind",
  "Hydro",
  "Bioenergy",
  "Geothermal",
  "Others",
];

const Contact = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data, e) => {
    try {
      const attachment = data.file[0];

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("region", data.region);
      formData.append("cleanEnergyTech", data.cleanEnergyTech);
      formData.append("file", attachment);

      // Use Formspree URL in the action attribute
      await fetch("https://getform.io/f/482580f7-14a7-414c-b312-335e5b7d020b", {
        method: "POST",
        body: formData,
        enctype: "multipart/form-data",
        headers: {
          Accept: "application/json",
        },
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending form:", error);
    }
  };

  const handleFileChange = (event) => {
    setValue("file", event.target.files);
  };

  return (
    <div className="max-w-2xl mx-auto pb-20 p-8 lg:mt-8 bg-white rounded shadow-md">
      {isSuccess ? (
        <div className="flex items-center text-green-600">
          <FaCheckCircle className="w-6 h-6 mr-2" />
          <span>Your impact story has been submitted successfully!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "This field is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "This field is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              {...register("phone", { required: "This field is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-600"
            >
              Region of Impact
            </label>
            <select
              id="region"
              name="region"
              {...register("region", { required: "This field is required" })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              {regionsInGhana.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="cleanEnergyTech"
              className="block text-sm font-medium text-gray-600"
            >
              Clean Energy Technology
            </label>
            <select
              id="cleanEnergyTech"
              name="cleanEnergyTech"
              {...register("cleanEnergyTech", {
                required: "This field is required",
              })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              {cleanEnergyTechOptions.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-600"
            >
              Attach you story File here
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,image/*"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            <div className="flex items-center mt-2 text-gray-600">
              <FaUpload className="w-4 h-4 mr-2" />
              <span>Upload PDF, Word, or image files</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

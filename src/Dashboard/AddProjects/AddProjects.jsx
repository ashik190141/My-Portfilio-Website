import React from "react";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddProjects = () => {
  const [technologies, setTechnologies] = useState([""]); // State for technologies input fields
  const [features, setFeatures] = useState([""]); // State for features input fields
  const [image, setImage] = useState([]); // State for uploaded pictures
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=d0a7e1f328b83330a0ea0321f368cb7f`;

  // Function to add more technologies input fields
  const addTechnology = () => {
    setTechnologies([...technologies, ""]);
  };

  // Function to handle changes in technologies input fields
  const handleTechnologyChange = (index, value) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies[index] = value;
    setTechnologies(updatedTechnologies);
  };

  // Function to add more features input fields
  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  // Function to handle changes in features input fields
  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };

  // Function to handle picture upload
  const handlePictureUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const project_name = form.projectName.value;
    const live_site = form.liveSite.value;
    const client_site = form.githubClient.value;
    const server_site = form.serverSite.value;

    const formData = new FormData();
    formData.append("image", image);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgResponse) => {
        const projectData = {
          project_name,
          technologies,
          features,
          live_site,
          client_site,
          server_site,
          card_img: imgResponse.data.display_url,
        };
        try {
          const response = await fetch(
            "https://portfolio-server-six-gamma.vercel.app/create-projects",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(projectData),
            }
          );
          const responseData = await response.json();
          console.log("Response from backend:", responseData);
          if (response.result) {
            Swal.fire({
              title: "Successfully Generate Your Projects",
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/");
              }
            });
          } else {
            Swal.fire({
              title: "Failed",
              confirmButtonText: "Ok",
            });
          }
        } catch (error) {
          console.error("Error:", error);
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Project Details</h1>

      {/* Project Name */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="projectName" className="block font-semibold mb-1">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex items-center justify-between pb-3">
            <div htmlFor="technologies" className="block font-semibold mb-1">
              Technologies
            </div>
            <div className="border border-black px-3 py-1 flex gap-2">
              <button type="button" onClick={addTechnology} className="text-sm">
                Add Technologies
              </button>
              <div>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </div>
            </div>
          </div>
          {technologies.map((technology, index) => (
            <input
              key={index}
              type="text"
              value={technology}
              onChange={(e) => handleTechnologyChange(index, e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="flex items-center justify-between pb-3">
            <div htmlFor="features" className="block font-semibold mb-1">
              Features
            </div>
            <div className="border border-black px-3 py-1 flex gap-2">
              <button type="button" onClick={addFeature} className="text-sm">
                Add Features
              </button>
              <div>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </div>
            </div>
          </div>
          {features.map((feature, index) => (
            <input
              key={index}
              type="text"
              value={feature}
              onChange={(e) => handleFeatureChange(index, e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <div className="mb-4">
          <label htmlFor="pictures" className="block font-semibold mb-1">
            Pictures
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handlePictureUpload}
            className="mb-2"
          />
        </div>

        <div class="mb-4">
          <label for="live-site" class="block font-semibold mb-1">
            Live Site
          </label>
          <input
            type="url"
            id="liveSite"
            name="liveSite"
            class="w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
          />
          <label for="github-client" class="block font-semibold mb-1">
            GitHub Client
          </label>
          <input
            type="url"
            id="githubClient"
            name="githubClient"
            class="w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
          />
          <label for="server-site" class="block font-semibold mb-1">
            Server Site
          </label>
          <input
            type="url"
            id="serverSite"
            name="serverSite"
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProjects;

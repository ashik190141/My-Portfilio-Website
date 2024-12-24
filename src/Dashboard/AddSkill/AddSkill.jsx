import React, { useState } from 'react';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LoadingPage from '../../Layout/LoadingPage';
import { useNavigate } from 'react-router-dom';
import { createSkill } from '../../utils/CreateSkill';
import Swal from 'sweetalert2';

const AddSkill = () => {
    const [image, setImage] = useState(null);
    const [show, setShow] = useState(false);
    const [showName1, setShowName1] = useState({});
    const navigate = useNavigate()
     const imageHostingUrl = `https://api.imgbb.com/1/upload?key=d0a7e1f328b83330a0ea0321f368cb7f`;

    const handleSkill = (e) => {
        setShow(true);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const formData = new FormData();
        formData.append("image", image);
        fetch(imageHostingUrl, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then(async (imgResponse) => {
            if (imgResponse.success) {
              const skillInformation = {
                image: imgResponse.data.display_url,
                name:name
              };
              try {
                const res = await createSkill(skillInformation);
                // console.log(res);
                if (res.result) {
                  Swal.fire({
                    title: "Successfully Generate Your Skill",
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
              } catch (err) {
                throw new Error(err.message);
              }
            }
        });
    }
    return (
      <div className="py-5">
        <div className="flex items-center gap-3 py-5">
          <div className="font-bold py-2">ADD Skill </div>
        </div>
        <form onSubmit={handleSkill}>
          <div className="grid grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Skill Name"
                className="w-1/2 truncate rounded-md hover:shadow-[0px_0px_4px_0.5px] border-[1px] border-black px-4 py-2 text-sm  text-black shadow-md"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label htmlFor="photo" className="flex w-1/2 max-w-[600px]">
                <p className="w-full truncate rounded-md hover:shadow-[0px_0px_4px_0.5px] border-[1px] border-black px-4 py-2 text-sm  text-black shadow-md">
                  {showName1.name ? showName1.name : "CHOOSE FILE"}
                </p>
              </label>
              <input
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  if (e.target.files && e.target.files[0]) {
                    const imageFile = e.target.files[0];
                    setShowName1(imageFile);
                  }
                }}
                className="hidden"
                type="file"
                name="photo"
                id="photo"
              />
            </div>
          </div>
          <div className="form-control w-1/6 pt-10 flex justify-end">
            {!show ? (
              <input
                type="submit"
                value="Submit"
                className="btn btn-warning input input-bordered"
              />
            ) : (
              <div>
                <LoadingPage></LoadingPage>
              </div>
            )}
          </div>
        </form>
      </div>
    );
};

export default AddSkill;
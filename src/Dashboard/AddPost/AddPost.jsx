import { useState } from "react";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CreateBlog } from '../../utils/CreateBlog';
import Swal from "sweetalert2";
import LoadingPage from '../../Layout/LoadingPage';
const AddPost = () => {
    const editor = useRef(null);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=d0a7e1f328b83330a0ea0321f368cb7f`;
    const [showName1, setShowName1] = useState({});

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const [image, setImage] = useState(null);
  const fieldChanged = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentFieldChanged = (data) => {
    setPost({ ...post, content: data });
  };
    
    const handleBlog = async (e) => {
        setShow(true)
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        const form = e.target;
        const name = form.title.value;
      fetch(imageHostingUrl, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (imgResponse) => {
            if (imgResponse.success) {
                const blogInfo = {
                  image: imgResponse.data.display_url,
                  name: name,
                  content: post.content,
                };
                console.log(blogInfo);
                const res = await CreateBlog(blogInfo);
                if (res.result) {
                    setShow(false)
                    Swal.fire({
                      title: "Successfully Generate Your Blog",
                      confirmButtonText: "Ok",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate("/dashboard");
                      }
                    });
                }
            }
        });
    };

  return (
    <div className="wrapper">
      <div className="bg-white rounded-lg shadow-sm border-0 mt-2">
        <div className="p-4">
          {/* {JSON.stringify(post)} */}
          <h3 className="text-lg font-bold mb-4">
            What's going on in your mind?
          </h3>
          <form onSubmit={handleBlog}>
            <div className="mb-3">
              <label htmlFor="title" className="block mb-1">
                Blog title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter here"
                className="w-full border rounded-lg p-2"
                name="title"
                onChange={fieldChanged}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="content" className="block mb-1">
                Blog Content
              </label>
              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={(newContent) => contentFieldChanged(newContent)}
              />
            </div>

            {/* file field  */}

            <div className="mb-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blog Banner Image</span>
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

            <div className="text-center">
              {!show ? (
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2 hover:bg-blue-600"
                >
                  Create Post
                </button>
              ) : (
                <LoadingPage></LoadingPage>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

export const CreateBlog = async (data) => {
  const res = await fetch(
    `https://portfolio-server-six-gamma.vercel.app/create-blog`,
    {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const userInfo = await res.json();
  return userInfo;
};

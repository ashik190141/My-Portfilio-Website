export const CreateUser = async (data) => {
  const res = await fetch(`http://localhost:5000/create-user`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const userInfo = await res.json();
  return userInfo;
};

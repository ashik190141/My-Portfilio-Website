export const createSkill = async (data) => {
  const res = await fetch(`http://localhost:5000/create-skill`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const userInfo = await res.json();
  return userInfo;
};

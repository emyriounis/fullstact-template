const logoutUser = async () => {
  const response = await fetch(`${process.env.REACT_APP_BE_URL}/users/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(
      JSON.stringify({ text: await response.text(), status: response.status })
    );
  }
};

export default logoutUser;

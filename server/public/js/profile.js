const editUser = async (event) => {
  event.preventDefault();
  const userInfo = getAllFormFields();
  const isValid = checkIfValid(userInfo);
  if (isValid) {
    const response = await fetch(`/api/user/${id}`, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  } {
    alert(`Please check out invalid/empty fields: ${invalidFields.join(",")}`);
    invalidFields = [];
  }
}

const getAllFormFields = () => {
  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  return { name, email, password }
}



document
  .getElementById("edit-btn")
  .addEventListener("submit", editUser);

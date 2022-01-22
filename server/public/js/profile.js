const editUser = async (event) => {
  event.preventDefault();
  const userInfo = getAllFormFields();
  const isValid = checkIfValid(userInfo);
  if (isValid) {
    const response = await fetch(`/api/user/${userInfo.id}`, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const getAllFormFields = () => {
  const name = document.querySelector("#user-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const id = document.querySelector("#edit-btn").dataset.id;
  return { name, email, id };
};
const invalidFields = [];
const checkIfValid = (addressInfo) => {
  for (fieldName in addressInfo) {
    if (addressInfo[fieldName] == "" || !addressInfo[fieldName]) {
      invalidFields.push(fieldName);
    }
  }
  if (invalidFields.length > 0) {
    return false;
  }
  return true;
};

const deleteAddress = async (event) => {
  event.preventDefault();
  const id = event.currentTarget.getAttribute("data-id");
  console.log(id);
  if (id === null) {
    alert("null id ");
    return;
  }
  // Send a DELETE request to the API endpoint
  const response = await fetch(`/api/address/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/profile");
  } else {
    alert(response.statusText);
  }
};

const getShipmentStatus = () => {};

document.getElementById("edit-btn").addEventListener("click", editUser);

const deleteEl = document.querySelector(".address-delete");
if (deleteEl) {
  deleteEl.addEventListener("click", deleteAddress);
}

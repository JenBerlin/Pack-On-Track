
const createNewAdress = async (event) => {
    event.preventDefault();
    const addressInfo = getAllFormFields(id);
    const isValid = checkIfValid(addressInfo);
    if (isValid) {
        const response = await fetch(`/api/address`, {
            method: "POST",
            body: JSON.stringify(addressInfo),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert(response.statusText);
        }
    }
}

const editAddress = async (event) => {
    event.preventDefault();
    const addressInfo = getAllFormFields();
    const isValid = checkIfValid(addressInfo);
    if (isValid) {
        const response = await fetch(`/api/address/${id}`, {
            method: "PUT",
            body: JSON.stringify(addressInfo),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert(response.statusText);
        }
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
    .addEventListener("submit", editAddress);

document
    .getElementById("create-btn")
    .addEventListener("submit", createNewAdress);
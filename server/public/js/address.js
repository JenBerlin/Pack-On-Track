
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
    const first_name = document.querySelector("#address-firstname").value.trim();
    const last_name = document.querySelector("#address-lastname").value.trim();
    const street = document.querySelector("#street").value.trim();
    const street_number = document.querySelector("#streetnumber").value.trim();
    const company = document.querySelector("#company").value.trim();
    const additional_line = document.querySelector("#additional-line").value.trim();
    const post_number = document.querySelector("#post-number").value.trim();
    const city = document.querySelector("#city").value.trim();
    const country = document.querySelector("#country").value.trim();
    const library_keyword = document.querySelector("#library-keyword").value.trim();
    return {
        first_name,
        last_name,
        street,
        street_number,
        company,
        additional_line,
        post_number,
        city,
        country,
        library_keyword
    }
}



document
    .getElementById("edit-btn")
    .addEventListener("submit", editAddress);

document
    .getElementById("create-btn")
    .addEventListener("submit", createNewAdress);
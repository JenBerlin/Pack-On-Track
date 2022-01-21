
var invalidFields = [];
const createNewAdress = async (event) => {
    console.log("button pressed!")
    event.preventDefault();
    const addressInfo = getAllFormFields();
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
    } else {
        alert(`Please check out invalid/empty fields: ${invalidFields.join(",")}`);
        invalidFields = [];
    }
}

const editAddress = async (event) => {
    event.preventDefault();
    const id = getIdFromURL()
    const addressInfo = getAllFormFields();
    addressInfo.id = id;
    const isValid = checkIfValid(addressInfo);
    console.log(isValid)
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
    } else {
        alert(`Please check out invalid/empty fields: ${invalidFields.join(",")}`);
        invalidFields = [];
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

const getIdFromURL = () => {
    var baseUrl = (window.location).href; // You can also use document.URL
    var id = baseUrl.split("address/")[1];
    console.log(id);
    return id
}

const checkIfValid = (addressInfo) => {
    for (fieldName in addressInfo) {
        if (addressInfo[fieldName] == "" || !addressInfo[fieldName]) {
            invalidFields.push(fieldName);
        }
    }
    if (invalidFields.length > 0) {
        return false
    }
    return true
}



const editBtn = document.querySelector("#edit-btn")

if (editBtn) {
    console.log("Edit")
    editBtn.addEventListener("click", editAddress);
}

const createBtn = document.querySelector("#create-btn")

if (createBtn) {
    console.log("Create")
    createBtn.addEventListener("click", createNewAdress);
}
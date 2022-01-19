
const createNewShipmnet = async (event) => {
    event.preventDefault();
    const shipmentInfo = getAllFormFields();
    const isValid = checkIfValid(shipmentInfo);
    if (isValid) {
        const response = await fetch(`/api/shipment`, {
            method: "POST",
            body: JSON.stringify(shipmentInfo),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
}

const editShipment = async (event) => {
    event.preventDefault();
    const shipmentInfo = getAllFormFields();
    const isValid = checkIfValid(shipmentInfo);
    if (isValid) {
        const response = await fetch(`/api/shipment/${idS}`, {
            method: "PUT",
            body: JSON.stringify(shipmentInfo),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
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
    .addEventListener("submit", editShipment);

document
    .getElementById("create-btn")
    .addEventListener("submit", createNewShipmnet);
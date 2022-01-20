
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
    const tracking_number = document.querySelector("#tracking-number").value.trim();
    const email = document.querySelector("#courier-choice").value.trim();
    const order_from = document.querySelector("#order-from").value.trim();
    const order_made = document.querySelector("#order-made").value.trim();
    const description = document.querySelector("#description").value.trim();
    const library_keyword = document.querySelector("#library-keyword").value.trim();
    return {
        tracking_number,
        order_from,
        order_made,
        description,
        library_keyword
    }
}



document
    .getElementById("edit-btn")
    .addEventListener("submit", editShipment);

document
    .getElementById("create-btn")
    .addEventListener("submit", createNewShipmnet);
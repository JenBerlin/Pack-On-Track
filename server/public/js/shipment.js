
var invalidFields = [];
const createNewShipmnet = async (event) => {
    event.preventDefault();
    const shipmentInfo = getAllFormFields();
    console.log(shipmentInfo)
    // const isValid = checkIfValid(shipmentInfo);
    const isValid = true;
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
    } else {
        alert(`Please check out invalid/empty fields: ${invalidFields.join(",")}`);
        invalidFields = [];
    }
}

const editShipment = async (event) => {
    event.preventDefault();
    const id = getIdFromURL()
    const shipmentInfo = getAllFormFields();
    shipmentInfo.id = id;
    console.log(shipmentInfo);
    // const isValid = checkIfValid(shipmentInfo);
    const isValid = true;
    if (isValid) {
        const response = await fetch(`/api/shipment/${id}`, {
            method: "PUT",
            body: JSON.stringify(shipmentInfo),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    } else {
        alert(`Please check out invalid/empty fields: ${invalidFields.join(",")}`);
        invalidFields = [];
    }
}


const getAllFormFields = () => {
    const tracking_number = document.querySelector("#tracking-number").value.trim();
    const courier_id = document.querySelector("#courier-choice").value.trim();
    const expected_arrival = document.querySelector("#date-arrival").value.trim();
    const order_number = document.querySelector("#order-number").value.trim();
    const order_from = document.querySelector("#order-from").value.trim();
    const order_made = document.querySelector("#order-made").value.trim();
    const description = document.querySelector("#description").value.trim();
    const address_id = document.querySelector("#address-id").value.trim();
    return {
        tracking_number,
        courier_id,
        order_number,
        order_from,
        order_made,
        description,
        address_id,
        expected_arrival
    }
}

const getIdFromURL = () => {
    var baseUrl = (window.location).href; // You can also use document.URL
    var id = baseUrl.split("shipment/")[1].replace("#", "");
    console.log(id);
    return id
}


const editBtn = document.querySelector("#edit-btn")

if (editBtn) {
    console.log("Edit")
    editBtn.addEventListener("click", editShipment);
}

const createBtn = document.querySelector("#create-btn")

if (createBtn) {
    console.log("Create")
    createBtn.addEventListener("click", createNewShipmnet);
}
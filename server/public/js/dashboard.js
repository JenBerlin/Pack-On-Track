const deleteShipment = async (event) => {
    event.preventDefault();
    const id =  event.target.getAttribute("data-sortorder");
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/shipment/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }

};

document
    .querySelector(".signup-form")
    .addEventListener("click", deleteShipment);


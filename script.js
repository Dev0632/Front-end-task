function selectUnit(unitNumber, price) {
    // Hide all dropdowns
    document.querySelectorAll('.dropdowns').forEach(dropdown => {
        dropdown.style.display = 'none';
    });

    // Show the selected unit's dropdowns
    document.getElementById(`dropdowns-${unitNumber}`).style.display = 'block';

    // Update total price
    document.getElementById('total-price').innerText = `Total : $${price}.00 USD`;
}

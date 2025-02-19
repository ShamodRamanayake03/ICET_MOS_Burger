document.addEventListener('DOMContentLoaded', () => {
    const orderTableBody = document.getElementById('orderTableBody');
    // Retrieve orders from localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Display all orders
    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${order.customerName}</td>
            <td>${order.contactNo}</td>
            <td>
                <ul>
                    ${order.items.map(item => `<li>${item.name} (x${item.quantity}) - Rs. ${(item.price * item.quantity).toFixed(2)}</li>`).join('')}
                </ul>
            </td>
            <td>Rs. ${order.discount.toFixed(2)}</td>
            <td>Rs. ${order.totalPrice.toFixed(2)}</td>
        `;
        orderTableBody.appendChild(row);
    });
});

function saveOrdersToLocalStorage(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function addOrder(newOrder) {
    // Retrieve existing orders from localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    // Add the new order to the array
    orders.push(newOrder);
    // Save the updated orders array to localStorage
    saveOrdersToLocalStorage(orders);
}

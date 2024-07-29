let items = [
    { itemno: 'B1001', itemtype: 'Burger', name: 'Classic Burger (Large)', price: '750.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1002', itemtype: 'Burger', name: 'Classic Burger (Regular)', price: '1500.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1003', itemtype: 'Burger', name: 'Turkey Burger', price: '1600.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1004', itemtype: 'Burger', name: 'Chicken Burger (Large)', price: '1400.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1005', itemtype: 'Burger', name: 'Chicken Burger (Regular)', price: '800.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1006', itemtype: 'Burger', name: 'Cheese Burger (Large)', price: '1000.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1007', itemtype: 'Burger', name: 'Cheese Burger (Regular)', price: '600.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1008', itemtype: 'Burger', name: 'Bacon Burger', price: '650.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1009', itemtype: 'Burger', name: 'Shawarma Burger', price: '800.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1010', itemtype: 'Burger', name: 'Olive Burger', price: '1800.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1012', itemtype: 'Burger', name: 'Double-Cheese Burger', price: '1250.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1013', itemtype: 'Burger', name: 'Crispy Chicken Burger (Regular)', price: '1200.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1014', itemtype: 'Burger', name: 'Crispy Chicken Burger (Large)', price: '1600.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1015', itemtype: 'Burger', name: 'Paneer Burger', price: '900.00', imageUrl: 'Images/menuBurger.jpg' },
    { itemno: 'B1016', itemtype: 'Submarine', name: 'Crispy Chicken Submarine (Large)', price: '2000.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1017', itemtype: 'Submarine', name: 'Crispy Chicken Submarine (Regular)', price: '1500.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1018', itemtype: 'Submarine', name: 'Chicken Submarine (Large)', price: '1800.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1019', itemtype: 'Submarine', name: 'Chicken Submarine (Regular)', price: '1400.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1020', itemtype: 'Submarine', name: 'Grinder Submarine', price: '2300.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1021', itemtype: 'Submarine', name: 'Cheese Submarine', price: '2200.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1022', itemtype: 'Submarine', name: 'Double Cheese n Chicken Submarine', price: '1900.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1023', itemtype: 'Submarine', name: 'Special Horgie Submarine', price: '2800.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1024', itemtype: 'Submarine', name: 'MOS Special Submarine', price: '3000.00', imageUrl: 'Images/menuSubmarine.jpeg' },
    { itemno: 'B1025', itemtype: 'Fries', name: 'Steak Fries (Large)', price: '1200.00', imageUrl: 'Images/menuFries.jpg' },
    { itemno: 'B1026', itemtype: 'Fries', name: 'Steak Fries (Medium)', price: '600.00', imageUrl: 'Images/menuFries.jpg' },
    { itemno: 'B1027', itemtype: 'Fries', name: 'French Fries (Large)', price: '800.00', imageUrl: 'Images/menuFries.jpg' },
    { itemno: 'B1028', itemtype: 'Fries', name: 'French Fries (Medium)', price: '650.00', imageUrl: 'Images/menuFries.jpg' },
    { itemno: 'B1029', itemtype: 'Fries', name: 'French Fries (Small)', price: '450.00', imageUrl: 'Images/menuFries.jpg' },
    { itemno: 'B1030', itemtype: 'Fries', name: 'Sweet Potato Fries (Large)', price: '600.00', imageUrl: 'Images/menuFries.jpg' },
    { itemno: 'B1031', itemtype: 'Pasta', name: 'Chicken n Cheese Pasta', price: '1600.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1032', itemtype: 'Pasta', name: 'Chicken Penne Pasta', price: '1700.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1033', itemtype: 'Pasta', name: 'Ground Turkey Pasta Bake', price: '2900.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1034', itemtype: 'Pasta', name: 'Creamy Shrimp Pasta', price: '2000.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1035', itemtype: 'Pasta', name: 'Lemon Butter Pasta', price: '1950.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1036', itemtype: 'Pasta', name: 'Tagliatelle Pasta', price: '2400.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1037', itemtype: 'Pasta', name: 'Baked Ravioli', price: '2000.00', imageUrl: 'Images/menuPasta.jpg' },
    { itemno: 'B1038', itemtype: 'Chicken', name: 'Fried Chicken (Small)', price: '1200.00', imageUrl: 'Images/menuChicken.jpg' },
    { itemno: 'B1039', itemtype: 'Chicken', name: 'Fried Chicken (Regular)', price: '2300.00', imageUrl: 'Images/menuChicken.jpg' },
    { itemno: 'B1040', itemtype: 'Chicken', name: 'Fried Chicken (Large)', price: '3100.00', imageUrl: 'Images/menuChicken.jpg' },
    { itemno: 'B1041', itemtype: 'Chicken', name: 'Hot Wings (Large)', price: '2400.00', imageUrl: 'Images/menuChicken.jpg' },
    { itemno: 'B1042', itemtype: 'Chicken', name: 'Devilled Chicken (Large)', price: '900.00', imageUrl: 'Images/menuChicken.jpg' },
    { itemno: 'B1043', itemtype: 'Chicken', name: 'BBQ Chicken (Regular)', price: '2100.00', imageUrl: 'Images/menuChicken.jpg' },
    { itemno: 'B1044', itemtype: 'Beverage', name: 'Pepsi (330ml)', price: '990.00', imageUrl: 'Images/menuBeverage.jpg' },
    { itemno: 'B1045', itemtype: 'Beverage', name: 'Coca-Cola (330ml)', price: '1230.00', imageUrl: 'Images/menuBeverage.jpg' },
    { itemno: 'B1046', itemtype: 'Beverage', name: 'Sprite (330ml)', price: '1500.00', imageUrl: 'Images/menuBeverage.jpg' },
    { itemno: 'B1047', itemtype: 'Beverage', name: 'Mirinda (330ml)', price: '850.00', imageUrl: 'Images/menuBeverage.jpg' }
];


let cart = [];
let orders = []; // Array to store all orders

function renderMenu(items) {
    const menuContent = document.getElementById('menu-content');
    menuContent.innerHTML = '';
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Price: Rs.${item.price}</p>
                <button class="btn btn-primary btn-add-item" onclick="addToCart(${index})">Add Item</button>
            </div>
        `;
        menuContent.appendChild(card);
    });
}

function filterCategory(category) {
    if (category === 'All') {
        renderMenu(items);
    } else {
        renderMenu(items.filter(item => item.itemtype === category));
    }
}

function addToCart(index) {
    const item = items[index];
    const cartItem = cart.find(cartItem => cartItem.index === index);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((cartItem, index) => {
        const cartItemElem = document.createElement('div');
        cartItemElem.classList.add('cart-item');
        cartItemElem.innerHTML = `
            <span>${cartItem.name} - Rs.${cartItem.price}</span>
            <input type="number" value="${cartItem.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            <span>Rs.${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
            <button class="btn btn-danger btn-remove" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItemElem);
        totalPrice += cartItem.price * cartItem.quantity;
    });
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

function updateQuantity(index, quantity) {
    if (quantity < 1) quantity = 1;
    cart[index].quantity = Number(quantity);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function calculateTotal() {
    const discount = Number(document.getElementById('discount').value) || 0;
    let totalPrice = cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
    return totalPrice - discount;
}

function showTotal() {
    const total = calculateTotal();
    document.getElementById('totalPrice').textContent = `${total.toFixed(2)}`;
}

function placeOrder() {
    const customerName = document.getElementById('customerName').value;
    const contactNo = document.getElementById('contactNo').value;
    const discount = Number(document.getElementById('discount').value) || 0;
    const totalPrice = calculateTotal();

    if (!customerName || !contactNo) {
        alert('Please enter customer information');
        return;
    }

    const order = {
        customerName,
        contactNo,
        items: cart.map(cartItem => ({
            name: cartItem.name,
            price: cartItem.price,
            quantity: cartItem.quantity
        })),
        discount,
        totalPrice
    };

    orders.push(order); // Add order to the orders array
    localStorage.setItem('orders', JSON.stringify(orders)); // Store orders in localStorage

    console.log('Order placed:', order);
    alert('Order placed successfully!');
    cart = [];
    document.getElementById('customerName').value = '';
    document.getElementById('contactNo').value = '';
    document.getElementById('discount').value = '';
    renderCart();
}

document.getElementById('calculateTotal').addEventListener('click', showTotal);
document.getElementById('placeOrder').addEventListener('click', placeOrder);

window.onload = function() {
    filterCategory('All');
};

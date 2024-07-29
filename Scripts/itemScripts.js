// Array to store item data
let items = [];

// Variable to track the index of the item being edited
let editingIndex = -1;

// Function to handle form submission
document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const itemno = document.getElementById('itemno').value.trim();
    const itemtype = document.getElementById('itemtype').value.trim();
    const name = document.getElementById('name').value.trim();
    const price = document.getElementById('price').value.trim();
    const image = document.getElementById('image').files[0];

    // Basic validation
    if (itemno === '' || itemtype === '' || name === '' || price === '' || !image) {
        alert('Please fill in all fields and select an image');
        return;
    }

    // Convert the image to a base64 string
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function() {
        const imageUrl = reader.result;
        
        if (editingIndex === -1) {
            addItem({ itemno, itemtype, name, price, imageUrl });
        } else {
            updateItem(editingIndex, { itemno, itemtype, name, price, imageUrl });
            document.querySelector('#itemForm button').innerText = 'Add Item';
            editingIndex = -1;
        }

        // Reset the form
        document.getElementById('itemForm').reset();
    };
});

// Function to add an item to the array and table
function addItem(item) {
    items.push(item);
    addItemToTable(item, items.length - 1);
}

// Function to update an item in the array and table
function updateItem(index, updatedItem) {
    items[index] = updatedItem;
    updateItemInTable(index, updatedItem);
}

// Function to add an item to the table
function addItemToTable(item, index) {
    const tableBody = document.querySelector('#itemTable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${item.itemno}</td>
        <td>${item.itemtype}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><img src="${item.imageUrl}" alt="${item.name}" class="item-image"></td>
        <td class="actions">
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
}

// Function to update an item in the table
function updateItemInTable(index, item) {
    const tableBody = document.querySelector('#itemTable tbody');
    const row = tableBody.rows[index];

    row.cells[0].innerText = item.itemno;
    row.cells[1].innerText = item.itemtype;
    row.cells[2].innerText = item.name;
    row.cells[3].innerText = item.price;
    row.cells[4].innerHTML = `<img src="${item.imageUrl}" alt="${item.name}" class="item-image">`;
}

// Function to delete an item from the array and table
function deleteItem(index) {
    items.splice(index, 1);
    refreshTable();
}

// Function to edit an item's information
function editItem(index) {
    const item = items[index];
    document.getElementById('itemno').value = item.itemno;
    document.getElementById('itemtype').value = item.itemtype;
    document.getElementById('name').value = item.name;
    document.getElementById('price').value = item.price;

    // We don't prefill the file input for security reasons
    document.querySelector('#itemForm button').innerText = 'Update Item';
    editingIndex = index;
}

// Function to search for an item
function searchItem() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tableRows = document.querySelectorAll('#itemTable tbody tr');

    tableRows.forEach((row, index) => {
        const name = row.cells[2].innerText.toLowerCase();
        if (name.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Function to refresh the table (re-render all rows)
function refreshTable() {
    const tableBody = document.querySelector('#itemTable tbody');
    tableBody.innerHTML = '';
    items.forEach((item, index) => {
        addItemToTable(item, index);
    });
}

// Function to load initial items
function loadInitialItems() {
    const initialItems = [
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

    initialItems.forEach(item => addItem(item))
    refreshTable();
}

// Load initial items when the page loads
window.onload = loadInitialItems;


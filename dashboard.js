document.addEventListener("DOMContentLoaded", function () {
    initializeDashboard();
    setupEventListeners();
    loadRecentOrders();
    loadLowStockItems();
});

// 1. Initialize Dashboard
function initializeDashboard() {
    console.log("Dashboard initialized.");
    document.getElementById("current-user").textContent = "Pharmacy Admin";
}

// 2. Setup Event Listeners
function setupEventListeners() {
    document.getElementById("logout-btn").addEventListener("click", function () {
        alert("Logging out...");
    });
}

// 3. Load Recent Orders
function loadRecentOrders() {
    const orders = [
        { id: "ORD-1234", patient: "John Doe", date: "Feb 25, 2025", status: "Completed", total: "$50.00" },
        { id: "ORD-1235", patient: "Jane Smith", date: "Feb 24, 2025", status: "Pending", total: "$30.00" }
    ];
    populateTable("recent-orders-table", orders);
}

// 4. Load Low Stock Items
function loadLowStockItems() {
    const lowStockItems = [
        { name: "Paracetamol", sku: "MED-001", category: "Pain Reliever", quantity: 5, status: "Warning" },
        { name: "Amoxicillin", sku: "MED-002", category: "Antibiotics", quantity: 2, status: "Critical" }
    ];
    populateTable("low-stock-table", lowStockItems);
}

// 5. Utility Function to Populate Tables
function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId).querySelector("tbody");
    tableBody.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement("tr");
        Object.values(item).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

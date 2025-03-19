// Authentication functions
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication - in a real app, this would use secure authentication
    if (username && password) {
        // Hide login container and show dashboard
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('dashboard-container').classList.remove('hidden');
    } else {
        alert('Please enter both username and password');
    }
}

function handleLogout() {
    // Hide dashboard and show login screen
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
    
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('remember-me').checked = false;
}

// User profile dropdown
function toggleUserDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('user-dropdown');
    const userProfile = document.querySelector('.user-profile');
    
    if (!userProfile.contains(event.target) && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }
});

// Navigation tabs
function initTabNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and contents
            navLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked link and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Inventory tab functions
function initInventoryTabs() {
    const inventoryTabButtons = document.querySelectorAll('[data-inventory-tab]');
    
    inventoryTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            inventoryTabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter inventory based on selected tab
            const filter = this.getAttribute('data-inventory-tab');
            filterInventory(filter);
        });
    });
}

function filterInventory(filter) {
    const inventoryTable = document.getElementById('inventoryTable');
    const rows = inventoryTable.querySelectorAll('tr');
    
    rows.forEach(row => {
        const statusCell = row.querySelector('td:nth-child(7)');
        if (!statusCell) return;
        
        const status = statusCell.textContent.trim().toLowerCase();
        
        if (filter === 'all') {
            row.style.display = '';
        } else if (filter === 'low-stock' && status.includes('low stock')) {
            row.style.display = '';
        } else if (filter === 'expiring-soon' && status.includes('expiring soon')) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Search functionality
function initSearchFunctionality() {
    const searchInput = document.getElementById('inventorySearch');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const inventoryTable = document.getElementById('inventoryTable');
        const rows = inventoryTable.querySelectorAll('tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Modal functions
function openAddItemModal() {
    // Implementation for opening add item modal
    alert('Add Item modal would open here');
    // In a real implementation, you would create and show a modal for adding new items
}

function openEditItemModal(itemName) {
    // Implementation for opening edit item modal
    alert(`Edit modal for ${itemName} would open here`);
    // In a real implementation, you would create and show a modal for editing the selected item
}

function openOrderModal(itemName) {
    // Implementation for opening order modal
    alert(`Order modal for ${itemName} would open here`);
    // In a real implementation, you would create and show a modal for ordering the selected item
}

// Charts initialization
function initCharts() {
    // Medicine Category Chart
    const categoryCtx = document.getElementById('medicineCategoryChart').getContext('2d');
    const categoryChart = new Chart(categoryCtx, {
        type: 'pie',
        data: {
            labels: ['Pain Relievers', 'First Aid', 'Allergy Medications', 'Vitamins', 'Antiseptics'],
            datasets: [{
                data: [25, 20, 15, 25, 15],
                backgroundColor: [
                    '#4361ee',
                    '#ff9e00',
                    '#e74c3c',
                    '#2ecc71',
                    '#3498db'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    
    // Monthly Inventory Chart
    const inventoryCtx = document.getElementById('monthlyInventoryChart').getContext('2d');
    const inventoryChart = new Chart(inventoryCtx, {
        type: 'line',
        data: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            datasets: [{
                label: 'Inventory Value ($)',
                data: [15000, 17000, 16500, 14000, 18000, 20000],
                borderColor: '#4361ee',
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize all functions when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up login form submission
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Initialize navigation tabs
    initTabNavigation();
    
    // Initialize inventory tabs
    initInventoryTabs();
    
    // Initialize search functionality
    initSearchFunctionality();
    
    // Initialize charts
    initCharts();
    
    // For demo purposes, you might want to skip login in development
    // Uncomment the line below to directly show dashboard
    // document.getElementById('login-container').classList.add('hidden');
    // document.getElementById('dashboard-container').classList.remove('hidden');
});
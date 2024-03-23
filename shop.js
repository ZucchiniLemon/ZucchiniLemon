document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.modal .close');
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const registerBtn = document.getElementById('registerBtn');
    const buyButtons = document.querySelectorAll('.buyBtn');

    let loggedIn = false;
    let registeredUsers = [];

   
    loginBtn.addEventListener('click', function() {
        modal.classList.add('active');
    });

   
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });


    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    });


    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const user = registeredUsers.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful!');
            modal.classList.remove('active');
            loggedIn = true;
            loginBtn.innerText = 'Logout';
        } else {
            alert('Invalid username or password.');
        }
        usernameInput.value = '';
        passwordInput.value = '';
    });

    registerBtn.addEventListener('click', function() {
        const newUsername = prompt('Enter username:');
        const newPassword = prompt('Enter password:');
        if (newUsername && newPassword) {
            registeredUsers.push({ username: newUsername, password: newPassword });
            alert('Registration successful!');
            modal.classList.remove('active'); 
        } else {
            alert('Registration canceled. Username and password are required.');
        }
    });

    loginBtn.addEventListener('click', function() {
        if (loggedIn) {
            loggedIn = false;
            loginBtn.innerText = 'Login / Register';
            alert('Logged out successfully!');
        }
    });

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (loggedIn) {
                alert('You bought a candy!');
            } else {
                alert('Please login or register to buy candy.');
            }
        });
    });
});
buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (RegisteredIn) {
            alert('You bought a candy!');
        } else {
            alert('Please login or register to buy candy.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('aboutBtn');

    aboutBtn.addEventListener('click', function() {
        alert('This is some information about me.');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('aboutBtn');

    aboutBtn.addEventListener('click', function() {
        window.location.href = 'about_me.html'; 
    });
});
let orders = {}; 

function orderCandy(candyName, price) {
    if (orders[candyName] === undefined) {
        orders[candyName] = { quantity: 1, price: price };
    } else {
        orders[candyName].quantity++;
    }
    updateOrderDisplay();
}

function increaseOrder(candyName) {
    if (orders[candyName] !== undefined) {
        orders[candyName].quantity++;
        updateOrderDisplay();
    }
}

function decreaseOrder(candyName) {
    if (orders[candyName] !== undefined && orders[candyName].quantity > 0) {
        orders[candyName].quantity--;
        updateOrderDisplay();
    }
}

function updateOrderDisplay() {
    for (const candyName in orders) {
        if (orders.hasOwnProperty(candyName)) {
            document.getElementById(candyName + "Order").textContent = orders[candyName].quantity;
        }
    }
}
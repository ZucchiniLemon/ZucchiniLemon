const productImages = ['earphones/1.jpg', 'earphones/2.jpg', 'earphones/3.jpg'];
let currentProductIndex = 0;

function switchProduct() {
  currentProductIndex = (currentProductIndex + 1) % productImages.length;
  document.getElementById('product-img').src = productImages[currentProductIndex];
}
// Mock user data (for demonstration purposes)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

function loginUser() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('Login successful!');
    // Add code here to redirect or perform actions after successful login
  } else {
    alert('Invalid username or password.');
  }
}

function registerUser() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  // Check if username already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    alert('Username already exists. Please choose a different username.');
    return;
  }

  // Add new user to the mock user data (in a real application, this would be stored in a database)
  users.push({ username, password });

  alert('Registration successful!');
  // Add code here to redirect or perform actions after successful registration
}

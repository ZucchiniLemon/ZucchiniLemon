document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const hobby = document.getElementById('hobby').value.trim();

    createUserCard(firstName, lastName, hobby);
    this.reset(); // Reset form fields
});

function createUserCard(firstName, lastName, hobby) {
    const cardContainer = document.getElementById('userCardContainer');

    const card = document.createElement('div');
    card.classList.add('card');
    
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `<h2>${lastName} ${firstName}</h2>`;
    
    const hobbyInfo = document.createElement('p');
    hobbyInfo.textContent = `Hobby: ${hobby || 'N/A'}`;

    card.appendChild(userInfo);
    card.appendChild(hobbyInfo);

    cardContainer.appendChild(card);}
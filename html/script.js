function generateIdCard() {
    // Get input values
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    
    // Display the ID card
    document.getElementById('displayUsername').textContent = username;
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayPhone').textContent = phone;
    
    // Show the ID card
    document.getElementById('idCard').style.display = 'block';
}
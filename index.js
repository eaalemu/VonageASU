//Vonage UI Space
//JS
// DOM elements
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('input[type="text"]');
const sendButton = document.querySelector('#send-button');

// Event listener for sending a chat message
sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== '') {
        // You can send the message to the server or handle it as needed
        appendMessage('You', message);
        chatInput.value = '';
    }
});

// Function to append a chat message to the chat box
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    
    // Scroll to the bottom to show the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

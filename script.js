// JS - Get the chat input field, send button, and chat messages container
const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');
const chatMessages = document.querySelector('.chat-area');

// Function to send a message
function sendMessage() {
  const messageText = chatInput.value.trim();

  if (messageText !== '') {
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messageText;

    // Append the message element to the chat messages container
    chatMessages.appendChild(messageElement);

    // Clear the input field
    chatInput.value = '';

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Event listeners for sending a message
sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

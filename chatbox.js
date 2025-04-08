const chatInput = document.querySelector('.chatbox-input');
const chatMessages = document.querySelector('.chatbox-messages');

chatInput.addEventListener('keypress', function(event) {
if (event.key === 'Enter' && chatInput.value.trim() !== '') {
const userText = chatInput.value.trim();
addMessage('You', userText);
generateReply(userText);
chatInput.value = '';
chatMessages.scrollTop = chatMessages.scrollHeight;
}
});

function addMessage(sender, text) {
const message = document.createElement('div');
message.textContent = `${sender}: ${text}`;
chatMessages.appendChild(message);
}

function generateReply(userText) {
let reply = "Thank you! We will get back to you shortly.";

if (userText.toLowerCase().includes('appointment')) {
reply = "You can book an appointment through the form under 'Inquiries'!";
} else if (userText.toLowerCase().includes('shop')) {
reply = "Check out our latest wireless plans in the Shop section!";
} else if (userText.toLowerCase().includes('hello')) {
reply = "Hello! How can we assist you today?";
}

setTimeout(() => addMessage('Phonology Bot', reply), 500);
}



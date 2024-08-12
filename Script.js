(function() {
    // Create the chat widget container
    var chatWidget = document.createElement('div');
    chatWidget.style.position = 'fixed';
    chatWidget.style.bottom = '20px';
    chatWidget.style.right = '20px';
    chatWidget.style.width = '300px';
    chatWidget.style.height = '400px';
    chatWidget.style.border = '1px solid #ccc';
    chatWidget.style.borderRadius = '10px';
    chatWidget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    chatWidget.style.overflow = 'hidden';
    chatWidget.style.backgroundColor = '#fff';
    document.body.appendChild(chatWidget);

    // Create the chatbox element
    var chatbox = document.createElement('div');
    chatbox.style.height = 'calc(100% - 50px)';
    chatbox.style.padding = '10px';
    chatbox.style.overflowY = 'auto';
    chatWidget.appendChild(chatbox);

    // Create the input area
    var inputArea = document.createElement('div');
    inputArea.style.position = 'absolute';
    inputArea.style.bottom = '0';
    inputArea.style.width = '100%';
    inputArea.style.display = 'flex';
    inputArea.style.borderTop = '1px solid #ccc';
    chatWidget.appendChild(inputArea);

    // Create the input field
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Type a message...';
    inputField.style.flex = '1';
    inputField.style.padding = '10px';
    inputField.style.border = 'none';
    inputArea.appendChild(inputField);

    // Create the send button
    var sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.style.padding = '10px';
    sendButton.style.border = 'none';
    sendButton.style.backgroundColor = '#007bff';
    sendButton.style.color = '#fff';
    sendButton.style.cursor = 'pointer';
    inputArea.appendChild(sendButton);

    // Display message function
    function displayMessage(message, sender) {
        var messageElement = document.createElement('div');
        messageElement.style.padding = '5px';
        messageElement.style.margin = '5px 0';
        messageElement.style.borderRadius = '5px';
        messageElement.style.backgroundColor = sender === 'bot' ? '#f1f1f1' : '#dcf8c6';
        messageElement.textContent = message;
        messageElement.style.textAlign = sender === 'bot' ? 'left' : 'right';
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Send message function
    function sendMessage() {
        var userMessage = inputField.value;

        if (userMessage.trim() !== '') {
            displayMessage(userMessage, 'user');

            // Send the message to the Flask backend
            fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMessage })
            })
            .then(response => response.json())
            .then(data => {
                displayMessage(data.response, 'bot');
            })
            .catch(error => console.error('Error:', error));

            inputField.value = '';
        }
    }

    // Handle send button click
    sendButton.addEventListener('click', sendMessage);

    // Handle Enter key press
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

})();

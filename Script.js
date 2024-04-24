// Create a function to load the chatbot
function loadChatbot() {
    alert('Chatbot loaded')
}

// Create a function to add the chatbot button
function addChatbotButton() {
    // Create the button element
    var chatbotButton = document.createElement("button");
    chatbotButton.innerText = "Chat with Bot";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "20px";
    chatbotButton.style.right = "20px";
    chatbotButton.style.zIndex = "999"; // Ensure it's above other elements
    chatbotButton.style.padding = "10px 20px";
    chatbotButton.style.backgroundColor = "#007bff";
    chatbotButton.style.color = "#fff";
    chatbotButton.style.border = "none";
    chatbotButton.style.borderRadius = "5px";
    chatbotButton.style.cursor = "pointer";
    chatbotButton.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";

    // Add an event listener to open the chatbot when clicked
    chatbotButton.addEventListener("click", function () {
        loadChatbot();
    });

    // Append the button to the body
    document.body.appendChild(chatbotButton);
}

// Call the function to add the chatbot button
addChatbotButton();

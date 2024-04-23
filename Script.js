var button = document.createElement("button");
button.textContent = "Chat with us";
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.backgroundColor = "#007bff";
button.style.color = "#fff";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";

// Function to open chatbot interface
function openChatbot() {
    // Simulate opening chatbot interface
    alert("Chatbot interface opens here!");
}

// Add event listener to button
button.addEventListener("click", openChatbot);

// Append button to the body of the document
document.body.appendChild(button);

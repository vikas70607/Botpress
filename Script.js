// Create a function to load the chatbot
function loadChatbot() {
  // Create the chatbot iframe
  var chatbotIframe = document.createElement("iframe");
  // chatbotIframe.src = "https://your-chatbot-url.com"; // Replace with your chatbot URL
  chatbotIframe.width = "350";
  chatbotIframe.height = "500";
  chatbotIframe.style.border = "none";
  chatbotIframe.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
  chatbotIframe.style.position = "fixed";
  chatbotIframe.style.bottom = "20px";
  chatbotIframe.style.right = "20px";
  chatbotIframe.style.zIndex = "1000"; // Ensure it's above other elements

  // Append the iframe to the body
  document.body.appendChild(chatbotIframe);

  setTimeout(function() {
    chatbotIframe.src = "https://your-chatbot-url.com"; // Replace with your chatbot URL
  }, 100);
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
  chatbotButton.addEventListener("click", function() {
    loadChatbot();
  });

  // Append the button to the body
  document.body.appendChild(chatbotButton);
}

// Call the function to add the chatbot button
addChatbotButton();

// Create a function to load the chatbot
function loadChatbot() {
    // Create a container for the chatbot
    var chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot-container";
    chatbotContainer.style.position = "fixed";
    chatbotContainer.style.bottom = "20px";
    chatbotContainer.style.right = "20px";
    chatbotContainer.style.zIndex = "1000"; // Ensure it's above other elements
  
    // Create the chatbot iframe
    var chatbotIframe = document.createElement("iframe");
    chatbotIframe.src = "https://your-chatbot-url.com"; // Replace with your chatbot URL
    chatbotIframe.width = "350";
    chatbotIframe.height = "500";
    chatbotIframe.style.border = "none";
    chatbotIframe.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
  
    // Append the iframe to the container
    chatbotContainer.appendChild(chatbotIframe);
  
    // Append the container to the body
    document.body.appendChild(chatbotContainer);
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

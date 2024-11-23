// script.js
document.addEventListener("DOMContentLoaded", () => {
    const preloadedData = {
       "What is TahirGPT": "TahirGPT is an AI chatbot developed by Tahir Naseer.",
       "Who is Tahir Naseer": "Tahir Naseer is a passionate software engineer and cybersecurity professional based in India. He actively works on several coding projects and has showcased his work on GitHub. His repositories include projects like a Tic-Tac-Toe game, Scientific Calculator,Password Generator,Tube Light, a Snake Game & Owner of TahirGPT AI Chatbot and engaging in learning activities related to coding and problem-solving, where he implements interactive features using HTML, CSS, and JavaScript, C, C++, Python, C#, Java and Git.He is currently enhancing his skills in Data Structures and Algorithms with C, as well as object-oriented programming using C++",
        };
  
    const messagesContainer = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const addQAButton = document.getElementById("add-qa-btn");
    const modal = document.getElementById("add-question-modal");
    const newQuestionInput = document.getElementById("new-question");
    const newAnswerInput = document.getElementById("new-answer");
    const saveButton = document.getElementById("save-btn");
    const cancelButton = document.getElementById("cancel-btn");
  
    const appendMessage = (text, sender, addActions = false) => {
      const message = document.createElement("div");
      message.classList.add("message", sender);
  
      const textContent = document.createElement("p");
      textContent.textContent = text;
  
      message.appendChild(textContent);
  
      if (addActions && sender === "bot") {
        const actions = document.createElement("div");
        actions.classList.add("actions");
  
        // Add Copy Button
        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy";
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(text).then(() => alert("Copied to clipboard!"));
        });
        actions.appendChild(copyButton);
  
        // Add Share Button
        const shareButton = document.createElement("button");
        shareButton.textContent = "Share";
        shareButton.addEventListener("click", () => {
          alert(`Sharing: "${text}"`); // Add custom sharing logic here.
        });
        actions.appendChild(shareButton);
  
        // Add Read Aloud Button
        const readButton = document.createElement("button");
        readButton.textContent = "Read Aloud";
        readButton.addEventListener("click", () => {
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
        });
        actions.appendChild(readButton);
  
        message.appendChild(actions);
      }
  
      messagesContainer.appendChild(message);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };
  
    const handleSend = () => {
      const userQuestion = userInput.value.trim();
      if (!userQuestion) return;
  
      appendMessage(userQuestion, "user");
      userInput.value = "";
  
      const response = preloadedData[userQuestion] || "Sorry, I don't have the answer to that. You can add it!";
      appendMessage(response, "bot", true);
    };
  
    sendButton.addEventListener("click", handleSend);
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSend();
    });
  
    addQAButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    saveButton.addEventListener("click", () => {
      const newQuestion = newQuestionInput.value.trim();
      const newAnswer = newAnswerInput.value.trim();
  
      if (newQuestion && newAnswer) {
        preloadedData[newQuestion] = newAnswer;
        appendMessage("New Q&A added successfully!", "bot");
        modal.style.display = "none";
        newQuestionInput.value = "";
        newAnswerInput.value = "";
      }
    });
  
    cancelButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
  

# TahirGPT - Chatbot 

TahirGPT is a simple chatbot web Application that allows users to interact with a bot, ask questions, and get preloaded answers. The chatbot also includes features such as adding new Q&A,

## Features

- **Chatbot Interface**: Ask questions and get instant responses.
- **Add New Q&A**: Admin can add custom questions and answers through the modal.
- **Clear Chat**: Clear the entire chat history with a button.
- **Clear Input**: Clear the current text input field with a button.
- **Actions for Bot Responses**:
  - **Copy**: Copy the bot's answer to the clipboard.
  - **Share**: Share the bot's answer (a placeholder function for sharing).
  - **Read Aloud**: Listen to the bot's answer using text-to-speech.

## Technologies Used

- **HTML5**: Structure of the chatbot interface.
- **CSS3**: Styling of the interface with a clean black-and-white theme.
- **JavaScript**: Functionality for chat interaction, adding Q&A, and managing the chat.
- **SpeechSynthesis API**: For the "Read Aloud" functionality (browser text-to-speech).


## Features Overview with Images

### 1. Empty Chat Interface
When the chatbot starts, the interface is clean and shows no messages. Users can type their questions or add new Q&A pairs.
![Empty Chat Interface]()

---

### 2. User Asks a Question
A user types a question in the input field and clicks "Send." The message appears on the right side of the chat window.
![User Question]()

---

### 3. Bot Responds with Preloaded Answer
The chatbot responds with a predefined answer. Actions like "Copy," "Share," and "Read Aloud" appear below the bot's response.
![Bot Response]()

---

### 4. Adding a New Q&A
The admin clicks "Add Q&A" to open a modal where new questions and answers can be added. Upon saving, the new Q&A is added to the chatbot's memory.
![Add Q&A Modal]()

---

### 5. User Adds a New Question and Gets a Response
After adding a new Q&A, the user types the newly added question, and the chatbot responds with the custom answer.
![Custom Question and Answer]()

---


## Live Demo

Check out the live demo at [TahirGPT Live Demo](https://imtahirnaseer.github.io/TahirGPT) 



## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/TahirGPT.git


   TahirGPT/
           ├── index.html        # Main HTML file
           ├── style.css         # Stylesheet for design
           ├── script.js         # JavaScript for interactivity
           └── README.md         # Documentation file


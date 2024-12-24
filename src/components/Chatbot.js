import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setBotTyping(true);

      try {
        const products = await fetchProducts();
        const product = products.find((p) =>
          p.name.toLowerCase().includes(input.toLowerCase())
        );

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: product
                ? `We found a match: ${product.name} for ₹${product.price}.`
                : "Sorry, no product matches your query.",
              sender: 'bot',
            },
          ]);
          setBotTyping(false);
        }, 1000);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { text: 'Error fetching product data.', sender: 'bot' },
        ]);
        setBotTyping(false);
      }
    }
  };

  const resetChat = () => {
    setMessages([]);
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {botTyping && <div className="message bot">Bot is typing...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={resetChat}>Reset Chat</button>
      </div>
    </div>
  );
};

export default Chatbot;

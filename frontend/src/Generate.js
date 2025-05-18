import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Generate.css';

// This component allows user to input a prompt and generate text using a generative model.
const Generate = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const userEmail = localStorage.getItem("userEmail");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      const res = await axios.post('http://localhost:5000/generate', {
        prompt,
        email: userEmail,
      });
      setOutput(res.data.output);
      setPrompt('');
    } catch (err) {
      console.error('Generation failed:', err);
    }
  };

  return (
    <div className="generate-container">
      <div className="generator-panel">
        <h2>Generative Text Model</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          className="prompt-box"
          placeholder="Type your prompt here..."
        />
        <button className="generate-btn" onClick={handleGenerate}>Generate</button>

        {output && (
          <div className="output-section">
            <h4>Output:</h4>
            <div className="output-box"> 
              <ReactMarkdown>{output}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generate;


body {
    background: #000;
    color: #0f0;
    font-family: "Orbitron", sans-serif;
    text-align: center;
    margin-top: 80px;
}

.glow {
    text-shadow: 0 0 8px #0f0, 0 0 15px #0f0, 0 0 40px #0f0;
    animation: pulseGlow 2s infinite alternate;
}

@keyframes pulseGlow {
    0% { text-shadow: 0 0 5px #0f0, 0 0 10px #0f0; }
    100% { text-shadow: 0 0 20px #0f0, 0 0 60px #0f0; }
}

#timer {
    font-size: 48px;
    margin: 30px;
    transition: transform 0.2s ease-in-out;
}

#timer.updated {
    transform: scale(1.08);
}

button {
    padding: 12px 28px;
    margin: 10px;
    font-size: 18px;
    border: 2px solid #0f0;
    background: black;
    color: #0f0;
    border-radius: 6px;
    cursor: pointer;
    text-shadow: 0 0 5px #0f0;
    transition: 0.25s;
}

button:hover {
    background: #0f0;
    color: #000;
    box-shadow: 0 0 15px #0f0;
}

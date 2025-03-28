import { useState } from "react";

export default function ArduinoButton() {
    const [status, setStatus] = useState(false);

    const sendCommand = async () => {
        const command = status ? "0" : "1"; // Alterna entre ligar/desligar
        try {
            await fetch("http://localhost:3001/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ command }),
            });
            setStatus(!status); // Atualiza o estado
        } catch (error) {
            console.error("Erro ao enviar comando:", error);
        }
    };

    return (
        <button 
            onClick={sendCommand} 
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: status ? "red" : "green",
                color: "white",
                border: "none",
                borderRadius: "5px"
            }}
        >
            {status ? "Desligar" : "Ligar"}
        </button>
    );
}

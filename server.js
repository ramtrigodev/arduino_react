const express = require("express");
const cors = require("cors");
const { SerialPort } = require("serialport");

const app = express();
app.use(cors());
app.use(express.json());

// Substitua pelo nome correto da porta (ex: COM3 no Windows, /dev/ttyUSB0 no Linux)
const port = new SerialPort({ path: "COM3", baudRate: 9600 });

app.post("/send", (req, res) => {
    const { command } = req.body;
    if (command !== "1" && command !== "0") {
        return res.status(400).send("Comando inválido");
    }
    port.write(command, (err) => {
        if (err) return res.status(500).send("Erro ao enviar comando");
        res.send("Comando enviado");
    });
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));

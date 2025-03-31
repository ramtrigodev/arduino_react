void setup() {
    Serial.begin(9600);
}

void loop() {
    if (Serial.available()) {
        char received = Serial.read();
        if (received == '1') {
            digitalWrite(LED_BUILTIN, HIGH);  // Liga LED
        } else if (received == '0') {
            digitalWrite(LED_BUILTIN, LOW);   // Desliga LED
        }
    }
}

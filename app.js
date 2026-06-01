const express = require("express");
const app = express();

const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send(`
    Hey Teja 😌💖  
    Just letting you know my heart is currently running on Teja.exe and it refuses to shut down 😏💻  

    Warning: side effects include smiling for no reason and missing you randomly ❤️
  `);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port 3000`);
});
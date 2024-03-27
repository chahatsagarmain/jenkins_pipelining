const express = require("express");

const app = express();

app.get("/" , (req ,  res) => {
    return res.json({
        "message"  : "Your on the site"
    });
});

app.listen(8000 , () => {
    console.log("sample app listening on port 8000");
});
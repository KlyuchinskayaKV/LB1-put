const app = require("express")();
require("dotenv").config();

const port = process.env.PORT || 5000;

const getResponse = `
<h1>text/html</h1>
<script>
const sendRequest = (method, URL) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, URL)
  xhr.send()
}

document.addEventListener('DOMContentLoaded', () => {
    const URL = './endpoint'

    sendRequest('PUT', URL)
})
</script>`;

app.get("/endpoint", (req, res) => res.send(getResponse));
app.put("/endpoint", (req, res) => res.set({ "Content-Type": "text/plain" }).send("text/plain"));

app.listen(port, () => console.log(`server running on\n\thttp://localhost:${port}`));

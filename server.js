// signaling server đơn giản
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", ws => {
  ws.on("message", msg => {
    // gửi cho tất cả client khác
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });
});


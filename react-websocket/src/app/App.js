import React, { useState, useEffect, useRef } from "react";

// Hook personalizado para lidar com a conexão WebSocket
function useWebSocket(url, message) {
  const [data, setData] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      socketRef.current.send(message);
    };

    socketRef.current.onmessage = (event) => {
      setData(event.data);
    };

    // Limpe a conexão quando o componente for desmontado
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url, message]);

  return data;
}

function AppComponent() {
  const data = useWebSocket("ws://localhost:8080/", "Hello from React!");

  return (
    <div>
      <h1>React</h1>
      <p>Data from Angular: {data}</p>
    </div>
  );
}

export default AppComponent;

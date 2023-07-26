# MicroFrontend-Angular-React-WebSocket


Codificação em React para exemplo de uso WebSocket em MicroFrontend de como usar WebSockets em uma aplicação React. O código demonstra a criação de um hook personalizado para lidar com a conexão WebSocket e a utilização deste hook em um componente funcional. Uso de WebSocket é um protocolo de comunicação que fornece canais de comunicação bidirecionais.

## useWebSocket
useWebSocket é um hook personalizado que aceita uma URL e uma mensagem como parâmetros. Ele cria uma nova conexão WebSocket para a URL fornecida e envia a mensagem quando a conexão é aberta.

## useState
O hook usa o hook useState para criar um estado data que armazena os dados recebidos do servidor WebSocket. Ele também usa o hook useRef para manter uma referência ao objeto WebSocket.

## useEffect
O hook useEffect é usado para lidar com o ciclo de vida da conexão WebSocket. Quando o componente que usa o hook é montado, uma nova conexão WebSocket é criada e a mensagem é enviada. Quando uma mensagem é recebida do servidor, o estado data é atualizado com os dados da mensagem.

Quando o componente é desmontado, a conexão WebSocket é fechada para evitar vazamentos de memória.

O hook retorna o estado data, que contém os dados recebidos do servidor.

## AppComponent
AppComponent é um componente funcional que usa o hook useWebSocket. Ele passa a URL do servidor WebSocket e uma mensagem para o hook e renderiza os dados recebidos do servidor em um elemento .
O componente é exportado como o componente padrão do módulo.


## WebSocket em Angular

Codificação em Angular de exemplo de um componente Angular que utiliza um serviço WebSocket para enviar mensagens.

## AppComponent
AppComponent é um componente Angular que serve como o componente raiz da aplicação. Ele é decorado com o decorador @Component, que inclui metadados como o seletor do componente (app-root), o caminho para o arquivo de template HTML (./app.component.html), e o caminho para o arquivo de estilos CSS (./app.component.scss).

No construtor do AppComponent, o serviço WebSocketService é injetado como uma dependência. Isso permite que o componente utilize os métodos fornecidos pelo serviço.

O método sendMessage é um método público do componente que aceita uma string como argumento. Este método chama o método sendMessage do serviço WebSocketService, passando a string fornecida. Isso permite que o componente envie mensagens através da conexão WebSocket gerenciada pelo serviço.


## WebSocketService
WebSocketService é um serviço Angular que é injetável em qualquer parte da aplicação. Ele é decorado com o decorador @Injectable, que inclui metadados indicando que o serviço deve ser fornecido no nível raiz da aplicação.

O serviço mantém uma referência a um objeto WebSocket, que é usado para se conectar a um servidor WebSocket e enviar e receber mensagens.

No construtor do serviço, o método connect é chamado para estabelecer a conexão WebSocket.

O método connect cria uma nova conexão WebSocket para a URL especificada. Ele define vários manipuladores de eventos para a conexão:

onopen: Loga uma mensagem quando a conexão é aberta.
onmessage: Chama o método onMessage com os dados da mensagem quando uma mensagem é recebida.
onerror: Loga um erro quando ocorre um erro na conexão.
onclose: Loga uma mensagem quando a conexão é fechada e tenta reconectar após 1 segundo.
O método sendMessage é usado para enviar uma mensagem através da conexão WebSocket. Ele verifica se a conexão está aberta antes de tentar enviar a mensagem.

O método onMessage é um manipulador de mensagens privado que loga as mensagens recebidas.


Autor:
**Emerson Amorim**

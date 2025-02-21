# VnV-Servers

- [Ngnix](./ngnix.md) :
- [Proxy-server](./vnv-proxy-server.md) : 
- [Neo-server](./vnv-neo-rest.md) : 
- [Pnp-server](./vnv-pnp-rest.md) : 
- [Event-bridge-server](./vnv-event-bridge.md) : 

```mermaid
graph TD;
  subgraph Container["Service Cloud (Container)"]
    Pub-NGINX["Port 80: Serveur Nginx"] --> Proxy["Port 8080: Serveur Proxy"]
    Priv-NGINX["Port 443: Serveur Nginx"] --> Proxy["Port 8080: Serveur Proxy"]
    Proxy --> PNP["Port 8081: Serveur PNP"]
    Proxy --> Neo4j["Port 3000: Serveur Neo4j"]
    Proxy --> Webhooks["Port 8082: Serveur Webhooks"]
  end
```

## Envs

- `Dev` : [Local Environment - **localhost:8080**]( http://localhost:8080 )
- `Test` : [Test Environment - **18.156.162.178:8080**]( http://18.156.162.178:8080 )
- `Prod` : [Prod Environment]( https://not-ready-yet-with-secure-connexion )
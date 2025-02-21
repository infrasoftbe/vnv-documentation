# Ngnix

NGINX agit comme un reverse proxy et un serveur web. Voici ses rôles principaux dans le contexte de votre configuration :

## 1. Point d’entrée principal des requêtes

	- Port 80 (HTTP) et Port 443 (HTTPS) :
	- NGINX reçoit toutes les requêtes entrantes via HTTP (port 80) ou HTTPS (port 443).
	- Les requêtes sur le port 443 (HTTPS) sont sécurisées grâce à un certificat SSL/TLS.

## 2. Redirection vers le serveur Proxy

	- Une fois qu’il reçoit une requête, NGINX agit comme un reverse proxy, ce qui signifie qu’il redirige les requêtes vers les services internes, notamment vers le serveur proxy (port 8080).
	- Il ajoute une couche d’abstraction, de sécurité et de performance, car :
	- Les utilisateurs ne communiquent pas directement avec les serveurs internes.
	- Cela permet de cacher l’architecture interne du service cloud.

## 3. Gestion de la charge et des connexions

	- NGINX peut répartir les requêtes sur plusieurs instances du serveur proxy (ou autres services) si nécessaire, ce qui améliore la scalabilité et la tolérance aux pannes.
	- Il optimise aussi la gestion des connexions grâce à son architecture asynchrone et événementielle.

## 4. Authentification et sécurité

	- NGINX peut vérifier si les requêtes incluent un token d’identification valide avant de les transmettre au serveur proxy.
	- Il peut aussi bloquer les requêtes malveillantes grâce à des filtres de sécurité (pare-feu d’application web ou WAF).

## 5. HTTPS pour sécurité

  - Le port 443 permet de sécuriser la communication entre le client et NGINX via SSL/TLS.
  - NGINX peut également forcer une redirection automatique des requêtes HTTP (port 80) vers HTTPS (port 443) pour garantir une navigation sécurisée.
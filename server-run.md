# Commands

---

- https://docs.docker.com/engine/install/ubuntu/
- https://docs.docker.com/compose/install/

## Add in _/etc/docker/daemon.json_ :

{
"registry-mirrors": ["https://docker.cr.noql.net/"]
}

## Add in _/opt/db_stack/docker-compose.yml_ :

version: '3.7'
services:
postgres:
image: postgres:latest
container_name: "postgresql"
ports: - "127.0.0.1:5432:5432"
volumes: - ./postgresql:/data/postgres
env_file: - ./postgres.env
restart: always

redis:
image: redis:latest
container_name: "redis"
ports: - "127.0.0.1:6379:6379"
volumes: - ./redis:/data
restart: always

mongo:
image: mongo:latest
container_name: "mongo"
ports: - "127.0.0.1:27017:27017" (127.0.0.1:27017:27017 => 27017:27017)
volumes: - ./mongo:/data/db
restart: always

---

- sudo mkdir -p /opt/db_stack
- docker ps -a
- sudo usermod -aG docker USERNAME
- docker-compose -f /opt/db_stack/docker-compose.yml up -d

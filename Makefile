.PHONY: help whois nginx

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

DOCKER_CMD = docker
COMPOSE_CMD = docker-compose

# DOCKER COMPOSE

build: ## Build the containers
	$(COMPOSE_CMD) build

up: ## Build and run the containers
	$(COMPOSE_CMD) up --build

start: ## Spin up the project
	$(COMPOSE_CMD) up -d

stop: ## Stop running containers
	$(COMPOSE_CMD) stop

rm: stop ## Stop and remove running containers
	$(COMPOSE_CMD) rm --force

ps: ## Display running containers
	$(DOCKER_CMD) ps

version: ## Display docker-compose version
	$(COMPOSE_CMD) --version

## DOCKER
exec:
	$(DOCKER_CMD) docker exec -it chotuve-web sh

web: ## Connect to Web Front container
	$(DOCKER_CMD) exec -it chotuve-web sh

web-logs: ## Display Web Front logs
	$(DOCKER_CMD) logs -f chotuve-web

web-start: ## Start Web Front Container
	$(COMPOSE_CMD) start web

web-stop: ## Stop Web Front Container
	$(COMPOSE_CMD) stop web

web-restart: ## Restart Web Front Container
	$(COMPOSE_CMD) restart web

web-up: ## Build and run Ionic Container
	$(COMPOSE_CMD) up -d --build web

## This could be done with all the containers.
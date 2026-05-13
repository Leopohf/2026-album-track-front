# Makefile for 2026 Album Track Frontend

# --- Variables ---
REPLICAS ?= 3

# --- Help ---
.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Local Development:"
	@echo "  dev           - Start Angular development server (pnpm start)"
	@echo ""
	@echo "Production Environments (Scalable & Load Balanced):"
	@echo "  prod-ssr      - Start SSR production environment (Nginx LB + 3 Replicas)"
	@echo "  prod-ssg      - Start SSG production environment (Nginx LB + 3 Replicas)"
	@echo ""
	@echo "Management:"
	@echo "  stop          - Stop all running docker compose environments"
	@echo "  clean         - Stop and remove all containers and images"
	@echo "  logs-ssr      - View logs for SSR environment"
	@echo "  logs-ssg      - View logs for SSG environment"

# --- Development ---
.PHONY: dev
dev:
	pnpm start

# --- Production SSR ---
.PHONY: prod-ssr
prod-ssr:
	docker compose -f deploy/docker-compose.ssr.yml up --build --detach --scale app=$(REPLICAS)
	@echo "SSR Production environment started at http://localhost:8080"

.PHONY: logs-ssr
logs-ssr:
	docker compose -f deploy/docker-compose.ssr.yml logs -f

# --- Production SSG ---
.PHONY: prod-ssg
prod-ssg:
	docker compose -f deploy/docker-compose.ssg.yml up --build --detach --scale app=$(REPLICAS)
	@echo "SSG Production environment started at http://localhost:8080"

.PHONY: logs-ssg
logs-ssg:
	docker compose -f deploy/docker-compose.ssg.yml logs -f

# --- Global Commands ---
.PHONY: stop
stop:
	docker compose -f deploy/docker-compose.ssr.yml stop
	docker compose -f deploy/docker-compose.ssg.yml stop

.PHONY: clean
clean:
	docker compose -f deploy/docker-compose.ssr.yml down --rmi all
	docker compose -f deploy/docker-compose.ssg.yml down --rmi all

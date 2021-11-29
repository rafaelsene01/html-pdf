build:
	docker build -t nagro/sentry .
prod:
	docker run -p 5000:5000 -d nagro/sentry
dev:
	docker-compose up
hidden:
	docker-compose up -d
down:
	docker-compose down
password:
	@export MYSQL_PASSWORD = $(openssl rand -hex 25)

path: 
	@touch ./src/routers/$(name).ts
	@touch ./src/models/$(name).ts
	@echo "$$routebody" >> ./src/routers/$(name).ts

init:
	@cp .env.ready .env
	@cp .env.mongo.ready .env.mongo
	#@cp .env.redis.ready .env.redis
	@awk '{ printf("%s", $$0); if ($$0 ~ /(PASSWORD)/) { cmd = "openssl rand -hex 25"; cmd | getline output; close(cmd); printf(output); printf("%s%s\n", $$0, output) > ".env.mongo"; } else { printf "%s\n", $$0 > ".env.mongo"; }}' .env.mongo.ready
	@awk '{ printf("%s", $$0); if ($$0 ~ /(SECRET)/) { cmd = "openssl rand -hex 25"; cmd | getline output; close(cmd); printf(output); printf("%s%s\n", $$0, output) > ".env"; } else { printf "%s\n", $$0 > ".env"; }}' .env.ready
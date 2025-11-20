# DEVELOPMENT

## Install dep

```
git clone git@github.com.....
cd script-template-ts
bun install
```

## Prepare environment config

```
cp .env.example .env

# Update .env content
# Setup other secret configs as well
```

## Local dev

- Normal mode - without monitor

```
bun start
```

- Monitor mode

```
bun start:dev
```

## Build production

```
bun run build
```

## Start production

```
bun start:prod
```

## Test

- Run test

```
bun test
```

- Run test coverage

```
bun test:cov
```

# DEPLOYMENT

## Timezone

```
# Set timezone
sudo timedatectl set-timezone Asia/Ho_Chi_Minh
timedatectl
```

## Requisites

```
# Install bun
curl -fsSL https://bun.sh/install | bash

# Install pm2
sudo npm install -g pm2

pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:retain 10

```

## Setup ssh

```
ssh-keygen -t rsa

cat ~/.ssh/id_rsa.pub

COPY public content and register to git provider to allow clone repo with ssh
```

## [Recommend] Start with pm2

```
# Start App
pm2 --name script-template-ts start --interpreter bun src/index.ts

# Restart App
pm2 restart script-template-ts
```

## Monitor

```
pm2 monit
```

## Reload

```
pm2 reload script-template-ts
```

# DEVELOPMENT

## Install dep

```
git clone git@github.com.....
cd script-template-ts
yarn install
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
yarn start
```

- Monitor mode

```
yarn start:dev
```

## Build production

```
yarn build
```

## Start production

- Run with node

```
yarn start:prod
```

- Run with bun

```
# Install bun
curl -fsSL https://bun.sh/install | bash

# Run with bun
yarn start:prod:bun
```

## Test

- Run test

```
yarn test
```

- Run test coverage

```
yarn test:cov
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
sudo apt install zip unzip

curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install --global yarn
sudo npm install --global pm2

pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:retain 10
pm2 set pm2:log_date_format "YYYY-MM-DD HH:mm:ss"
```

## Setup ssh

```
ssh-keygen -t rsa

cat ~/.ssh/id_rsa.pub

COPY public content and register to git provider to allow clone repo with ssh
```

## [Deprecated] Start with tmux

```
# New terminal session
[from main] tmux

# Attach tmux session
[from main] tmux a
[from main] tmux a -t sessionId

# Detach tmux session
[from tmux session] Ctrl + B + D

# Kill tmux session
[from tmux session] exit
[from main] tmux kill-ses -t sessionId
```

## [Recommend] Start with pm2

```
# Start App
pm2 --name thescript start npm -- run start:prod --log-date-format="YYYY-MM-DD HH:mm:ss"
```

## Monitor

```
pm2 monit
```

## Reload

```
pm2 reload thescript --update-env
```

## PM2 cluster with config file

```
# Start
pm2 start pm2.config.js

# Reload
pm2 reload pm2.config.js

# Delete
pm2 delete pm2.config.js
```

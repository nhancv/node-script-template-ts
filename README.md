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
```

## Setup ssh

```
ssh-keygen -t rsa

cat ~/.ssh/id_rsa.pub

COPY public content and register to git provider to allow clone repo with ssh
```

## Install dep

```
git clone git@github.com.....
cd script-template
yarn install
```

## Prepare environment config

```
cp .env.example .env

# Update .env content
# Setup other secret configs as well
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
pm2 --name thescript start src/index.js
```

## Monitor

```
pm2 monit
```

## Reload

```
pm2 reload thescript --update-env
```

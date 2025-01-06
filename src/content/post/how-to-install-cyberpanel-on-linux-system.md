---
title: "How to install CyberPanel on Linux system"
description: "Install pnpm with npm on Ubuntu"
publishDate: "29 Dec 2024"
tags: ["nodejs", "npm", "pnpm"]
updatedDate: 29 Dec 2024
---

## Connect to your server via SSH
```js title="Ubuntu"
sudo apt update && sudo apt upgrade -y
```
<br>

```js title="CentOS/Alma/Rocky"
sudo yum check-update
sudo yum update
```

## Run the installation script
Run the following command:
```js
sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)
```

If, for some reason, you are not able to log in as root, you can use this command
```js
sudo su - -c "sh <(curl https://cyberpanel.net/install.sh || wget -O - https://cyberpanel.net/install.sh)"
```

## Select the version of LiteSpeed that you would like to use
![Screenshot](/images/pasted-image.png)
- If you selected LiteSpeed Enterprise, you will see the following prompt. Enter your serial number. (please ensure that you have obtained a license key first).
    - If you do not have any license, you can also use trial license (if server has not used trial license before), type TRIAL.
    - Please input your serial number for LiteSpeed WebServer Enterprise.
- If you selected OpenLiteSpeed, you can also use free version.

## Select options and add-ons
You will be presented with a series of prompts for different options and add-ons that are available.
### Full Service (default Y):
- PowerDNS – an open-source DNS server
- Postfix – open-source mail transfer agent
- Pure-FTPd – open-source FTP server

### Remote MySQL (default N):
- Allow for your Database to be installed on a remote server
![Screenshot](/images/pasted-image-0.png)

### CyberPanel Version (default Latest Version):
- You can choose to install a previous version of CyberPanel, or press <kbd>Enter</kbd> to install the latest version.
![Screenshot](/images/pasted-image-01.png)

### Password (default “1234567”):
- It is recommended to set a strong password of your own by choosing ‘s’ or generate a random password by selecting ‘r’.
![Screenshot](/images/pasted-image-02.png)

### Memcached (default Y):
Distributed memory object caching system
![Screenshot](/images/pasted-image-03.png)

### Redis (default Y):
In-memory data structure store, used as a database, cache, and message broke
![Screenshot](/images/pasted-image-04.png)

### Watchdog (default Yes):
- A kernel watchdog is used to monitor if a system is running. It is supposed to automatically reboot hanged systems due to unrecoverable software errors
![Screenshot](/images/pasted-image-05.png)

The installation process will proceed automatically. It will take 5-10 minutes, depending on the speed of your server.

## Access CyberPanel
```bash
URL: https://<Your Server's IP Address>:8090 
Username: admin
Password: <the password you set during installation>
```
<br><br>

## Troubleshooting
If you get a 503 error after installing CyberPanel, you can do one of the following things.
- Check LSCPD Status.
```js
systemctl status lscpd
```
- If LSCPD is not running, start LSCPD using:
```js
systemctl start lscpd
```

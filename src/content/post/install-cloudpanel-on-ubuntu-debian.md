---
title: "How to Install CloudPanel on Ubuntu/Debian"
description: "How to install CloudPanel on a dedicated server"
publishDate: "1 Dec 2024"
tags: ["cloudpanel", "ubuntu", "debian"]
updatedDate: 1 Dec 2024
---

# Installing CloudPanel on a dedicated Ubuntu or Debian server

On this page, we explain step by step how to install CloudPanel on a dedicated server or any other cloud.

For the installation, you need an empty server with **Ubuntu 24.04 or 22.04** or **Debian 12 or 11** with root access.

---
Login via SSH to the Server.

If you are using a private key to login, the SSH command would be:

```js
ssh -i path_to_your_private_key root@yourIpAddress
```

If you are using a password to login, the SSH command would be:

```js
ssh root@yourIpAddress
```

Before running the installer, we need to update the system and install the required packages.

```js
apt update && apt -y upgrade && apt -y install curl wget sudo
```

## Ubuntu 24.04 LTS
```js title="MySQL 8.0"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo bash install.sh
```
```js title="MariaDB 11.4"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo DB_ENGINE=MARIADB_11.4 bash install.sh
```

## Ubuntu 22.04 LTS
```js title="MySQL 8.0"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo bash install.sh
```
```js title="MariaDB 11.4"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo DB_ENGINE=MARIADB_11.4 bash install.sh
```

## Debian 12 LTS
```js title="MySQL 8.0"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo bash install.sh
```
```js title="MariaDB 11.4"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo DB_ENGINE=MARIADB_11.4 bash install.sh
```

## Debian 11 LTS
```js title="MySQL 8.0"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo bash install.sh
```
```js title="MariaDB 11.4"
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo DB_ENGINE=MARIADB_11.4 bash install.sh
```

# Access CloudPanel
:::warning
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user. If possible, open port `8443` only for your IP via **firewall**.
:::
You can now access **CloudPanel** via Browser: [https://yourIpAddress:8443](http://localhost:8443)
Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

![Screenshot](https://www.cloudpanel.io/docs/v2/img/getting-started/ignore-self-signed-certificate.png)

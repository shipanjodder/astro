---
title: "How to Install Virtualmin on Ubuntu 24.04 LTS"
description: "Install Virtualmin on Ubuntu 24.04 LTS"
publishDate: "16 Aug 2024"
tags: ["virtualmin", "install virtualmin", "ubuntu"]
updatedDate: 17 December 2024
---

Virtualmin is not available in the default package repositories on Ubuntu 24.04. Follow the steps below to download the latest installation script and install Virtualmin on your server.

1. Set your domain as the new server hostname. For example, `virtualmin.example.com`.

```
sudo hostnamectl set-hostname virtualmin.example.com
```

2. Download and run the Virtualmin installation script. The command below installs the open source (GPL) edition of Virtualmin with the LAMP stack.

```
sudo sh -c "$(curl -fsSL https://software.virtualmin.com/gpl/scripts/virtualmin-install.sh)" -- --bundle LAMP
```

Enter `Y` to proceed with the installation.

Wait for at least 5 to 10 minutes for the installation to complete.

```bash
[SUCCESS] Installation Complete!
[SUCCESS] If there were no errors above, Virtualmin should be ready
[SUCCESS] to configure at https://virtualmin.example.com:10000 (or https://192.0.2.1:10000).
```




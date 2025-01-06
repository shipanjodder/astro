---
title: PuTTY auto login with a password
description: How to auto login to server with password on PuTTY
publishDate: "1 Dec 2024"
tags: ["cloudpanel", "ubuntu", "debian"]
updatedDate: 15 Dec 2024
---

### Connect via CMD or PowerShell

```
putty.exe username@hostname/ip -pw userpassword
```
or
```
putty.exe hostname/ip -l username -pw userpassword
```
### Create a shortcut
1. Create a shortcut on the Desktop to putty.exe
2. Rename the shortcut to `PuTTY - server.com`
3. `Right-click` shortcut and choose `Properties`
4. Modify the target similar to: 
```
C:\Program Files\PuTTY\putty.exe user@hostname/ip -pw password
```

![Screenshot](/images/Screenshot_putty_config.png)

5. Click `OK`
6. Run the shortcut on Desktop .


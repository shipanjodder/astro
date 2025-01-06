---
title: "How to stop/terminate Node.js running port"
description: "Terminate the running node.js existing process"
publishDate: "28 Dec 2024"
tags: ["nodejs", "reactjs"]
updatedDate: 28 December 2024
---

> The issue "Something is already running on port 3000" arises when a service (like your React application) tries to start on port 3000, but another process is already using that port.

# Steps to Fix

1. Identify and Kill the Process Using Port 3000

## For Windows:

1. Open the command prompt and type:
```js title="cmd"
netstat -ano | findstr :3000
```
This will display the process ID (PID) using port 3000.

2. Terminate the process by PID:
```js title="cmd"
taskkill /PID <PID> /F
```
Replace `<PID>` with the actual PID from the previous command.

## For macOS/Linux:

1. Find the process using port 3000:
```js title="bash"
lsof -i :3000
```

2. Terminate the process:
```js title="bash"
kill -9 <PID>
```
Replace `<PID>` with the actual PID from the previous command.

2. Run Your Application on a Different Port
You can start your React app on a different port by specifying it when running `npm start`.
```js title="bash"
PORT=3001 npm start
```
Alternatively, you can add a `.env` file in your project root with the following content:
```js title="bash"
PORT=3001
```
Then restart your application.

3. Check for Running Processes
If the issue persists, ensure no orphan processes are left running:

- Restart your system to clear any lingering processes.
- Check for running Node.js processes:
```js title="bash"
ps aux | grep node
```
Terminate any unwanted processes using `kill -9 <PID>`.
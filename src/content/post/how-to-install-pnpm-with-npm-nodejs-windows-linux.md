---
title: "How to install pnpm with npm on Windows/Linux"
description: "Install pnpm with npm on Ubuntu"
publishDate: "17 Dec 2024"
tags: ["nodejs", "npm", "pnpm", "install pnpm"]
updatedDate: 17 Dec 2024
---
# Installing pnpm
## On Windows
:::warning
Sometimes, Windows Defender may block our executable if you install pnpm this way.
Due to this issue, we currently recommend installing pnpm using `npm` or `PowerShell` Windows.
:::

### Using PowerShell:
    Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression

## On POSIX systems

    curl -fsSL https://get.pnpm.io/install.sh | sh -

If you don't have curl installed, you would like to use wget:

    wget -qO- https://get.pnpm.io/install.sh | sh -

## In a Docker container
```js title="# bash"
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
```
```js title="# sh"
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
```
```js title="# dash"
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -
```

## Using npm
    npm install -g pnpm
or
```
npm install -g @pnpm/exe
```
<br>

## Using Homebrew
    brew install pnpm

<br>

## Using winget
    winget install -e --id pnpm.pnpm
<br>

## To starts local dev server at localhost:3000
    pnpm dev

## Production build
:::tip
Build your production site to `./dist/`

```
pnpm build
```
Pagefind script to build the static search of your blog posts

```
pnpm postbuild
```
Preview your build locally, before deploying

```
pnpm preview
```
Generate types based on your config

```
pnpm sync
```
:::

## Background run server
To run `pnpm` in the background using `nohup` (Linux/macOS):
```
nohup pnpm preview > output.log 2>&1 &
```

## Stop server
Using lsof (If the Server Port is Known)
```    
lsof -i :3000
```
`3000` is the port that started the server

Once you get the PID:
```
kill <PID>
```

<br><br>

# Updating pnpm
    pnpm self-update

<br>

# Uninstalling pnpm
### Removing the pnpm CLI
If you used the standalone script to install pnpm, then you should be able to uninstall the pnpm CLI by removing the pnpm home directory:
    rm -rf $PNPM_HOME
If you used npm to install pnpm, then you should use npm to uninstall pnpm:
    npm rm -g pnpm

### Removing the global content-addressable store
    rm -rf $(pnpm store path)
If you used pnpm in non-primary disks, then you must run the above command in every disk, where pnpm was used. pnpm creates one store per disk.

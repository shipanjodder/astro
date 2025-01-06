---
title: "Generating and verifying software license keys"
description: "How to Generate Software License Keys and Verify Them"
publishDate: "7 Oct 2024"
tags: ["javascript", "licensekey"]
updatedDate: 16 December 2024
---

> Learn to create and verify software license keys using a Crypto API. The keys can be activated offline without needing a database.

You run a small software business that sells digital downloads like apps, plugins, and templates. Upon completing their purchase, it is essential to provide the buyer with a license key that enables them to activate and validate the software.

Here's how to implement a licensing system in your software: 

1. Generate a public and private key pair using the RSA algorithm.
2. Sign a message using the private key. The message includes the buyer's email address along with the software SKU.
3. The signed message is the license key sent to the buyer's email.
4. When the buyer activates the software, the license key is authenticated through the use of the public key.

## The Advantages

The benefit is that the public key can be embedded in the software's source code, eliminating the need for a database. This allows buyers to verify the license key offline without connecting to your server.

Let’s now go through the implementation steps in detail.

### 1. Generate Public and Private Key Pair

![Screenshot](/images/113912.png)

We’ll generate a public and private key pair using the RSA algorithm. Launch the terminal and run the following [openssl command](https://openssl-library.org/source/index.html).

```js
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out private_key.pem
```

It will generate a 2048-bit RSA private key and save it to a file called private_key.pem in the current folder. Next, we’ll write a command to generate a public key from the private key.

```js
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

Now that we have our keys, let’s print them to the console as we’ll need them in the next step.

```js
openssl pkey -in private_key.pem && openssl pkey -pubin -in public_key.pem
```

### 2. Generate a License Key

We’ll write a simple Node.js script to generate a license key. It uses the `crypto` module to sign the message with the private key and the `fs` module to read the private key from the file system.

```js
const crypto = require('crypto');
const fs = require('fs');

// Read private key from file system
const privateKey = fs.readFileSync('private_key.pem', 'utf8');

const buyerEmailAddress = 'amit@labnol.org';
const data = Buffer.from(buyerEmailAddress);

const signature = crypto.sign('sha256', data, {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});

// Convert the signature to base64
const licenseKey = signature.toString('base64');

// Output the result
console.log(licenseKey);
```

### 3. Verify a License Key

```js
The generated license key is sent to the buyer's email, and we need to verify it when the software is activated.
This again is a simple Node.js script that uses the `crypto` module to verify the license key with the public key.

const crypto = require('crypto');
const fs = require('fs');

const buyerEmailAddress = '<<buyer email address>>';
const licenseKey = '<<license key>>';

const publicKey = fs.readFileSync('public_key.pem', 'utf8');
const signatureBuffer = Buffer.from(licenseKey, 'base64');

const licenseStatus = crypto.verify(
  'sha256',
  Buffer.from(buyerEmailAddress),
  {
    key: Buffer.from(publicKey),
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signatureBuffer
);

console.log(licenseStatus ? 'Activated' : 'Invalid license key');
```

## License Activation in Google Apps Script

This is a simple software licensing system that doesn’t cover all edge cases. It can serve as a starting point, but other factors need to be considered, such as:

- How to set expiration dates for the license keys.
- How to revoke a license key.
- How to prevent key sharing between users.


# Purpose

![screenshot](/target.png)

## Prepare

### 1. Install ngrok

`npm install -g ngrok`

Also signup and set `authtoken` as followed in [ngrok setup](https://dashboard.ngrok.com/get-started/setup)

then reverse proxy. This is used to expose localhost to be accessible by public network

`ngrok http 3000`

if localhost is not on 3000, change it.

### 2. Create a shopify app on Shopify, then copy key/secret to related parts in `.env`

![screenshot](/key-secret.png)

then don't forget to update url on the Shopify website, and `.env` file

![screenshot](/ngrok.png)

### 3. Run localhost

`npm run shopify`

### 4. Test

![screenshot](/install-app.png)

`accessToken` will be written back to cookie after Authentication.

![screenshot](/token.png)

![screenshot](/access-token.png)

### 5. Webhook

Next step, [test a Shopify webhook](webhook)!

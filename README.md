# README

## Prepare

### 1. Install ngrok

`
npm install -g ngrok
`

then reverse proxy. This is used to expose localhost to be visited by outside network

`ngrok http 3100`

if localhost is not on 3000, change it

Don't forget to update url on the Shopify website

![screenshot](/ngrok.png)

### 2. Create an shopify app on Shopify, then copy key/secret to related parts in `.env`

![screenshot](/key-secret.png)


### 3. Run localhost

`npm run dev`


###  4. Test in

![screenshot](/install-app.png)

and the accessToken will be written back to cookie

![screenshot](/token.png)
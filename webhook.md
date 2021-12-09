## Test Shopify Webhooks

We will test orders/create webhook in Shopify.

* Put more entries in .env file
```
SHOPIFY_DOMAIN = "my-test-dev.myshopify.com"
SHOPIFY_ACCESS_TOKEN = "shpat_1234567890abcdef1234567890abcdef"
NGROK_DOMAIN = "https://aaaa-bbbb-cccc-dddd-eeee-ffff-1111-2222-3333.ngrok.io"
```
* Run `npm run webhook`
* In `npm run shopify` window, we will see a webhook event
```
{
  method: 'POST',
  url: '/api/order_updates',
  header: {
    host: 'aaaa-bbbb-cccc-dddd-eeee-ffff-1111-2222-3333.ngrok.io',
    'user-agent': 'Shopify-Captain-Hook',
    'content-length': '32',
    accept: '*/*',
    'accept-encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
    'content-type': 'application/json',
    'x-forwarded-for': '104.196.69.248',
    'x-forwarded-proto': 'https',
    'x-shopify-api-version': '2021-10',
    'x-shopify-hmac-sha256': 'SVsvABCdefGHIjklmpn/abcdYQof12341RmaKLJHLKJ=',
    'x-shopify-order-id': '4053077458995',
    'x-shopify-shop-domain': 'my-test-dev.myshopify.com',
    'x-shopify-test': 'false',
    'x-shopify-topic': 'orders/create',
    'x-shopify-webhook-id': 'bdea8aeb-60f8-4bc9-8c5a-b6fb53dbe4bf'
  }
}
```
### NR;TL

1. Remove all existing webhooks
1. Add a new orders/create webhook to listen to create order event. The callback URL will be xxxxxx/api/order_updates
1. Add a product to the test Shopify store
1. Create an order with the new product's variant id
1. Shopify will trigger an orders/create event and send to the nominated callback URL

### Trouble Shooting

* Sometimes, if we repeatedly run `npm run webhook`, Shopify will throttle and give us an error. Just patiently wait for a couple of seconds and then try again. Finger crossed.
const dotenv = require("dotenv");
const { Shopify } = require("@shopify/shopify-api");
const { DataType } = require("@shopify/shopify-api");

dotenv.config();
const { SHOPIFY_DOMAIN, SHOPIFY_ACCESS_TOKEN, NGROK_DOMAIN } = process.env;

const client = new Shopify.Clients.Rest(SHOPIFY_DOMAIN, SHOPIFY_ACCESS_TOKEN);

const clearWebhooks = async () => {
  const data = await client.get({
    path: "webhooks",
  });
  console.log({ body: data.body, headers: data.headers });

  console.log("deleting " + data.body.webhooks.length + " webhook(s)...");
  await Promise.all(
    data.body.webhooks.map(({ id }) => {
      client.delete({
        path: "webhooks/" + id,
      });
    })
  );
  console.log("deleted " + data.body.webhooks.length + " webhook(s)");
};

const createWebhook = async () => {
  console.log("creating an orders/create webhook...");
  const data = await client.post({
    path: "webhooks",
    data: {
      webhook: {
        topic: "orders/create",
        address: NGROK_DOMAIN + "/api/order_updates",
        format: "json",
        fields: ["id", "note"],
      },
    },
    type: DataType.JSON,
  });
  console.log({ body: data.body, headers: data.headers });
  console.log("created an orders/create webhook");
};

const createProduct = async () => {
  console.log("creating a random product...");
  const data = await client.post({
    path: "products",
    data: {
      product: {
        title: "Burton Custom Freestyle 151",
        body_html: "\u003cstrong\u003eGood snowboard!\u003c/strong\u003e",
        vendor: "Burton",
        product_type: "Snowboard",
        tags: ["Barnes \u0026 Noble", "Big Air", "John's Fav"],
      },
    },
    type: DataType.JSON,
  });
  console.log({ body: data.body, headers: data.headers });

  const { id: variantId } = data.body.product.variants[0];
  console.log("created a random product with variant_id (" + variantId + ")");
  return variantId;
};

const createOrder = async (variantId) => {
  console.log("creating an order...");
  const data = await client.post({
    path: "orders",
    data: { order: { line_items: [{ variant_id: variantId, quantity: 1 }] } },
    type: DataType.JSON,
  });
  console.log({ body: data.body, headers: data.headers });

  console.log("created an order");
};

clearWebhooks()
  .then(createWebhook)
  .then(createProduct)
  .then(createOrder)
  .then(process.exit)
  .catch((e) => console.error(e));

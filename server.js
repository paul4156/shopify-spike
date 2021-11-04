require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require('koa');
const next = require('next');
const {default: createShopifyAuth} = require('@shopify/koa-shopify-auth');
const {verifyRequest} = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const {SHOPIFY_API_SECRET, SHOPIFY_API_KEY} = process.env;

app.prepare().then(() => {
    const server = new Koa()
    server.use(session({secure: true, sameSite: 'none'}, server));
    server.keys = [SHOPIFY_API_SECRET]

    server.use(
        createShopifyAuth({
            apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_KEY,
            prefix: "shopify",
            scopes:[
                'read_products',
                'write_products',
                'read_script_tags',
                'write_script_tags'
            ],
            afterAuth(ctx) {
                const {shop, accessToken} = ctx.session;
                console.log("accessToken = ", accessToken)
                ctx.redirect("/")
            }
        }),
    )

    server.use(verifyRequest({
        authRoute: '/shopify/auth',
        fallbackRoute: '/install',
    }))
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
        return;
    });

    server.listen(3000, () => {
        console.log('listening on localhost 3000')
    }) 

})

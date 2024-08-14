const express = require( 'express' );
const { createProxyMiddleware } = require( 'http-proxy-middleware' );

const app = express();

app.use('/github/*', ( req , res , next ) => {

    console.log({ req })
    
    console.log({ packageName : req.params.packageName })

    return createProxyMiddleware({
        target: 'https://npm.pkg.github.com',
        changeOrigin: true,
        pathRewrite: {
            '^/github': '',
        },
    })( req , res , next );

});

app.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:8088');
});
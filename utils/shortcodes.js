module.exports = {

    analytics: function () {
        return process.env.ENVIRONMENT === "prod"
          ?`
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6K99SH9JG6"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6K99SH9JG6');
</script>`
          : "";
    }
    
}

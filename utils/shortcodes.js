module.exports = {

    analytics: function () {
        return process.env.ENVIRONMENT === "prod"
          ?`
    <script data-goatcounter="https://sparna.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
          : "";
    }
    
}

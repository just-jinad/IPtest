const { IPinfoWrapper } = require("node-ipinfo");

const ipinfoWrapper = new IPinfoWrapper(process.env.IPINFO_TOKEN);

const getIPInfo = async (ip) => {
    try {
        const data = await ipinfoWrapper.lookupIp(ip);
        return data;
    } catch (error) {
        console.error("Error fetching IP info:", error);
        return null;
    }
};

module.exports = { getIPInfo };

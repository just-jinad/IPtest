import { getIPInfo } from "../../lib/ipinfo";

export async function GET(req) {
    try {
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0] || // Real client IP
            req.headers.get("remoteAddress") || // Fallback for some environments
            "8.8.8.8"; // Hardcoded fallback for testing

        const ipInfo = await getIPInfo(ip); // Fetch location using IPinfo
        return new Response(JSON.stringify(ipInfo), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error in GET /getLocation:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
        });
    }
}

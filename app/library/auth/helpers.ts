import { NextRequest } from "next/server";

const ENV = process.env.NODE_ENV;

export const getAccessToken = (request: NextRequest): string => {
    const authHeader = request.headers.get("authorization");
    if (!authHeader) throw new Error("No access token provided");

    if (ENV === "development" && authHeader.match(/Bearer /g)) {
        console.log("Using Postman access token");
        return authHeader;
    } else {
        throw new Error("Invalid access token provided");
    }
};

import { NextResponse } from "next/server";

export function middleware(request) {
    let response = NextResponse.next();
    if (request.cookies["next-auth.session-token"]) {
        let cookieFromRequest = request.cookies["next-auth.session-token"];

        response.cookie("session", cookieFromRequest);
    }

    return response;
}

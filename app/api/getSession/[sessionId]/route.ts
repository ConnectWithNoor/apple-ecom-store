import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(req: NextApiRequest, { params }: any) {
  const sessionId = params.sessionId;
  const session = await stripe.checkout.sessions.listLineItems(sessionId);

  return NextResponse.json(
    { session },
    {
      status: 200,
    }
  );
}

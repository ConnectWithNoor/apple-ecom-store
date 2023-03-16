// Create Checkout Sessions from body params.
import { urlFor } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const items: Product[] = await request.json();
  //   This is the shape in which stripe expects the data to be in.
  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [urlFor(item.image[0]).url()],
      },
      unit_amount: Number(item.price) * 100,
    },
    quantity: 1,
  }));

  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: transformedItems,
      payment_intent_data: {},
      mode: "payment",
      success_url: `${request.headers.get(
        "Origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("Origin")}/checkout`,
      metadata: {
        images: JSON.stringify(items.map((item) => item.image[0].asset.url)),
      },
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    return NextResponse.json(checkoutSession, {
      status: 200,
    });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { statusCode: 500, message: errorMessage },
      {
        status: 500,
      }
    );
  }
}

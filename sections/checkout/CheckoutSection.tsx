"use client";

import { Button, CheckoutProduct } from "@/components";
import {
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/slice/basketSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { fetchPostJSON } from "@/utils/api-helpers";
import getStripe from "@/lib/stripe";

function CheckoutSection() {
  const [isLoading, setIsLoading] = useState(false);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<{
    [id: string]: Product[];
  }>({});

  useEffect(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item._id] = result[item._id] || []).push(item);

      return result;
    }, {} as { [id: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const createCheckoutSession = async () => {
    // https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
    setIsLoading(true);

    const checkoutSession: any = await fetchPostJSON(
      "/api/checkoutSession",
      items
    );

    console.log("file:CheckoutSection.tsx, line#42", checkoutSession);

    // if it's interner server error
    // if (checkoutSession.statusCode === 500) {
    //   console.error(checkoutSession.message);
    // }

    // redirect to checkout stripe
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);

    setIsLoading(false);
  };

  return (
    <main className="pb-23 mx-auto max-w-5xl">
      <div className="px-5">
        <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
          {items.length > 0 ? "Review your bag" : "Your bag is empty"}
        </h1>
        <p className="my-4">Free delivery and free returns.</p>

        {items.length === 0 && (
          <Link href="/">
            <Button title="Continue Shopping" />
          </Link>
        )}
      </div>

      {items.length > 0 && (
        <div className="mx-5 md:mx-8">
          {Object.entries(groupedItemsInBasket).map(([key, value]) => {
            return <CheckoutProduct key={key} id={key} items={value} />;
          })}

          <div className="my-12 mt-6 ml-auto max-w-3xl">
            <div className="divide-y divide-gray-300">
              <div className="pb-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>
                    <Currency quantity={basketTotal} currency="USD" />
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-x-1 lg:flex-row">
                    Estimated tax for:{" "}
                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                      Enter zip code
                      <ChevronDownIcon className="h-6 w-6" />
                    </p>
                  </div>
                  <p>$ -</p>
                </div>
              </div>

              <div className="flex justify-between pt-4 text-xl font-semibold">
                <h4>Total</h4>
                <h4>
                  <Currency quantity={basketTotal} currency="USD" />
                </h4>
              </div>
            </div>

            <div className="my-14 space-y-4">
              <h4 className="text-xl font-semibold">
                How would you like to check out?
              </h4>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center">
                  <h4 className="mb-4 flex flex-col text-xl font-semibold">
                    <span>Pay Monthly</span>
                    <span>with Apple Card</span>
                    <span>
                      $283.16/mo. at 0% APR<sup className="-top-1">◊</sup>
                    </span>
                  </h4>
                  <Button title="Check Out with Apple Card Monthly Installments" />
                  <p className="mt-2 max-w-[240px] text-[13px]">
                    $0.00 due today, which includes applicable full-price items,
                    down payments, shipping, and taxes.
                  </p>
                </div>

                <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                  <h4 className="mb-4 flex flex-col text-xl font-semibold">
                    Pay in full
                    <span>
                      <Currency quantity={basketTotal} currency="USD" />
                    </span>
                  </h4>

                  <Button
                    noIcon
                    loading={isLoading}
                    title="Check Out"
                    width="w-full"
                    onClick={createCheckoutSession}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CheckoutSection;

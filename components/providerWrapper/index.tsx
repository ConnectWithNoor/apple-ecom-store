"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

type Props = {
  children: React.ReactNode;
};

function ProviderWrapper({ children }: Props) {
  return (
    <>
      <Provider store={store}>
        <Toaster />

        {children}
      </Provider>
    </>
  );
}

export default ProviderWrapper;

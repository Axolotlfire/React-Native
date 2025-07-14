import { Redirect, Slot } from "expo-router";
import React from "react";

const _layout = () => {
  const isAuth = false; // Replace with actual authentication logic
  if (!isAuth) return <Redirect href="/sign-in" />;

  return <Slot />;
};

export default _layout;

import React from "react";
import SplashScreen from "@domains/Account/components/SplashScreen";

export default function withSplashScreen<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <>
      <SplashScreen />
      <Component {...props} />
    </>
  );
}

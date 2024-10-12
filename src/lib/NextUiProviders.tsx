
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function NextUiProviders({ children }: { children: React.ReactNode }) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}


export default NextUiProviders
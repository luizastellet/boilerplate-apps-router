import { PropsWithChildren } from "react";

import GlobalStyles from "@/styles/Global";

export function Providers({ children }: PropsWithChildren ) {
  return (
    <>
      <GlobalStyles />
        {children}

    </>
  )
}

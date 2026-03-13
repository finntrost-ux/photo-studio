"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const [renderKey, setRenderKey] = useState(pathname);

  useEffect(() => {
    setRenderKey(pathname);
  }, [pathname]);

  return (
    <div
      key={renderKey}
      className="page-fade"
    >
      {children}
    </div>
  );
}


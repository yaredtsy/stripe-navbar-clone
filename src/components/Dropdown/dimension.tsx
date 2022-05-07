import React, { useCallback, useLayoutEffect, useState } from "react";

const getdimensions = (element: any) => element.getBoundingClientRect();

export function useDimensions(responsive = true): [DOMRect | null, any] {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  const [element, setElement] = useState(null);

  const hook = useCallback((e: any) => setElement(e), []);

  useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getdimensions(element));
        });
      };

      updateDimensions();

      if (responsive) {
        window.addEventListener("resize", updateDimensions);
        return () => {
          window.removeEventListener("resize", updateDimensions);
        };
      }
    }
  }, [element, hook, responsive]);

  return [dimensions, hook];
}

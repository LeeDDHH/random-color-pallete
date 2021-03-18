import { useEffect, useState } from "react";

export const clientOnly = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])
  return hasMounted
}

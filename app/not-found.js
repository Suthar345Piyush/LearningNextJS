"use client";


import { usePathname } from "next/navigation";




export default function blogNotFound() {
  const a = usePathname();
  console.log(a);
  return (
    <h1>Page not found!</h1>
  );
};


"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  // Execute the query and store its results in a variable
  const { data, isError, error } = trpc.authCallback.useQuery(undefined, {
    retry: true,
    retryDelay: 500,
  });

  // Effect to handle successful authentication
  useEffect(() => {
    if (data?.success) {
      // User is authenticated and synced to db
      router.push(origin ? `/${origin}` : "/dashboard");
    }
  }, [data, router, origin]); // Depend on data and router to rerun this effect appropriately

  // Effect to handle errors, specifically unauthorized access
  useEffect(() => {
    if (isError && error.data?.code === "UNAUTHORIZED") {
      router.push("/sign-in");
    }
  }, [isError, error, router]); // Depend on isError, error, and router

  // Return loading state until the query is resolved
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;

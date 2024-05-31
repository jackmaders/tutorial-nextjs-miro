"use client";

import { ClerkProvider, SignedIn, useAuth } from "@clerk/nextjs";
import { AuthLoading, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => (
  <ClerkProvider>
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <AuthLoading>
        <Loading></Loading>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
    </ConvexProviderWithClerk>
  </ClerkProvider>
);

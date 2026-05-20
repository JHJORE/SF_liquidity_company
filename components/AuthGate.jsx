'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export default function AuthGate({ children }) {
  const { state } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!state.signedIn) {
      router.replace(`/login?from=${encodeURIComponent(pathname || '/dashboard')}`);
    }
  }, [state.signedIn, pathname, router]);

  if (!state.signedIn) return null;
  return children;
}

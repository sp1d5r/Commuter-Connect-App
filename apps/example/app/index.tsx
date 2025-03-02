import { Redirect, router } from 'expo-router';
import { useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function Index() {
  const { user } = useAuth();
  console.log('Index component rendered');

  useEffect(() => {
    // Small timeout to ensure navigation container is ready
    const timer = setTimeout(() => {
      if (user?.uid) {
        router.replace('/(tabs)');
      } else {
        router.replace('/(auth)');
      }
    }, 100);

    // Return a cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, [user]); // Add user as a dependency to re-run the effect if user changes

  return null;
}

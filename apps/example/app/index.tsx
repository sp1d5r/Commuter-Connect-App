import { Redirect, router } from 'expo-router';
import { useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';

export default function Index() {
  const { user } = useAuth();

  useEffect(() => {
    if (user?.uid) {
      router.replace('/(tabs)');
    } else {
      router.replace('/(auth)');
    }
  }, [user]);

  return null;
}

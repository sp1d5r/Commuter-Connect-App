import { Button, Text } from '@commuter-connect/ui';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { useAuth } from '@/context/AuthContext';

export function LandingScreen() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/(auth)');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="h1" style={styles.title}>
          Welcome, {user?.name}!
        </Text>
        <Text variant="body1" color="#666666" style={styles.subtitle}>
          You're now connected to your commuter community
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button variant="outline" size="large" onPress={handleLogout} style={styles.button}>
          Sign Out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: '80%',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    width: '100%',
  },
});

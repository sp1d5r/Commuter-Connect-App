import { Button, Text } from '@commuter-connect/ui';
import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="h1" style={styles.title}>
          Commuter Connect
        </Text>
        <Text variant="body1" style={styles.subtitle} color="#666666">
          Connect with fellow commuters and make your daily journey more enjoyable
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          size="large"
          onPress={() => router.push('/(auth)/register')}
          style={styles.button}
        >
          Sign Up
        </Button>
        <Button
          variant="outline"
          size="large"
          onPress={() => router.push('/(auth)/login')}
          style={styles.button}
        >
          I Already Have an Account
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
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

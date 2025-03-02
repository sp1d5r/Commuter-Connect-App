import { Button, Text } from '@commuter-connect/ui';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { useAuth } from '@/context/AuthContext';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await login(email, password);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (show message to user)
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="h2" style={styles.title}>
          Welcome Back
        </Text>
        <Text variant="body1" color="#666666">
          Sign in to continue
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          size="large"
          onPress={handleLogin}
          loading={loading}
          style={styles.button}
        >
          Sign In
        </Button>
        <Button
          variant="ghost"
          size="large"
          onPress={() => router.push('/(auth)/register')}
          style={styles.button}
        >
          Don't have an account? Sign Up
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
  },
  header: {
    marginTop: 40,
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  form: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 12,
  },
  button: {
    width: '100%',
  },
});

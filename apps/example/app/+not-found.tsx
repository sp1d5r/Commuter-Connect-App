import { Text } from '@commuter-connect/ui';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text variant="h2" style={styles.title}>
          This screen doesn't exist.
        </Text>
        <Link href="/" style={styles.link}>
          <Text variant="body1" color="#007AFF">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

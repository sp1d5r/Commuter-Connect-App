import { ReactNode } from 'react';
import { Text as RNText, TextStyle, StyleSheet, StyleProp } from 'react-native';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption' | 'button';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
  color?: string;
}

export function Text({ children, variant = 'body1', style, color }: TextProps) {
  return (
    <RNText style={[styles.base, styles[variant], color && { color }, style]}>{children}</RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    color: '#000000',
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});

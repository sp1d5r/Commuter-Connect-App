import { Paragraph, Strong } from '@commuter-connect/ui';
import { ComponentProps } from 'react';

type HomeMessageProps = ComponentProps<typeof Paragraph>;

export const HomeMessage = (props: HomeMessageProps) => (
  <Paragraph {...props}>
    Hello from an <Strong>Expo monorepo</Strong>!
  </Paragraph>
);

import { Anchor, Button, H1, H2, H3, YStack } from "tamagui";

export default function Index() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center" gap="$3">
      <H1>React Native</H1>
      <H2>Expo</H2>
      <H3>Tamagui</H3>
      <Button>Hello world</Button>
      <Anchor href="https://github.com/AmanVarshney01" asChild>
        <Button variant="outlined">Github</Button>
      </Anchor>
    </YStack>
  );
}

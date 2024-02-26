import { Link } from 'expo-router';
import { Button, Text, View } from 'tamagui';

const one = () => {
  return (
    <View>
      <Link href="/" replace asChild>
        <Button>Back</Button>
      </Link>
      <Link href="/(tabs)/one/details" asChild>
        <Button>Details</Button>
      </Link>
      <Link href="/(tabs)/one/123" asChild>
        <Button>One 123</Button>
      </Link>
    </View>
  );
};

export default one;

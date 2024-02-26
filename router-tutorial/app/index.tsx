import { View } from '@/components/Themed';
import Header from '@/components/layout/header';
import { Link, useRouter } from 'expo-router';
import { Button } from 'tamagui';

const Index = () => {
  return (
    <View>
        <Link href="/register" asChild>
        <Button>Register</Button>
        </Link>
        <Link href="/(tabs)/one" replace asChild>
        <Button>One</Button>
        </Link>
        <Link href="/two" asChild>
        <Button>Two</Button>
        </Link>
        <Link href="/modal" asChild>
        <Button>Modal</Button>
        </Link>
        
    </View>
  );
};

export default Index;

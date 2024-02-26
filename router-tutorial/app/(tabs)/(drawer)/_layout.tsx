import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="drawer1"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="paper-plane-sharp" color={color} size={24} />
          ),
        }}
      />

      <Drawer.Screen
        name="drawer2"
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="paper-plane-outline" color={color} size={24} />
          ),
        }}
      />
    </Drawer>
  );
};

export default Layout;

import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const Layout = () => {
  return (
    <Tabs> 
        <Tabs.Screen name="one" options={{
          title: 'One',
          tabBarLabel: 'One',
          tabBarIcon: ( { color}) => <Ionicons name="home-outline" color={color} size={24} />,
        }} />
        <Tabs.Screen name="two" options={{
          tabBarLabel: 'Two',
          tabBarIcon: ( { color}) => <Ionicons name="person" color={color} size={24} />,
        }} />
        <Tabs.Screen name="(drawer)" options={{
          headerShown: false
        }} />
    </Tabs>
  )
}

export default Layout
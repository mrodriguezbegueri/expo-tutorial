import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'tamagui'

const PageId = () => {
    const { id } = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>Hola { id }</Text>
    </View>
  )
}

export default PageId
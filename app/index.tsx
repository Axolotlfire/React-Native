import { Text, View } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-500 text-primary font-quicksand text-center">
        Welcome to My React Native App!
      </Text>
    </View>
  );
}

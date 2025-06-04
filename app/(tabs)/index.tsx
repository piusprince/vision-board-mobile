import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GroupCards from "@/components/group-cards";
import { dummyVisionBoards, VisionBoardData } from "@/data/dummy-data";

export default function HomeScreen() {
  const renderVisionBoard = ({ item }: { item: VisionBoardData }) => (
    <GroupCards
      id={item.id}
      subtitle={item.subtitle}
      title={item.title}
      description={item.description}
      imageSource={item.imageSource}
    />
  );

  const handleAddNew = () => {
    // Navigate to add new vision board screen (to be implemented)
    console.log("Add new vision board");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 px-4 pt-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-2xl font-bold text-gray-900">
            Vision Boards
          </Text>
          <TouchableOpacity
            onPress={handleAddNew}
            className="bg-blue-500 w-10 h-10 rounded-full items-center justify-center shadow-lg"
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummyVisionBoards}
          renderItem={renderVisionBoard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

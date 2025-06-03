import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useInspiration } from "@/hooks/useInspiration";

import { CategoryButton } from "@/components/inspiration/CategoryButton";
import { DailyQuoteSection } from "@/components/inspiration/DailyQuoteSection";
import { EmptyState } from "@/components/inspiration/EmptyState";
import { InspirationCard } from "@/components/inspiration/InspirationCard";
import { QuickAction } from "@/components/inspiration/QuickAction";

const Inspiration = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredItems,
    dailyQuote,
    isSaved,
    handleLike,
    handleSave,
  } = useInspiration();

  const handleTakePhoto = () => {
    // Implement camera functionality
    console.log("Opening camera");
  };

  const handleSaveLink = () => {
    // Implement link saving
    console.log("Save link");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="bg-white px-6 py-6 border-b border-gray-100">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            Inspiration
          </Text>
          <Text className="text-gray-600">
            Discover templates and ideas for your vision boards
          </Text>
        </View>

        <DailyQuoteSection
          quote={dailyQuote.quote}
          author={dailyQuote.author}
        />

        <View className="px-4 py-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                selectedCategory={selectedCategory}
                onPress={setSelectedCategory}
              />
            ))}
          </ScrollView>
        </View>

        <View className="px-4 pb-6">
          {filteredItems.length > 0 ? (
            <FlatList
              data={filteredItems}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <InspirationCard
                  item={item}
                  onSave={handleSave}
                  onLike={handleLike}
                  isSaved={isSaved(item.id)}
                />
              )}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <EmptyState message="Try selecting a different category" />
          )}
        </View>

        <View className="px-4 pb-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </Text>
          <View className="flex-row justify-between">
            <QuickAction
              title="Take Photo"
              description="Add inspiration from camera"
              icon="camera-outline"
              onPress={handleTakePhoto}
            />

            <QuickAction
              title="Save Link"
              description="Save from web"
              icon="link-outline"
              onPress={handleSaveLink}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Inspiration;

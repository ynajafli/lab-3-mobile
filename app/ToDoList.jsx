import React from "react";
import { View, Text } from "react-native";

export default function ToDoList({ tasks }) {
  return (
    <View style={{ padding: 20 }}>
      {tasks.map((task, index) => (
        <Text key={index}>
          {task}
        </Text>
      ))}
    </View>
  );
}

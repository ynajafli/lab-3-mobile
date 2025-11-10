import React from "react";
import { Text, View } from "react-native";

export default function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index}>
          {task}
        </Text>
      ))}
    </View>
  );
}

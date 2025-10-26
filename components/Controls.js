import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Controls({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Tambah Blok</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  text: { color: "#fff", fontWeight: "bold" },
});

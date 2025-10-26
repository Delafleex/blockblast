import React from "react";
import { View, StyleSheet } from "react-native";

export default function GameBoard({ grid }) {
  return (
    <View style={styles.grid}>
      {grid.map((row, y) => (
        <View key={y} style={styles.row}>
          {row.map((cell, x) => (
            <View
              key={x}
              style={[
                styles.cell,
                { backgroundColor: cell ? "#4CAF50" : "#ddd" },
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "column" },
  row: { flexDirection: "row" },
  cell: { width: 25, height: 25, margin: 1, borderRadius: 4 },
});

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import GameBoard from "./components/GameBoard";
import Controls from "./components/Controls";

export default function App() {
  const [grid, setGrid] = useState(Array(10).fill().map(() => Array(10).fill(0)));

  const toggleRandomBlock = () => {
    const newGrid = grid.map(row => [...row]);
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    newGrid[y][x] = newGrid[y][x] ? 0 : 1;
    setGrid(newGrid);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧱 Mini BlockBlast</Text>
      <GameBoard grid={grid} />
      <Controls onPress={toggleRandomBlock} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

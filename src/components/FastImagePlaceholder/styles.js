// @flow
import { StyleSheet } from "react-native";
import { Colors } from "../../themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  imagePlaceholderContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholder: {
    flex: 1,
  },
});

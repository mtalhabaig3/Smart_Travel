import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import * as theme from "../theme";

export default function BookmarkIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Bookmarks")}
      style={{
        position: "absolute",
        left: 30,
        bottom: 390,
        borderRadius: 55,
        width: 55,
        height: 55,
        backgroundColor: "#198ace",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesome
        name="bookmark"
        color={theme.colors.white}
        size={theme.sizes.font * 2}
      />
    </TouchableOpacity>
  );
}

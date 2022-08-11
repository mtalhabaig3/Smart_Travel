import React, { Component, useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import BookmarkIcon from "../components/BookmarkIcon";
import * as theme from "../theme";
import { mocks, mocks2 } from "../core/mocks";
import { AsyncStorage } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center",
  },
  articles: {},
  destinations: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 30,
  },
  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 10,
    left: (width - theme.sizes.padding * 3) / (Platform.OS === "ios" ? 3.5 : 5),
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.padding * 4,
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {},
  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.sizes.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white,
  },
  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: "transparent",
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  },
});

const API_KEY = "a074728a9c1e6be576a6af3af11f03c2";

const Articles = ({
  navigation,
  destinations,
  recommendedDestinations,
  route,
}) => {
  const scrollX = new Animated.Value(0);
  const isFocused = useIsFocused();

  const [count, setCount] = useState(0);

  function onClicked(item) {
    item.saved = !item.saved;

    const data = recommendedDestinations.filter(function (item) {
      return item.saved === true;
    });
    setCount(data.length);

    if (item.saved === true) {
      Alert.alert(`Added "${item.title}" to Bookmarks.`);
    } else {
      Alert.alert(`Removed "${item.title}" from Bookmarks.`);
    }
  }

  useEffect(() => {
    const data = recommendedDestinations.filter(function (item) {
      return item.saved === true;
    });
    setCount(data.length);
  }, [isFocused]);

  // function setting(item) {
  //   item.saved = clicked;
  // }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          { justifyContent: "center", alignItems: "center", marginTop: 10 },
        ]}
      >
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth },
              ]}
            />
          );
        })}
      </View>
    );
  }

  function renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? "active" : "gray"]}
        />
      );
    });
  }

  function renderDestinations() {
    return (
      <View style={[styles.column, styles.destinations]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow: "visible", height: 280 }}
          data={destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: scrollX } },
              },
            ],
            { useNativeDriver: false }
          )}
          renderItem={({ item }) => renderDestination(item)}
        />
        {renderDots()}
      </View>
    );
  }

  function renderDestination(item) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Article", { article: item })}
      >
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
            </View>
            <View
              style={[
                styles.column,
                { flex: 2, paddingHorizontal: theme.sizes.padding / 2 },
              ]}
            >
              <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                {item.user.name}
              </Text>
              <Text style={{ color: theme.colors.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
            <View
              style={{
                flex: 0,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: "500",
                paddingBottom: 8,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ fontSize: theme.sizes.font * 1.25, marginLeft: 40 }}>
              {item.temperature}℃
            </Text>
          </View>
          <View
            style={[
              styles.row,
              { justifyContent: "space-between", alignItems: "flex-end" },
            ]}
          >
            <Text style={{ color: theme.colors.caption }}>
              {item.description.split("").slice(0, 50)}...
            </Text>
            <FontAwesome
              name="chevron-right"
              size={theme.sizes.font * 0.75}
              color={theme.colors.caption}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderRecommended() {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Recommended")}
          >
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[styles.shadow, { overflow: "visible" }]}
            data={recommendedDestinations.slice(0, 4)}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  }

  function renderRecommendation(item, index) {
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          styles.shadow,
          index === 0 ? { marginLeft: theme.sizes.margin } : null,
          isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Article", { article: item })}
        >
          <View style={[styles.flex, styles.recommendationHeader]}>
            <Image
              style={[styles.recommendationImage]}
              source={{ uri: item.preview }}
            />
            <View
              style={[styles.flex, styles.row, styles.recommendationOptions]}
            >
              <Text style={styles.recommendationTemp}>
                {Math.round(item.temperature)}℃
              </Text>
              <TouchableOpacity
                onPress={() => {
                  onClicked(item);
                }}
              >
                <FontAwesome
                  name={item.saved ? "bookmark" : "bookmark-o"}
                  color={theme.colors.white}
                  size={theme.sizes.font * 2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.flex,
              styles.column,
              styles.shadow,
              {
                justifyContent: "space-evenly",
                padding: theme.sizes.padding / 2,
              },
            ]}
          >
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: "500",
                paddingBottom: theme.sizes.padding / 4.5,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
            <View
              style={[
                styles.row,
                {
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: theme.sizes.margin,
                },
              ]}
            >
              {renderRatings(item.rating)}
              <Text style={{ color: theme.colors.active }}>{item.rating}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text style={{ color: theme.colors.caption }}>Search for place</Text>
          <Text style={{ fontSize: theme.sizes.font * 2 }}>Destination</Text>
        </View>
        {/* <View> */}
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={styles.avatar}
            source={require("../assets/Scared_man.jpeg")}
          />
        </TouchableOpacity>
        {/* </View> */}
      </View>

      <SafeAreaView style={{ position: "absolute", top: 123 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
        >
          {renderDestinations()}

          {renderRecommended()}
          <BookmarkIcon />
          {count != 0 && (
            <View
              style={{
                position: "absolute",
                left: 30,
                bottom: 430,
                borderRadius: 23,
                width: 23,
                height: 23,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white" }}>{count}</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Articles.defaultProps = {
  destinations: mocks,
  recommendedDestinations: mocks2,
};

export default Articles;

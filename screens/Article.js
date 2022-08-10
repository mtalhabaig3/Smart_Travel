import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import BackButton from "../components/BackButton";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as theme from "../theme";

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
    // backgroundColor: 'transparent',
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  content: {
    // backgroundColor: theme.colors.active,
    // borderTopLeftRadius: theme.sizes.border,
    // borderTopRightRadius: theme.sizes.border,
  },
  contentHeader: {
    backgroundColor: "transparent",
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: "absolute",
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 36,
    right: 0,
    left: 0,
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: "bold",
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption,
    flexDirection: "row",
    // flex: 1,
  },
});

const Articles = ({ navigation, route }) => {
  const [clicked, setClicked] = useState(false);

  function onClicked() {
    setClicked(!clicked);
  }
  let scrollX = new Animated.Value(0);

  const renderDots = () => {
    const article = route.params.article;
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={[styles.flex, styles.row, styles.dotsContainer]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          );
        })}
      </View>
    );
  };

  const renderRatings = (rating) => {
    const stars = new Array(5).fill(0);
    return stars.map((_, index) => {
      const activeStar = Math.floor(rating) >= index + 1;
      return (
        <FontAwesome
          name="star"
          key={`star-${index}`}
          size={theme.sizes.font}
          color={theme.colors[activeStar ? "active" : "gray"]}
          style={{ marginRight: 4 }}
        />
      );
    });
  };

  const article = route.params.article;

  return (
    // <SafeAreaView>
    <>
      <View style={styles.flex}>
        <View style={[styles.flex]}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { x: scrollX } },
                },
              ],
              { useNativeDriver: false }
            )}
          >
            {article.images.map((img, index) => (
              <Image
                key={`${index}-${img}`}
                source={{ uri: img }}
                resizeMode="cover"
                style={{ width, height: width }}
              />
            ))}
          </ScrollView>
          {renderDots()}
        </View>
        <View style={[styles.flex, styles.content]}>
          <View style={[styles.flex, styles.contentHeader]}>
            <Image
              style={[styles.avatar, styles.shadow]}
              source={{ uri: article.user.avatar }}
            />
            <Text style={styles.title}>{article.title}</Text>
            <View
              style={[
                styles.row,
                {
                  alignItems: "center",
                  marginVertical: theme.sizes.margin / 2,
                },
              ]}
            >
              {renderRatings(article.rating)}
              <Text style={{ color: theme.colors.active }}>
                {article.rating}
              </Text>
              <Text style={{ marginLeft: 8, color: theme.colors.caption }}>
                ({article.reviews} reviews)
              </Text>
            </View>

            <ScrollView
              style={{ height: 300 }}
              showsVerticalScrollIndicator={false}
            >
              {!clicked ? (
                <Text style={styles.description}>
                  {article.description.split("").slice(0, 180)}...
                  <TouchableOpacity onPress={() => onClicked()}>
                    <Text style={{ color: theme.colors.active }}>
                      Read more
                    </Text>
                  </TouchableOpacity>
                </Text>
              ) : (
                <Text style={styles.description}>
                  {article.description}
                  <TouchableOpacity onPress={() => onClicked()}>
                    <Text style={{ color: theme.colors.active }}>
                      Read less
                    </Text>
                  </TouchableOpacity>
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
      <BackButton goBack={() => navigation.goBack()} />
    </>
    // </SafeAreaView>
  );
};

export default Articles;

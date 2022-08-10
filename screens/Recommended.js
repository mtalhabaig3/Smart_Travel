import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import BackButton from "../components/BackButton";
import { mocks, mocks2 } from "../core/mocks";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as theme from "../theme";

const { width, height } = Dimensions.get("window");

const Recommended = ({ navigation, recommendedDestinations, route }) => {
  const [clicked, setClicked] = useState(false);
  const [markedhere, setMarkedHere] = useState(0);

  async function fetchWeatherData(item) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${item.title}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        const {
          main: { temp, humidity },
        } = data;
        item.temperature = temp;
      } else {
        console.log("error!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function onClicked(item) {
    item.saved = !item.saved;
    if (item.saved === true) {
      setMarkedHere(markedhere + 1);
      Alert.alert(`Added "${item.title}" to Bookmarks.`);
    } else {
      setMarkedHere(markedhere - 1);
      Alert.alert(`Removed "${item.title}" from Bookmarks.`);
    }
    setClicked(!clicked);
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
  function renderRecommended() {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.row2}
            pagingEnabled
            scrollEnabled
            // showsHorizontalScrollIndicator={false}
            // scrollEventThrottle={16}
            snapToAlignment="center"
            style={styles.shadow}
            data={recommendedDestinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  }

  function renderRecommendation(item, index) {
    // fetchWeatherData(item);

    const isLastItem = index === recommendedDestinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          styles.shadow,
          index % 2 === 0 ? { marginLeft: theme.sizes.margin } : null,
          index === 3 || index === 1 || index === 5
            ? { marginRight: 25 }
            : null,
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.row, styles.recommendedHeader]}>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("List", { markedhere })}
        > */}
        <Text style={{ fontSize: theme.sizes.font * 2, fontWeight: "bold" }}>
          Recommended
        </Text>
        {/* </TouchableOpacity> */}
      </View>
      {renderRecommended()}
      <BackButton goBack={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

Recommended.defaultProps = {
  recommendedDestinations: mocks2,
};

export default Recommended;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  row2: {
    flex: 1,
    justifyContent: "space-around",
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
  recommended: { flex: 1 },
  recommendedHeader: {
    justifyContent: "center",
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
    marginVertical: theme.sizes.margin * 1,
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

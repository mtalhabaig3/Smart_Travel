import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { storage } from "./firebase";

export async function pickImage() {
  let result = ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  return result;
}

export async function takeImage() {
  let result = ImagePicker.launchCameraAsync();
  return result;
}

export async function askForPermission() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  return status;
}

export async function uploadImage(uri, path, fName) {
  // const blob = await new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.onload = function () {
  //     resolve(xhr.response);
  //   };
  //   xhr.onerror = function (e) {
  //     console.log(e);
  //     reject(new TypeError("Network request failed"));
  //   };
  //   xhr.responseType = "blob";
  //   xhr.open("GET", uri, true);
  //   xhr.send(null);
  // });

  // const fileName = fName || nanoid();
  // const imageRef = ref(storage, `${path}/${fileName}.jpeg`);

  // const snapshot = await uploadBytes(imageRef, blob, {
  //   contentType: "image/jpg",
  // });

  // blob.close();

  // const url = await getDownloadURL(snapshot.ref);

  // return { url, fileName };
  const storage = getStorage();
  const profileRef = ref(storage, path);

  // App Crashing because of newer version of firebase.

  // const img = await fetch(uri);
  // const blob = await img.blob();
  // const newFile = new File([blob], `${path}.jpeg`, {
  //   type: "image/jpg",
  // });

  await uploadBytes(profileRef, uri);

  const url = await getDownloadURL(profileRef);

  return url;
}

const palette = {
  tealGreen: "#128c7e",
  tealGreenDark: "#075e54",
  green: "#25d366",
  lime: "#dcf8c6",
  skyblue: "#34b7f1",
  smokeWhite: "#ece5dd",
  white: "white",
  gray: "#3C3C3C",
  lightGray: "#757575",
  iconGray: "#717171",
};

export const theme = {
  colors: {
    background: palette.smokeWhite,
    foreground: palette.tealGreenDark,
    primary: palette.tealGreen,
    tertiary: palette.lime,
    secondary: palette.green,
    white: palette.white,
    text: palette.gray,
    secondaryText: palette.lightGray,
    iconGray: palette.iconGray,
    skyblue: palette.skyblue,
  },
};

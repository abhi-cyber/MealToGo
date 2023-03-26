import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCREbJ29uIGeduyVgh4OL8nFrpy4mT6u_0",
  authDomain: "mealstogo-5bb69.firebaseapp.com",
  projectId: "mealstogo-5bb69",
  storageBucket: "mealstogo-5bb69.appspot.com",
  messagingSenderId: "653375549258",
  appId: "1:653375549258:web:3ca757e4b5586717741bb3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "email.2003@gmail.com", "password")
        .then((user) => {
          // Signed in
          console.log(user);
          setIsAuthenticated(true);
          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, []);
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

import React from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import AppLoading from "expo-app-loading";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
}
/*
comando para start do server local:
json-server ./src/services/server.json --host 192.168.56.1 --port 3333

*/

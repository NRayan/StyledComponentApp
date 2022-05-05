import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import { dark, light } from './src/theme';

export default function App() {

  const [currentTheme, setCurrentTheme] = useState(dark)

  useEffect(() => {
    DeviceEventEmitter.addListener("@CHANGE_THEME", handleThemeChange);
  }, []);


  function handleThemeChange(darkTheme) {
    setCurrentTheme(darkTheme ? dark : light);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <StatusBar style={currentTheme === dark ? "light" : "dark"} />
      <Home />
    </ThemeProvider>
  );
}

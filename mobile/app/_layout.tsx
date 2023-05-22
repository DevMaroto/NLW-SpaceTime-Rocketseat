import { styled } from 'nativewind'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import { ImageBackground } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticate] = useState<null | boolean>(
    null,
  )

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then((token) => {
      setIsUserAuthenticate(!!token)
    })
  }, [])

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  // eslint-disable-next-line no-lone-blocks

  /* foi colocado px-9 (padding 32px) para dar um respiro da frase nas laterais da tela, em dispositivos menores (2400X1080) vai ter que utilizar padding px-20 galaxy s20 fe */

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      {/* como não foi criado com css e sim por uma importação SVG tive que colocar um bottom para posicionar a Stripes (meu dispositivo galaxy s20 fe ficou bom, mas para dispositivos maiores (1080x2400)vai ter que utilizar bottom-2) */}
      <StyledStripes className="absolute bottom-5 left-2" />
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="new" />
        <Stack.Screen name="memories" />
      </Stack>
    </ImageBackground>
  )
}

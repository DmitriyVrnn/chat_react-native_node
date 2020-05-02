import * as Font from 'expo-font';

export async function bootstrap() {
  try {
    await Font.loadAsync({
      'roboto-bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
      'roboto-regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),

      'noto-sans-black': require('./src/assets/fonts/NotoSans/NotoSansTC-Black.otf'),
    });
  } catch (e) {
    console.log(e);
  }
}

import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.MAIN_COLOR,
    justifyContent: 'center',
  },
  inputWrap: {
    backgroundColor: '#465881',
    width: '80%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  form: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    height: 50,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'roboto-regular'
  },
  buttonWrap: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    backgroundColor: COLORS.SECOND_COLOR,
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'roboto-bold'
  },
  textGoToSignUp: {
    position: 'relative',
    right: 10,
    color: COLORS.BLUE_COLOR,
  }
});

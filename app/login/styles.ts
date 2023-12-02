import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F7FC',
  },
  blueBg: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#0F358E',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bgText1: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 54,
  },
  bgText2: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'BM',
    width: 240,
    textAlign: 'center',
    marginTop: 35,
  },
  mainWrap: {
    width: 343,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    boxShadow: '0px 6px 24px 0px rgba(15, 53, 142, 0.08)',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -96,
  },
  tabWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 24,
  },
  tabItem: {
    fontSize: 16,
    color: '#646566',
  },
  tabItemActive: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  inputWrap: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 10,
  },
  inputCodeWrap: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  forget: {
    color: '#646566',
    fontSize: 14,
    paddingLeft: 24,
  },
  registerWrap: {
    position: 'relative',
    paddingTop: 60,
  },
  registerTitle: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    position: 'absolute',
    left: 24,
    top: 34,
  },
  registerStep: {
    color: '#646566',
    fontSize: 14,
    position: 'absolute',
    right: 24,
    top: 34,
  },
  passwordRuleWrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  passwordRulePoint: {
    width: 7,
    height: 7,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    marginRight: 14
  },
  passwordRule: {
    color: '#969799',
    fontSize: 12,
    lineHeight: 20
  }
});

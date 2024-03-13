import {StyleSheet} from 'react-native';

const GlobalStyles = StyleSheet.create({
  h1: {fontSize: 28, fontWeight: '600', color: '#000'},
  h2: {fontSize: 16, fontWeight: '600'},
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  // Add more global styles as needed
});

export default GlobalStyles;

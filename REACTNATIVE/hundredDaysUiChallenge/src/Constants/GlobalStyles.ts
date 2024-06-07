import {StyleSheet} from 'react-native';

const GlobalStyles = StyleSheet.create({
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
  cta: {
    backgroundColor: '#19c563',
    padding: 14,
    width: 160,
    borderRadius: 30,
  },
  ctaText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GlobalStyles;

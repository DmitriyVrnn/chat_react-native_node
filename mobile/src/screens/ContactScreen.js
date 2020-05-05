import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme';


export const ContactScreen = () => {
  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapSearchBar}>
        <SearchBar
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   width: '100%',
  //   backgroundColor: COLORS.MAIN_COLOR,
  //   justifyContent: 'center',
  // },
});

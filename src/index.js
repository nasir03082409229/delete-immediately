import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import search_icon from './assets/images/search_icon.png';
import sort_icon from './assets/images/sort_icon.png';
import filter_icon from './assets/images/filter_icon.png';
import avatar from './assets/images/avatar.png';
import red_warning from './assets/images/red_warning.png';
import arrow_right_blue from './assets/images/arrow_right_blue.png';
import lock_orange from './assets/images/lock_orange.png';

export default Beneficiaries = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.tagsContainer}>
        <View style={styles.tagContainer}>
          <TouchableOpacity style={styles.activeTagBtn}>
            <Text style={styles.activeTag}>Added </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inActiveTagBtn}>
            <Text style={styles.inActiveTag}>Removed </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterContainer}>
          <View style={styles.filterIconContainer}>
            <Image source={search_icon} />
          </View>
          <View style={styles.filterIconContainer}>
            <Image source={sort_icon} />
          </View>
          <View style={styles.filterIconContainer}>
            <Image source={filter_icon} />
          </View>
        </View>
      </View>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>Suspicious (2) </Text>
      </View>
      <View style={styles.sectionItemContainer}>
        <View style={styles.flex1}>
          <Text style={styles.itemHeader}>Cameron Williamson </Text>
          <Text style={styles.itemSubHeader}>
            $2 · Last claimed 7 days ago{' '}
          </Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image source={avatar} />
          <Image
            source={red_warning}
            style={styles.warningImage}
            resizeMode={'contain'}
          />
          <Image
            source={arrow_right_blue}
            style={styles.arrowRight}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={styles.sectionItemContainer}>
        <View style={styles.flex1}>
          <Text style={styles.itemHeader}>
            Guy Hawkins <Image source={lock_orange} />
          </Text>
          <Text style={styles.itemSubHeader}>
            $0 · Last claimed 34 days ago{' '}
          </Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={red_warning}
            style={styles.warningImage}
            resizeMode={'contain'}
          />
          <Image
            source={arrow_right_blue}
            style={styles.arrowRight}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>Non-suspicious (2) </Text>
      </View>
      <View style={styles.sectionItemContainer}>
        <View style={styles.flex1}>
          <Text style={styles.itemHeader}>Cameron Williamson </Text>
          <Text style={styles.itemSubHeader}>$35 Claimed </Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={arrow_right_blue}
            style={styles.arrowRight}
            resizeMode={'contain'}
          />
        </View>
      </View>

      <View style={styles.sectionItemContainer}>
        <View style={styles.flex1}>
          <Text style={styles.itemHeader}>
            0xc1912fEDSKJSA59aE31 <Image source={lock_orange} />
          </Text>
          <Text style={styles.itemSubHeader}>$35 Claimed </Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={arrow_right_blue}
            style={styles.arrowRight}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, paddingTop: StatusBar.currentHeight },
  tagsContainer: { flexDirection: 'row', paddingHorizontal: 20 },
  tagContainer: { flexDirection: 'row', flex: 1 },
  activeTagBtn: {
    borderRadius: 25,
    backgroundColor: '#1E3252',
    overflow: 'hidden',
  },
  inActiveTagBtn: {
    borderRadius: 25,
    backgroundColor: '#E9EDF4',
    marginHorizontal: 6,
  },
  activeTag: {
    color: '#fff',
    paddingHorizontal: 20,
    fontSize: 15,
    paddingVertical: 8,
    fontFamily: 'Inter-Medium'
  },
  inActiveTag: {
    marginHorizontal: 10,
    color: '#333239',
    paddingHorizontal: 15,
    fontSize: 15,
    paddingVertical: 8,
    fontFamily: 'Inter-Medium'

  },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  filterIconContainer: {
    backgroundColor: '#E9EDF4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  sectionHeaderContainer: {
    backgroundColor: '#E9EDF4',
    height: 45,
    marginTop: 16,
    justifyContent: 'center',
  },
  sectionHeaderText: { fontSize: 16, marginHorizontal: 25, fontWeight: 'bold' },
  sectionItemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    fontFamily: 'Manrope-ExtraBold'
  },
  flex1: { flex: 1 },
  itemHeader: {
    fontSize: 18,
    marginHorizontal: 25,
    color: '#333239',
    marginBottom: 3,
    fontFamily: 'Manrope-ExtraBold'

  },
  itemSubHeader: {
    fontSize: 16,
    marginHorizontal: 25,
    color: '#73839D',
    marginTop: 3,
    fontFamily: 'Inter-Regular'
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  warningImage: { width: 20, height: 20, marginHorizontal: 15 },
  arrowRight: { width: 12, height: 12 },
});
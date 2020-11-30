import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import images from '../../res/img';

export default class LichHocComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    LocaleConfig.locales['fr'] = {
      monthNames: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
      ],
      monthNamesShort: [
        'Janv.',
        'Févr.',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juil.',
        'Août',
        'Sept.',
        'Oct.',
        'Nov.',
        'Déc.',
      ],
      dayNames: [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
      ],
      dayNamesShort: ['T2.', 'T3.', 'T4.', 'T5.', 'T6.', 'T7.', 'CN.'],
      today: 'Mardi',
    };
    LocaleConfig.defaultLocale = 'fr';
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#820014"
        />
        <View style={{height: 60, width: '100%'}}>
          <View
            style={{
              height: 60,
              width: '100%',
              backgroundColor: '#ffffff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: '#262626', fontSize: 20, marginLeft: 15}}>
              Lịch học
            </Text>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Calendar
            markedDates={{
              '2020-11-12': {
                periods: [
                  {startingDay: false, endingDay: true, color: '#5f9ea0'},
                  {startingDay: false, endingDay: true, color: '#ffa500'},
                  {startingDay: true, endingDay: false, color: '#f0e68c'},
                ],
              },
              '2020-11-17': {
                periods: [
                  {startingDay: false, endingDay: false, color: '#ffa500'},
                  {color: 'transparent'},
                  {startingDay: false, endingDay: false, color: '#f0e68c'},
                ],
              },
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType="multi-period"
          />
        </View>
        <View style={{flex: 1, padding: 10}}>
          <Text style={{color: '#161616', padding: 5, fontSize: 20}}>
            Hôm nay
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                borderRadius: 0,
                padding: 10,
                backgroundColor: '#ffffff',
              }}>
              <Text>Ca 2</Text>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={images.ic_monhoc}
                  style={{width: 25, height: 30, marginRight: 10}}
                  resizeMode="center"
                />
                <Text style={{alignItems: 'center'}}>
                  Môn học: Trí tuệ nhân tạo
                </Text>
              </View>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={images.ic_coso}
                  style={{width: 25, height: 30, marginRight: 10}}
                  resizeMode="center"
                />
                <Text style={{alignItems: 'center'}}>Cở sở: E1- phòng 2</Text>
              </View>
            </View>

            <View
              style={{
                borderRadius: 0,
                padding: 10,
                marginTop: 10,
                backgroundColor: '#ffffff',
              }}>
              <Text>Ca 2</Text>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={images.ic_monhoc}
                  style={{width: 25, height: 30, marginRight: 10}}
                  resizeMode="center"
                />
                <Text style={{alignItems: 'center'}}>
                  Môn học: Trí tuệ nhân tạo
                </Text>
              </View>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={images.ic_coso}
                  style={{width: 25, height: 30, marginRight: 10}}
                  resizeMode="center"
                />
                <Text style={{alignItems: 'center'}}>Cở sở: E1- phòng 2</Text>
              </View>
            </View>

            <View
              style={{
                borderRadius: 0,
                padding: 10,
                marginTop: 10,
                backgroundColor: '#ffffff',
              }}>
              <Text>Ca 2</Text>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={images.ic_monhoc}
                  style={{width: 25, height: 30, marginRight: 10}}
                  resizeMode="center"
                />
                <Text style={{alignItems: 'center'}}>
                  Môn học: Trí tuệ nhân tạo
                </Text>
              </View>
              <View style={{flexDirection: 'row', padding: 5}}>
                <Image
                  source={images.ic_coso}
                  style={{width: 25, height: 30, marginRight: 10}}
                  resizeMode="center"
                />
                <Text style={{alignItems: 'center'}}>Cở sở: E1- phòng 2</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

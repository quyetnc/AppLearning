import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {userData, DataGetSubject, API_URL} from '../../config/setting';
export default class ChooseYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NamHocData: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const result = await fetch(
      `${API_URL}/GetNamHoc?nKhoa=${userData.IDNIENKHOA}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .catch((error) => {
        alert('Vui lòng kiểm tra internet!');
      });
    if (result != undefined) {
      if (result.Success == true) {
        console.log(result);
        this.setState({NamHocData: result.Data});
      } else {
        alert('Dữ liệu nhận về thất bại');
      }
    }
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 60, width: '100%', flexDirection: 'row'}}>
          <View
            style={{
              height: 60,
              width: '100%',
              backgroundColor: '#ffffff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#262626',
                fontSize: 20,
                marginLeft: 15,
                fontWeight: 'bold',
              }}>
              Môn học
            </Text>
            {/* <Button title="Check" onPress={() => console.log(userData)} /> */}
          </View>
        </View>

        <View>
          <Text style={{alignSelf: 'center'}}>
            Lựa chọn năm học bạn muốn xem
          </Text>
          {this.state.NamHocData.map((item) => {
            return (
              <TouchableOpacity
                style={{
                  width: '85%',
                  height: 35,
                  backgroundColor: 'aqua',
                  alignSelf: 'center',
                  marginVertical: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.32,
                  shadowRadius: 5.46,

                  elevation: 9,
                }}
                onPress={() => {
                  DataGetSubject.idNam = item.IDNAM;
                  console.log('ok');
                  this.props.navigation.navigate('HocLucc');
                }}>
                <Text>{item.TENNAM}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

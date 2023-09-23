import {View, Text, SafeAreaView} from 'react-native';
import React, {FC} from 'react';

const Home: FC = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#375E53', padding: 12}}>
      <View style={{padding: 12}}>
        <View style={{alignItems:'center', paddingBottom:12}}>
          <Text style={{color:'white', fontWeight: '700',fontSize:18}}>Dashboard</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#375E53', fontWeight: '700'}}>Stock take</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:13}}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            flex:0.48
          }}>
          <Text style={{color: '#375E53', fontWeight: '700', }}>Stock take</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            flex:0.48
          }}>
          <Text style={{color: '#375E53', fontWeight: '700'}}>Stock take</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

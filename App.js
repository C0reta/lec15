import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {

  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')

  var container = { flex: 1, paddingTop: 50 };
  var box = { margin: 20 };
  var text = { fontSize: 20, marginVertical: 10 };

  function onDateChange(d) {
    console.log(d);
    console.log(d.toString());
    console.log(d.getFullYear(), d.getMonth(), d.getDate());
    console.log(d.toDateString());
    console.log(d.toLocaleString());

    // getMonth: 0~11 getDate: 날짜 그대로
    setDate(d.getFullYear() + " " + (d.getMonth() + 1) + " " + d.getDate());
    // day month date year
    setDate1(d.toDateString());
  }
  return (
    <View style={container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={box}>
        <Text>Date: {date}</Text>
        <Text style={text}> {date1}</Text>
      </View>
    </View>
  );
}

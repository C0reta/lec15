import { Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')
  const [expense, setExpense] = useState('')
  const [memo, setMemo] = useState('')

  const [selectedDate, setSelectedDate] = useState(null);

  var container = { flex: 1, paddingTop: 50 };
  var box = { marginTop: 10, marginHorizontal: 20 };
  var text = { fontSize: 16, marginVertical: 10 };
  var datetext = { fontSize: 16, marginVertical: 10 };
  var row_st = { flexDirection: 'row', alignItems: 'center' };
  var expense_st = { flex: 1, borderBottomWidth: 1, marginHorizontal: 10, fontSize: 16, color: 'blue' };
  var memo_st = { borderBottomWidth: 1, fontSize: 16, marginTop: 10, paddingBottom: 10, color: 'blue' };

  async function onDateChange(dt) {
    if (!dt) return;
    const d = dt.toDate();
    console.log(d.getFullYear(), d.getMonth() + 1, d.getDate());

    var key = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString();

    setDate(key);
    setDate1(d.toDateString());
    setSelectedDate(d);

    var value = await AsyncStorage.getItem(key);
    var value_m = await AsyncStorage.getItem(key + "m");

    console.log(value);


    setExpense(value !== null ? value : '');
    setMemo(value_m !== null ? value_m : '');
  }

  async function save_memo() {
    if (date === '') {
      alert("날짜를 선택해 주세요");
      return;
    } try {
      await AsyncStorage.setItem(date, expense);
      await AsyncStorage.setItem(date + 'm', memo);
    } catch (e) {
      console.error(e);
    }

  }
  return (
    <View style={container}>
      <CalendarPicker onDateChange={onDateChange} selectedStartDate={selectedDate} />
      <View style={box}>
        <Text style={datetext}> {date1}</Text>
        <View style={row_st}>
          <Text style={text}>Expense</Text>
          <TextInput style={expense_st} keyboardType='numeric' onChangeText={setExpense} value={expense} />
          <Button title="SAVE" onPress={save_memo} />
        </View>
        <TextInput style={memo_st} placeholder='Memo' onChangeText={setMemo} value={memo} />
      </View>
    </View>
  );
}

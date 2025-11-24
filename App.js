import { Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {

  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')
  const [expense, setExpense] = useState('')
  const [memo, setMemo] = useState('')

  var container = { flex: 1, paddingTop: 50 };
  var box = { marginTop: 10, marginHorizontal: 20 };
  var text = { fontSize: 16, marginVertical: 10 };
  var datetext = { fontSize: 16, marginVertical: 10 };
  var row_st = { flexDirection: 'row', alignItems: 'center' };
  var expense_st = { flex: 1, borderBottomWidth: 1, marginHorizontal: 10, fontSize: 16, color: 'blue' };
  var memo_st = { borderBottomWidth: 1, fontSize: 16, marginTop: 10, paddingBottom: 10, color: 'blue' };

  function onDateChange(d) {
    console.log(d.getFullYear() + " " + (d.getMonth() + 1) + " " + d.getDate());
    // getMonth: 0~11 getDate: 날짜 그대로
    setDate(d.getFullYear() + " " + (d.getMonth() + 1) + " " + d.getDate());
    // day month date year
    setDate1(d.toDateString());
  }
  return (
    <View style={container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={box}>
        <Text style={datetext}> {date1}</Text>
        <View style={row_st}>
          <Text style={text}>Expense</Text>
          <TextInput style={expense_st} keyboardType='numeric' onChangeText={setExpense} />
          <Button title="SAVE" />
        </View>
        <TextInput style={memo_st} placeholder='Memo' onChangeText={setMemo} />
      </View>
    </View>
  );
}

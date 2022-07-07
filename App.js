import { StatusBar } from 'expo-status-bar';
import React from "react";
import { render } from 'react-dom';
import {
  StyleSheet,
  Text, Image, TextInput, Button, Switch,
  View, ScrollView,
  FlatList, SectionList,
  Platform, 


  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

const List1 = function(props) {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={function({item}) {
          return <View style={{flexDirection: "row"}}>
            <Text style={{flex: "auto", fontWeight: "bold"}}>{item.f}:</Text>
            <Text style={{flex: "auto"}}>{item.v}</Text>
          </View>
        }}
        />
      <StatusBar style="auto" />
    </View>
  )
}

// class component
class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this._onPressEvent = this._onPressEvent.bind(this);
    this._onLongPressEvent = this._onLongPressEvent.bind(this);
  }
  _onPressEvent = function() {
    this.setState({ count: this.state.count + 1 });
    alert("onPress "+this.state.count);
  }
  _onLongPressEvent = function() {
    this.setState({ count: this.state.count + 2 });
    alert("onLongPress "+this.state.count);
  }
  render() {
    return (
      <TouchableHighlight
        style={{padding: 10, borderRadius: 6}}
        underlayColor="#DDDDDD"
        // onShowUnderlay={}
        onPress={this._onPressEvent}
        onLongPress={this._onLongPressEvent}
        delayLongPress={1000}>
          <Text>Press Me</Text>
      </TouchableHighlight>
    )
  }
}

// function component
const Button2 = function() {
  const [count, setCount] = React.useState(0);
  const _onPressEvent = function() {
    setCount(count + 1);
    alert("onPress "+count);
  }
  const _onLongPressEvent = function() {
    setCount(count + 2);
    alert("onLongPress"+count);
  }
  return (
    <TouchableHighlight  
      style={{padding: 10, borderRadius: 6}}
      underlayColor="#DDDDDD"
      onPress={_onPressEvent}
      onLongPress={_onLongPressEvent}
      delayLongPress={1000}>
        <Text>Press Me</Text>
    </TouchableHighlight>
  )
} 

export default function App() {
  return (
    <View style={[styles.container]}>
      <List1 data={[
          {f: "Tag", v: "List1"},
          {f: "Platform.OS", v: Platform.OS},
          {f: "Platform.Version", v: Platform.Version},
        ]}/>
      <View style={{flexDirection: "row"}}>
        <Button1 />
        <Button2 />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? (Platform.Version > 11 ? 32 : 18) : 0,
  },
});

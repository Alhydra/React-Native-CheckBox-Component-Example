import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CheckBox} from "native-base"

export default class App extends React.Component {
  state={
    selectedLang:0
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>What's your favorite programming language?</Text>
        <View style={styles.item} >
            <CheckBox checked={this.state.selectedLang===1} color="#fc5185" onPress={()=>this.setState({selectedLang:1})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===1?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===1? "bold" :"normal"
              }}
              >Python</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang===2} color="#fc5185" onPress={()=>this.setState({selectedLang:2})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===2?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===2? "bold" :"normal"
              }}
              >Javascript</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang===3} color="#fc5185" onPress={()=>this.setState({selectedLang:3})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===3?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===3? "bold" :"normal"
              }}
              >Php</Text>
        </View>
        <View style={styles.item}>
            <CheckBox checked={this.state.selectedLang===4} color="#fc5185" onPress={()=>this.setState({selectedLang:4})}/>
            <Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===4?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===4? "bold" :"normal"
              }}
              >C#</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={{color:"white"}}>SUBMIT</Text>
        </TouchableOpacity>
  
  
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});

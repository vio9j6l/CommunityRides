import React, { Component } from 'react'

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native'

class Config extends Component{

  constructor(props){
    super(props);

    this.state={
      Username: '',
      Password: '',
      data:'',
    }
  }

  getUselist(){
    try{
      fetch('http://10.0.0.17:8082/listUsers', {
        method: "GET",
      })
      .then(res => res.text())
      .then((response) => { console.log(response);
         this.setState({data: response})
        })
    }
    catch(e){
      console.log(e)
      }
  }

  userInfo(){
    var data = {
      username: this.state.Username,
      password: this.state.Password
    }

    try{
      fetch('http://10.0.0.17:8082/signup', {
        method: "Post",
        headers:{
          'Accept': 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.text())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Post sent:', response));
    }
    catch(e) {
      console.log(e)
      }

  }
    render(){
      return(
        <View style = {styles.container}>
          <Text style = {styles.HeaderText}>
          SignIn
          <TouchableOpacity style = {styles.transparentButton}
            //onPress = {this.getUselist.bind(this)}
            >
              <Text style = {styles.SignUpHeaderText}> Signup</Text>
            </TouchableOpacity>
          </Text>
          <TextInput style={styles.boarder}
            placeholder = "Username"
            placeholderTextColor = "#FCFBFC"
            autoCapitalize = "none"
            onChangeText = {text => this.setState({Username: text})}
            />
          <TextInput style={styles.boarder}
            placeholder = "Password"
            placeholderTextColor = "#FCFBFC"
            autoCapitalize = "none"
            onChangeText = {text => this.setState({Password: text})} />

          <TouchableOpacity style = {styles.submitButton}
            onPress = {this.userInfo.bind(this)}
            >
              <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

          <TouchableOpacity style = {styles.transparentButton}
            //onPress = {this.getUselist.bind(this)}
            >
              <Text style = {styles.paragraph}> Forgot Password</Text>
            </TouchableOpacity>

          <TouchableOpacity style = {styles.submitButton}
            onPress = {this.getUselist.bind(this)}
            >
              <Text style = {styles.submitButtonText}> TEST </Text>
            </TouchableOpacity>

          <Text >
            {this.state.data}
            </Text>

          <Text style = {styles.companyName}>
          Community Rides
            </Text>



          </View>
      )
    }
  }
  export default Config

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C86EE',
    },

    companyName:{
      marginTop: 300,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FCFBFC',
    },


    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FCFBFC',
    },

    HeaderText: {
      margin: 15,
      marginBottom: -5,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#FCFBFC',
    },
    SignUpHeaderText:{
      marginTop: 100,
      margin: 15,
      marginBottom: -5,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      color:'#d3d3d3',
    },

    textStyle: {
      margin: 5,
      fontSize: 16,
      color: '#1C86EE',
    },

    boarder: {
      height: 40,
      borderColor: 'transparent',
      borderWidth: 2.5,
      margin: 15,
      marginBottom: 0,
      borderBottomColor: 'gray',
      color: '#FCFBFC',
    },

    submitButton: {
      backgroundColor: '#FCFBFC',
      padding: 5,
      margin: 8,
      height: 40,
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: 1,
   },

   submitButtonText:{
      color: '#1C86EE',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
   },

   transparentButton: {
    margin: -20,
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
   },

})

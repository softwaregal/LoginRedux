import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../Components/Container';
import Button from '../Components/Button';
import Label from '../Components/Label';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../Actions';

class Login extends Component {

  constructor(props) {
        super(props);

        this.state = {
          input_user_name:"",
          input_password:"",
          login_text:"",

        };

        //this.renderItem = this.renderItem.bind(this);
    }

    onSignIn = () => {
      this.props.getData();
      console.log("Login","\n" + this.state.input_user_name +"\n"+ this.props.data.username +"\n"+ this.state.input_password +"\n"+ this.props.data.password)
      console.log("Props" , this.props);
      if(this.state.input_user_name != this.props.data.username || this.state.input_password != this.props.data.password){
        this.setState({login_text:"Invalid Credentials"})
      }else {
        this.setState({login_text:"Login Successfull"})
      }
    }


  render() {
    return (
        <ScrollView style={styles.scroll}>
            <Container>
              {this.props.loading?<View style={styles.activityIndicatorContainer}>
                  <ActivityIndicator animating={this.props.loading}/>
              </View>:null}
                <Button
                    label="Forgot Login/Pass"
                    styles={{button: styles.alignRight, label: styles.label}}
                    onPress={()=>this.setState({login_text:"Forgot Password"})} />
                <Container>
                  <Label text="Username or Email" />
                  <TextInput
                      style={styles.textInput}
                      onChangeText={text => this.setState({input_user_name:text})}
                      value={this.state.input_user_name}
                  />
                </Container>

                <Container>
                  <Label text="Password" />
                  <TextInput
                      secureTextEntry={true}
                      style={styles.textInput}
                      onChangeText={text => this.setState({input_password:text})}
                      value={this.state.input_password}
                  />
                </Container>
                <Container>
                    <Button
                        styles={{button: styles.transparentButton}}
                        onPress={()=>console.log("Facebook")}>
                        <View style={styles.inline}>
                            <Icon name="facebook-official" size={30} color="#3B5699" />
                            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text>
                            <Text style={styles.buttonBlueText}>with Facebook</Text>
                        </View>
                    </Button>
                </Container>

                <View style={styles.footer}>
                  <Container>
                      <Button
                          label="Sign In"
                          styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                          onPress={() => this.onSignIn()} />
                  </Container>
                <Container>
                    <Text style={{color: 'red'}}>
                      {this.state.login_text}
                    </Text>
                  </Container>
                  <Container>
                      <Button
                          label="CANCEL"
                          styles={{label: styles.buttonBlackText}}
                          onPress={() => console.log("Cancel")} />
                  </Container>
               </View>
            </Container>
        </ScrollView>
    );
  }
}

function mapStateToProps(state) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
  scroll: {
     backgroundColor: '#E1D7D8',
     padding: 30,
     flexDirection: 'column'
 },
 activityIndicatorContainer:{
        backgroundColor: "#E1D7D8",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
 label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
},
transparentButton: {
    marginTop: 30,
    borderColor: '#3B5699',
    borderWidth: 2
},
buttonBlueText: {
    fontSize: 20,
    color: '#3B5699'
},
buttonBigText: {
    fontSize: 20,
    fontWeight: 'bold'
},
inline: {
    flexDirection: 'row'
}
});

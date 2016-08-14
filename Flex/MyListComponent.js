
import React from 'react'

import Navigator from 'Navigator'
import StyleSheet from 'StyleSheet'
import View from 'View'
import Text from 'Text'
import ListView from 'ListView'
import ScrollView from 'ScrollView'
import TouchableOpacity from 'TouchableOpacity'
import Dimensions from 'Dimensions'

import SecondPageComponent from './SecondPageComponent';

const Screen_Width = Dimensions.get('window').Screen_Width


//导航栏的Mapper
var STNavBar = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.leftNavButtonText}>
              返回
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  },

  // 右键
  RightButton(route, navigator, index, navState) {
      return null;
  },

  // 标题
  Title(route, navigator, index, navState) {
    return (
      <View style={styles.navContainer}>
        <Text style={styles.title}>
          React Native
        </Text>
      </View>
    );
  }
};

// 组件
class MyListComponent extends React.Component {
	render() {
		return (
		 	<Navigator style={{flex:1}}
        		initialRoute = {{
            		component:List,
            		title:'首页',
            		passProps:{},
          		}}
          		configureScene={()=>{return Navigator.SceneConfigs.FloatFromBottom;}}
          		renderScene={(route,navigator)=>{
           			return <route.component navigator = {navigator} route= {route} {...route.passProps}/>
          		}}
          		navigationBar={
              		<Navigator.NavigationBar
                		style = {styles.navContainer}
                		routeMapper={STNavBar}
              		/>
          		}
      		/>  
		);
	}
}


class List extends React.Component {

	constructor(props) {
	  	super(props);

	  	var ds =  new ListView.DataSource({
          // rowHasChanged:(r1,r2) => r1!==r2
          	rowHasChanged:function(r1,r2) {return r1!==r2}
	  	});
	
	  	this.state = {
         	dataSource : ds,
         	data : ['Flex','FlexDirection','JustifyContent','AlignItems','AlignSelf','FlexWrap']
	  	};
	}

  	render() {
   		return (
    		<ListView
    	    	style = {{top:64}}
            	dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
            	renderRow = {(rowData) => this._renderRow(rowData)}
            	// renderRow = {(rowData) => <Text style = {styles.rowContent}>{rowData}</Text>}
            	showsVerticalScrollIndeicator={false}
    		/> 
    	)
  	}

  	_renderRow(rowData) {
  		return (
  	 		<Text style = {styles.rowContent} onPress={()=>this._goToSecondPage(rowData)}>
  	   	 		{rowData}
  	 		</Text>
  	 	)
  	}

  	_goToSecondPage(title) {
     	this.props.navigator.push({
        	component:SecondPageComponent,
        	title:title,
   		});
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navbar:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
  },
  navContainer: {
    backgroundColor: '#81c04d',
    paddingTop: 12,
    paddingBottom: 10,
  },
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13
  },
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13
  },
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                
  },
  rowContent: {
  	margin: 5,
    fontSize: 18,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flex: 1                
  },
});

module.exports = MyListComponent; // 导出模块



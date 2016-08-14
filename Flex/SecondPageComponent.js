'use strict'
import React,{ Component,PropTypes } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,Text,StyleSheet,Dimensions
} from 'react-native';


var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

// height width  
// flex 可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
// 多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。
// 如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大
//（即占据剩余空间的比等于并列组件间flex值的比）。
class FlexBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


//flexDirection 可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，
//还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。
class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看

      <View style={styles.container}>  
        <Text>row</Text>
        <View style={{ flexDirection: 'row',height:50}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>row-reverse</Text>
        <View style={{ flexDirection: 'row-reverse',height:50}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>column</Text>
        <View style={{ flexDirection: 'column',height:150}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>column-reverse</Text>
        <View style={{ flexDirection: 'column-reverse',height:150}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};

// justifyContent 可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？
// 亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
class JustifyContentBasics extends Component {
  render() {
    return (
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={styles.container}>

        <Text>flex-start</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>flex-end</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

         <Text>center</Text>
         <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>space-between</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>space-around</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};


class AlignItemsBasics extends Component {
  render() {
    return (
      // alignItems为纵向上的布局，
      <View style={styles.container}>

        <Text>flex-start</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>flex-end</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

         <Text>center</Text>
         <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>stretch</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
        }}>
          <View style={{width: 50,  backgroundColor: 'powderblue'}} />
          <View style={{width: 50,  backgroundColor: 'skyblue'}} />
          <View style={{width: 50,  backgroundColor: 'steelblue'}} />
        </View>

      </View>
    );
  }
};

class AlignSelfBasics extends Component {
  render() {
    return (

      // alignSelf横向上的布局，
      // flexDirection为row时，不指定高度会填满，若不指定宽度则显示不出来 
      <View style={styles.container}>

        <Text>auto</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'auto',
        }}>
          <View style={{width: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>flex-start</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'flex-start',
        }}>
          <View style={{width: 50,  backgroundColor: 'powderblue'}}/>
          <View style={{width: 50,  backgroundColor: 'skyblue'}} />
          <View style={{width: 50,  backgroundColor: 'steelblue'}} />
        </View>

        <Text>flex-end</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}>
          <View style={{width: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, backgroundColor: 'steelblue'}} />
        </View>

         <Text>center</Text>
         <View style={{
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
          <View style={{width: 50,  backgroundColor: 'powderblue'}} />
          <View style={{width: 50,  backgroundColor: 'skyblue'}} />
          <View style={{width: 50,  backgroundColor: 'steelblue'}} />
        </View>

        <Text>stretch</Text>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignSelf: 'stretch',
        }}>
          <View style={{ height: 30, backgroundColor: 'powderblue'}} />
          <View style={{ height: 30, backgroundColor: 'skyblue'}} />
          <View style={{ height: 30, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};


class FlexWrapBasics extends Component {
  render() {
    return (

      <View style={styles.container}>

        <Text>nowrap</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}>
          <View style={{width: 200, height:50, backgroundColor: 'powderblue'}} />
          <View style={{width: 200, height:50, backgroundColor: 'skyblue'}} />
          <View style={{width: 200, height:50, backgroundColor: 'steelblue'}} />
        </View>

        <Text>wrap</Text>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
          <View style={{width: 200, height:50, backgroundColor: 'powderblue'}}/>
          <View style={{width: 200, height:50, backgroundColor: 'skyblue'}} />
          <View style={{width: 200, height:50, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
};



export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
      switch(this.props.route.title)
      {
        case 'Flex': {
            return(
              <FlexBasics/>
              // this._renderView(FlexDimensionsBasics)
            );
            break;
        }
        case 'FlexDirection': {
            return (
                <FlexDirectionBasics/>
            );
            break;
        }
        case 'JustifyContent': {
            return (
                <JustifyContentBasics/>
            );
            break;
        }
        case 'AlignItems': {
            return (
                <AlignItemsBasics/>
            );
            break;
        }
        case 'AlignSelf': {
            return (
                <AlignSelfBasics/>
            );
            break;
        }
        case 'FlexWrap': {
            return (
                <FlexWrapBasics/>
            );
            break;
        }
      }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    marginTop:64,
    height:(screenHeight-64),
  },

  subContainer: {


  },
});
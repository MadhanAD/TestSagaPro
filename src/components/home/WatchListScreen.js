import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    ToastAndroid
} from 'react-native'
import BottomSheet from 'react-native-bottomsheet'
import {SwipeableFlatList} from 'react-native-swipeable-flat-list'

import {connect} from 'react-redux'
import {WatchListActions} from './../../redux/actions'

class WatchListScreen extends Component {

    constructor(){
        super()
        this.state = {
            listData : [],
            loading : false
        }
    }

    componentDidMount(){
        this.props.getWatchList({})
    }

    sortData(value){
        // console.log('Sheet value ',value)
        switch(value){
            case 0: //a-z
                let listArray = this.state.listData
                listArray.sort(function(a, b){
                    var x = a.name.toLowerCase()
                    var y = b.name.toLowerCase()
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0
                })
                console.log('watch list sort ',listArray)
                this.setState({listData : listArray})
                break;
            case 1: //z-a
                let listArray1 = this.state.listData
                listArray1.sort(function(a, b){
                    var x = a.name.toLowerCase()
                    var y = b.name.toLowerCase()
                    if (x < y) {return 1;}
                    if (x > y) {return -1;}
                    return 0
                })
                console.log('watch list sort ',listArray1)
                this.setState({listData : listArray1})
                break;
        }
    }

    openBottomSheet(){
        BottomSheet.showBottomSheetWithOptions({
            options: ['A-Z', 'Z-A', 'Cancel'],
            title: 'Sort by',
            dark: false,
            cancelButtonIndex: 3,
          }, (value) => {
              
              this.sortData(value)
            // alert(value);
          });
    }

    _renderItem = ({item}) => (
        <MyListItem
        style={{ height: 60 }}
          id={item.id}
          onPressItem={this._onPressItem}
        //   selected={!!this.state.selected.get(item.id)}
          title={item.name}
          website={item.website}
        />
      )

      _keyExtractor = (item, index) => item.id.toString()

      _onPressItem = (id) => {
        
      }

      componentWillReceiveProps(nextProps){
          if(nextProps.watchList){
            if(!nextProps.watchList.error && !nextProps.watchList.loading ){
                this.setState({listData : nextProps.watchList.payload,loading : false})
            }else{
                console.log('WatchList willReceiveProps failure ',nextProps)
            }
         }
      }


    render(){
        return(
            <View style={styles.rootContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <Text style={styles.titleText}>Watch List</Text>
                    </View>

                    <View style={styles.headerRightContainer}>
                        <TouchableWithoutFeedback 
                            style={styles.headerTouchContainer}
                            onPress={()=>{
                                if(this.state.listData.length > 0){
                                    this.openBottomSheet()
                                }else{
                                    ToastAndroid.show('No data to sort', ToastAndroid.SHORT)
                                }
                            } }>
                            <View style={styles.headerTouchRootContainer}>
                                <Text style={styles.rightText}>Sort</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <SwipeableFlatList
                        data={this.state.listData}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderRight={({ item }) => (
                            <View style={styles.swipeRoot}>
                                <Text style={styles.swipeText}>Delete</Text>
                            </View>
                            
                        )}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        )
    }


}

class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      return (
          <View style={itemStyle.rootContainer}>
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={itemStyle.bodyContainer}>
                    <Text style={itemStyle.textTitleStyle}>
                    {this.props.title}
                    </Text>

                    <Text style={itemStyle.textBodyStyle}>
                    {this.props.website}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
          </View>
        
      );
    }
  }

  const itemStyle = StyleSheet.create({
      rootContainer : {
          flex : 1,
          padding : 5,
          margin : 5,
          backgroundColor : '#545d8e',
      },
      bodyContainer : {

      },
      textTitleStyle : {
          color : '#fff',
          fontWeight : 'bold',
          fontSize : 18
      },
      textBodyStyle : {
          color : '#fff',
          fontSize : 16
      }
  })

  function mapStateToProps(state) {
    return {
      ...state
    };
  }
  
  export default connect(mapStateToProps, { ...WatchListActions })(WatchListScreen);


const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        backgroundColor : '#fff'
    },
    swipeRoot : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'stretch',
        height : '100%',
    },
    swipeText:{
        fontSize : 18,
    },
    headerContainer : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#651fff'
    },
    headerLeftContainer : {
        flex : 9
    },
    headerRightContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    headerTouchContainer : {
        flex : 1,
        alignSelf : 'stretch'
    },
    headerTouchRootContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    titleText : {
        color : '#fff',
        fontWeight : 'bold',
        fontSize : 20,
        marginLeft : 10
    },
    rightText : {
        color : '#fff',
        fontSize : 17,
        marginRight : 5
    },
    bodyContainer : {
        flex : 9
    }
})
import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native'

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
        this.props.getAllWatchList()
    }

    _renderItem = ({item}) => (
        <MyListItem
          id={item.id}
          onPressItem={this._onPressItem}
          selected={!!this.state.selected.get(item.id)}
          title={item.title}
        />
      )

      _keyExtractor = (item, index) => item.id

      _onPressItem = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
          // copy the map rather than modifying state.
          const selected = new Map(state.selected);
          selected.set(id, !selected.get(id)); // toggle
          return {selected}
        })
      }

      componentWillReceiveProps(nextProps){
          if(nextProps){
              console.log('WatchList ',nextProps)
          }
      }


    render(){
        return(
            <View style={styles.rootContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeftContainer}>
                        <Text style={styles.titleText}>Watch List </Text>
                    </View>

                    <View style={styles.headerRightContainer}>
                        <Text style={styles.rightText}>Sort</Text>
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <FlatList
                        data={this.props.data}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
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
      const textColor = this.props.selected ? "red" : "black";
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{ color: textColor }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

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
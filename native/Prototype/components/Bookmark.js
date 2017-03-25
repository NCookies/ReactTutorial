import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';


var food = [
  {name: "Lettuce", category: "Vegetable"},
  {name: "Apple", category: "Fruit"},
  {name: "Orange", category: "Fruit"},
  {name: "Potato", category: "Vegetable"}
];


export default class Bookmark extends Component {
  convertFoodArrayToMap() {
    var foodCategoryMap = {}; // Create the blank map
    food.forEach(function(foodItem) {
      if (!foodCategoryMap[foodItem.category]) {
        // Create an entry in the map for the category if it hasn't yet been created
        foodCategoryMap[foodItem.category] = [];
      }
      foodCategoryMap[foodItem.category].push(foodItem);
    });
    return foodCategoryMap;
  }

  getInitialState() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    return {
      dataSource: dataSource.cloneWithRowsAndSections(this.convertFoodArrayToMap())
    };
  }

  renderRow(foodItem) {
    return (
      <Text>{foodItem.name}</Text>
    )
  }

  renderSectionHeader(sectionData, category) {
    return (
      <Text style={{fontWeight: "700"}}>{category}</Text>
    )
  }

  render() {
    return (
      <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              renderSectionHeader={this.renderSectionHeader}
            />
    )
  }
}



{
  const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: 'column',
    },
    bus_name: {
      fontSize: 20,
      color: 'white',
    },
    select_menu: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#81D4FA',
    },
  });

  {
    <View style={styles.header}>
      <View>
        <View style={styles.bus_icon}>
        </View>

        <Text style={styles.bus_name}>급행1</Text>
        <Text>sdfjsdlkfj</Text>
        <View style={styles.select_menu}>
        </View>
        <View style={styles.select_menu}>
        </View>
        <View style={styles.select_menu}>
        </View>
      </View>
    </View>
  }
}

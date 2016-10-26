//import codes
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.Stylesheet;
var DayItem = require('./src/day-item');

var DAYS = ['sun','mon','tue','wed','thurs','fri','sat'];

//create a react component
var Weekdays = React.createClass({
  //pass an object to method
  render: function() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
      {this.days()}
    </View>
  },
  days: function() {
   return DAYS.map(function(day){
      //7 times
      return <DayItem day={day} />
    });
  }
});


//Style react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //y axis up and down
    alignItems: 'center'// x axis left-right flex-end
  }
});



//show component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
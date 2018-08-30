import React, { Component } from 'react';
import { Animated, View, PanResponder } from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {},
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
        this.setState(state => ({ updateToggle: !state.updateToggle }));
      },
      onPanResponderRelease: () => {},
    });
    this.state = { updateToggle: false };
  }
  renderCards = () => this.props.data.map(item => this.props.renderCard(item));
  render() {
    return (
      <Animated.View style={this.position.getLayout()} {...this.panResponder.panHandlers}>
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;

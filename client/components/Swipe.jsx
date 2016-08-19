import React from 'react'
import Swipeable from 'react-swipeable'

export default class Swipe extends React.Component {
  constructor() {
    super();
    this.state = {
      location: 0,
    };
  }



  swiping(deltax,absx) {
    const location = absx;
    this.state.location = absx;
    console.log(absx);
  }

  render() {


    return (
      <Swipeable
        onSwiping={this.swiping}
        onSwipingUp={this.swipingUp}
        onSwipingRight={this.swipingRight}
        onSwipingDown={this.swipingDown}
        onSwipingLeft={this.swipingLeft}
        onSwipedUp={this.swipedUp}
        onSwipedRight={this.swipedRight}
        onSwipedDown={this.swipedDown}
        onSwipedLeft={this.swipedLeft}
        onSwiped={this.handleSwipeAction}>
          You can be swipe here!
          <h1>{this.state.location}</h1>
      </Swipeable>
    )
  }
}

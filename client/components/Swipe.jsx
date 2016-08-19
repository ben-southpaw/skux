import React from 'react'
import Swipeable from 'react-swipeable'

export default class Swipe extends React.Component {
  

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
      </Swipeable>
    )
  }
}

// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isGivenFeedback: false}

  onFeedback = () => {
    this.setState({
      isGivenFeedback: true,
    })
  }

  render() {
    const {isGivenFeedback} = this.state
    const {resources} = this.props

    return (
      <div className="app-container">
        {!isGivenFeedback && (
          <div className="feedback-container">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance?
            </h1>

            <ul className="emojis-container">
              {resources.emojis.map(eachItem => (
                <li className="list-container" key={eachItem.id}>
                  <img
                    className="emoji"
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    onClick={this.onFeedback}
                  />
                  <p className="name">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isGivenFeedback && (
          <div className="feedback-container">
            <img
              className="love-emoji"
              src={resources.loveEmojiUrl}
              alt="love emoji"
            />
            <h1 className="thank-you">Thank You!</h1>
            <p className="feedback-msg">
              We will us you feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

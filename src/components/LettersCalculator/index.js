import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterEntered: 0}

  calculateLetterSomeoneChange = event => {
    const onChangeLetterEntered = event.target.value.length
    this.setState({letterEntered: onChangeLetterEntered})
  }

  render() {
    const {letterEntered} = this.state

    return (
      <div className="main-bg-color-container">
        <div className="image-container-top">
          <img
            className="calculator-img-style"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
        <div className="bottom-content-container">
          <h1 className="content-main-heading">
            Calculate the Letters you enter
          </h1>
          <div className="input-and-label-element">
            <label htmlFor="inputElementId" className="label-element-style">
              Enter the Phrase
            </label>
            <input
              id="inputElementId"
              onChange={this.calculateLetterSomeoneChange}
              className="input-box-style"
              type="text"
            />
          </div>
          <p type="button" className="button-style-no-of-letter">
            No.of letters: {letterEntered}
          </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

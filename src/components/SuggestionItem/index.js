import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestion, updateSearchInput} = this.props
    const onClickArrow = () => {
      updateSearchInput(suggestion)
    }

    return (
      <li className="Item-container">
        <p className="suggestion">{suggestion}</p>
        <button type="button" className="button" onClick={onClickArrow}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            className="arrow"
            alt="arrow"
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem

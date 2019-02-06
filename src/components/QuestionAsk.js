import React, { Component } from "react";

class QuestionAsk extends Component {
  state = {
    disabled: true,
    selectedValue: null
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAnswer(this.state.selectedValue);
  }
  handleChange(e) {
    this.setState({
      disabled: false,
      selectedValue: e.target.value
    })
  }
  render() {
    const {question, onAnswer} = this.props; 
  return (<div className="card mb-1">
  <div className="card-header">{question.authorFullName} asks</div>
  <div className="card-body">
    <div className="row">
      <div className="col-sm-4">
        <img src={question.authorAvatar} alt={question.authorFullName} width="100%" className="rounded-circle" />
      </div>
      <div className="col">
      <form onSubmit={(e) => this.handleSubmit(e)}>
      <h5 className="card-title">Would You rather</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="selectedOpt" id="optOne" value="optionOne" onChange={(e) => this.handleChange(e)} />
          <label className="form-check-label" htmlFor="optOne">{question.optionOne.text}</label>
        </div>
        </li>
        <li className="list-group-item">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="selectedOpt" id="optTwo" value="optionTwo" onChange={(e) => this.handleChange(e)} />
          <label className="form-check-label" htmlFor="optTwo">{question.optionTwo.text}</label>
        </div>
        </li>
      </ul>
      <button className="btn btn-primary mb-0" disabled={this.state.disabled} type="submit">Submit Answer</button>
      </form>
      </div>
    </div>
  </div>
</div>)
  }
}
export default QuestionAsk;
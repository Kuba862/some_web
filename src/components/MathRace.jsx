import React, { Component } from 'react';
import Car from './Car';
import styled from 'styled-components';

const Action = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  p,
  span {
    align-self: center;
  }
  p {
    font-size: 1.4rem;
  }
  span {
    display: flex;
    flex-direction: column;
    gap: 20px;
    input[type='text'] {
      font-size: 1.2rem;
      padding: 6px 35%;
      box-shadow: 6px 6px 5px -2px #000;
      border: 2px solid;
      border-radius: 5px;
    }
    button {
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      padding: 12px 8px;
    }
  }
`;

const SelectButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  button {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0 15px;
    background-color: #fff;
    padding: 12px 8px;
    border-radius: 5px;
    box-shadow: 6px 6px 5px -2px #000;
    &:focus {
      background-image: linear-gradient(
        90deg,
        rgba(206, 214, 249, 1) 0%,
        rgba(163, 163, 251, 1) 100%
      );
    }
  }
`;

class MathRace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      thirdNumber: 0,
      result: 0,
      userResult: 0,
      correctAnswer: false,
      wrongAnswer: false,
      move: 0,
      adding: true,
    //   goodWay: "#5ccb55"
      goodWay: "#ccc"
    };
    this.setResult = this.setResult.bind(this);
    this.checkResult = this.checkResult.bind(this);
    this.generateAnswer = this.generateAnswer.bind(this);

    this.adding = () => {
      this.setState({
        adding: true,
      });
      this.componentDidMount();
    };

    this.substract = () => {
      this.setState({
        adding: false,
      });
      this.componentDidMount();
    };
  }

  componentDidMount() {
    this.setState({
      firstNumber: Math.floor(Math.random() * (0 + 1) * 20),
      secondNumber: Math.floor(Math.random() * (0 + 1) * 15),
      thirdNumber: Math.floor(Math.random() * (0 + 1) * 15),
    });
    this.checkIfResultIsLessThanZero();
  }

  setResult() {
    this.setState({
      result: this.state.firstNumber + this.state.secondNumber,
    });
  }

  checkIfResultIsLessThanZero() {
    if (this.state.result < 0) {
      this.randomNumber();
    }
  }

  generateAnswer() {
    if (this.state.result === this.state.userResult) {
      this.setState({
        correctAnswer: true,
        wrongAnswer: false,
      });
    } else {
      this.setState({
        correctAnswer: false,
        wrongAnswer: true,
      });
    }
    setTimeout(() => {
      this.state.correctAnswer
        ? this.setState({
            move: this.state.move + 30,
          })
        : this.setState({
            move: this.state.move - 30,
          });
    }, 500);
    setTimeout(() => {
      this.componentDidMount();
      document.querySelector('input').value = '';
      this.setState({
        correctAnswer: false,
        wrongAnswer: false,
      });
      document.getElementById('result_btn').setAttribute('disabled', true);
    }, 1000);

    setTimeout(() => {
         if (this.state.move / 30 % 4 === 3) {
            this.setState({
                goodWay: "#5ccb55"
            })
         }
    }, 550);
    
  }

  checkResult() {
    this.state.adding
      ? this.setState({
          result: this.state.firstNumber + this.state.secondNumber,
          userResult: +document.querySelector('input').value,
        })
      : this.setState({
          result: this.state.firstNumber - this.state.secondNumber,
          userResult: +document.querySelector('input').value,
        });
    if (document.querySelector('input').value !== '') {
      document.getElementById('result_btn').removeAttribute('disabled');
    }
  }

  render() {
    const { firstNumber, secondNumber, move, adding, goodWay } = this.state;
    return (
      <>
        <SelectButtons>
          <button onClick={this.adding}>dodawanie</button>
          <button onClick={this.substract}>odejmowanie</button>
        </SelectButtons>
        <Action>
          {adding ? (
            <p>
              {firstNumber} + {secondNumber}
            </p>
          ) : (
            <p>
              {firstNumber} - {secondNumber}
            </p>
          )}
          <span>
            <input type="text" onChange={this.checkResult} />
            <button id="result_btn" onClick={this.generateAnswer}>
              sprawdź wynik
            </button>
          </span>
        </Action>
        <Car move={move} goodWay={goodWay} />
      </>
    );
  }
}

export default MathRace;

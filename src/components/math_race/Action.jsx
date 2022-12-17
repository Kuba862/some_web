// import React, { Component } from 'react';

// class Action extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstNumber: 0,
//             secondNumber: 0,
//             thirdNumber: 0,
//             result: 0,
//             userResult: 0,
//             addOrSub1: "",
//             addOrSub2: "",
//             correctAnswer: false,
//             wrongAnswer: false
//         }
//         this.setResult = this.setResult.bind(this);
//         this.checkResult = this.checkResult.bind(this);
//         this.generateAnswer = this.generateAnswer.bind(this);
//     }

//     componentDidMount() {
//         this.setState({
//             firstNumber: Math.floor(Math.random() * (0 + 1) * 15),
//             secondNumber: Math.floor(Math.random() * (0 + 1) * 15),
//             thirdNumber: Math.floor(Math.random() * (0 + 1) * 5),
//         })
//         this.checkIfResultIsLessThanZero();
//     }

//     setResult() {
//         this.setState({
//             result: this.state.firstNumber + this.state.secondNumber,
//         })
//     }

//     checkIfResultIsLessThanZero() {
//         if(this.state.result < 0) {
//             this.randomNumber()
//         }
//     }

//     generateAnswer() {
//         if(this.state.result === this.state.userResult) {
//             this.setState({
//                 correctAnswer: true,
//                 wrongAnswer: false
//             })
//         } else {
//             this.setState({
//                 correctAnswer: false,
//                 wrongAnswer: true
//             })
//         }
//     }

//     checkResult() {
//         this.setState({
//             result: this.state.firstNumber + this.state.secondNumber,
//             userResult: +document.querySelector('input').value
//         })
//     }

//     render() {
//         const { firstNumber, secondNumber } = this.state;
//         return (
//             <>
//             <div>
//                 <p>{firstNumber} + {secondNumber}</p>
//                 <input type="text" onChange={this.checkResult} />
//                 <button onClick={this.generateAnswer} >sprawdź wynik</button>
//             </div>
//             </>
//         );
//     }
// }

// export default Action;

// 'use strict'
// import React, { Component, Fragment } from 'react';
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

// // class Clock extends React.Component {
// //   constructor(props){
// //       super(props);
// //       this.state = {
// //           date: new Date()
// //       };
// //   }

// //   componentDidMount(){
// //       this.timerID = setInterval(
// //           () => this.tick(), 1000
// //       );
// //   }

// //   componentWillUnmountMount(){
// //       clearInterval(this.timerID);
// //   }

// //   tick(){
// //       this.setState({
// //           date: new Date()
// //       });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// //       </div>
// //     );
// //   }
// // }  

// // class Toggle extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {isToggleOn: true};

// //     // This binding is necessary to make `this` work in the callback
// //     this.handleClick = this.handleClick.bind(this);
// //   }

// //   handleClick() {
// //     this.setState(state => ({
// //       isToggleOn: !state.isToggleOn
// //     }));
// //   }

// //   render() {
// //     return (
// //       <button onClick={this.handleClick}>
// //         {this.state.isToggleOn ? 'ON' : 'OFF'}
// //       </button>
// //     );
// //   }
// // }

// // const tester = {
// //     clock: Clock,
// //     toggle: Toggle
// // }


// // export const App = () => {
// //     const Test = tester['toggle'];

// //     return ( 
// //         <div>
// //             <Test/>
// //             <Toggle/>
// //         </div>
// //     )
// // }



// export const App = () => {
//   const modalProps = {
//     triggerText: 'This is a button'    
//   };

//   return (
//     <main className="content">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris. Sodales ut etiam sit amet nisl purus in mollis. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Dignissim convallis aenean et tortor at. Porttitor eget dolor morbi non arcu risus quis varius quam. Sagittis orci a scelerisque purus semper eget duis at. Quisque sagittis purus sit amet volutpat consequat. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Egestas quis ipsum suspendisse ultrices gravida. Turpis massa sed elementum tempus egestas. Ut sem viverra aliquet eget sit amet. Lacus suspendisse faucibus interdum posuere lorem. Neque viverra justo nec ultrices dui sapien. Eu mi bibendum neque egestas congue quisque egestas.
//         Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Sit amet est placerat in egestas erat imperdiet sed. Eget duis at tellus at. Felis imperdiet proin fermentum leo. Vitae proin sagittis nisl rhoncus. Sed adipiscing diam donec adipiscing tristique risus nec. At in tellus integer feugiat scelerisque varius morbi enim nunc. Tristique senectus et netus et malesuada fames ac. Quis blandit turpis cursus in hac habitasse. Egestas maecenas pharetra convallis posuere.
//         Sagittis id consectetur purus ut faucibus pulvinar elementum integer.<hr/><Modal {...modalProps}/><hr/> Non tellus orci ac auctor augue mauris augue. Eu consequat ac felis donec. Magna ac placerat vestibulum lectus mauris ultrices eros in. Tincidunt vitae semper quis lectus nulla at volutpat diam. Tempus urna et pharetra pharetra. Libero enim sed faucibus turpis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mauris nunc congue nisi vitae suscipit tellus mauris a. Phasellus vestibulum lorem sed risus ultricies. Viverra maecenas accumsan lacus vel facilisis volutpat. Cras fermentum odio eu feugiat. Tincidunt lobortis feugiat vivamus at. Arcu risus quis varius quam quisque id diam vel. Massa id neque aliquam vestibulum morbi. Condimentum mattis pellentesque id nibh tortor id aliquet. In hendrerit gravida rutrum quisque non tellus orci ac.
//         Ornare massa eget egestas purus viverra accumsan. Mauris rhoncus aenean vel elit. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Massa tincidunt nunc pulvinar sapien et ligula. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Nec sagittis aliquam malesuada bibendum arcu vitae. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Et sollicitudin ac orci phasellus egestas tellus rutrum. Viverra tellus in hac habitasse platea dictumst. In tellus integer feugiat scelerisque varius morbi enim. Mi ipsum faucibus vitae aliquet. Lacinia quis vel eros donec ac. Metus aliquam eleifend mi in. Vel elit scelerisque mauris pellentesque.
//         Facilisi etiam dignissim diam quis. Leo in vitae turpis massa sed elementum tempus egestas sed. Ut faucibus pulvinar elementum integer. Vulputate dignissim suspendisse in est ante in nibh mauris. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Etiam sit amet nisl purus in mollis. Quam quisque id diam vel quam. Habitant morbi tristique senectus et. Duis ultricies lacus sed turpis tincidunt id. At in tellus integer feugiat scelerisque varius morbi enim nunc. Sit amet consectetur adipiscing elit duis tristique. Blandit massa enim nec dui. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Ut porttitor leo a diam sollicitudin tempor id eu.
//       </p>

//     </main>
//   );
// }

// class Modal extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isOpen: false
//     }
//     this.onOpen = this.onOpen.bind(this);
//     this.onClose = this.onClose.bind(this);
//   }  

//   onOpen() {
//     this.setState({ isOpen: true });
//   }
//   onClose() {
//     this.setState({ isOpen: false });
//   }

//   render() {
//     const { isOpen } = this.state;
//     const { triggerText } = this.props; 
//     return (
//       <Fragment>
//         <ModalTrigger
//           onOpen={this.onOpen}
//           text={triggerText}
//         />
//         {isOpen &&
//           <ModalContent 
//             onClose={this.onClose}
//           />
//         }
//       </Fragment>
//     );
//   }
// }

// const ModalTrigger = ({onOpen,text}) => <button className="c-btn" onClick={onOpen}>{text}</button>;
// const ModalContent = ({onClose}) => {
//   return ReactDOM.createPortal(
//     <aside className="c-modal-cover">
//       <div className="c-modal">
//         <button className="c-modal__close" aria-label="Close Modal" onClick={onClose}>
//           <span className="u-hide-visually">Close</span>
//           <svg className="c-modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
//         </button>
//         <div className="c-modal__body">
//           CONTENT WILL GO HERE
//         </div>
//       </div>
//     </aside>,
//     document.body
//   );
// }
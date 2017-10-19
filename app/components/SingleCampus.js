
// import React, { Component } from 'react';
// import axios from 'axios';
// import AllCampuses from './AllCampuses';
// import AllStudents from './AllStudents' //trying to get students assigned to that campus - not sure if this is the way

// export default class SingleCampus extends Component {
//     constructor () {
//         super();
//         this.state = {
//             campus: {}
//         };
//     }

//     fetchCampus (id) {
//         axios.get(`/api/campuses/${id}`)
//           .then(res => res.data)
//           .then(campus => this.setState({
//             campus
//         }));
//     }

//     render () {
//         const campus = this.state.campus;
    
//         return (
//           <div className="campus">
//             <div>
//               <h3>{ campus.name }</h3>
//               <img src={ campus.imageUrl } className="img-thumbnail" />
//             </div>
//             <AllStudents students={campus.students} />
//           </div>
//         );
//       }

// }

// const mapStateToProps = null;
// const mapDispatchToProps = null;

// export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
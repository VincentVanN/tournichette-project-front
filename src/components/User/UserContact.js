// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router';
// import './user.scss';
// import Page from '../Page/Page';

// function UserContact() {
//   const { slug } = useParams();
//   const users = useSelector((state) => state.user.users);
//   const userToDisplay = users.find((user) => user.slug === slug);
//   return (
//     <Page>
//       <>
//         <div className="updateUserAccount"> Mettre à jour mes informations</div>
//         <div className="firstname">{userToDisplay.firstname}</div>
//         <div className="lastname">{userToDisplay.lastname}</div>
//         <div className="phone">{userToDisplay.phone}</div>
//         <div className="email">{userToDisplay.email}</div>
//       </>
//     </Page>

//   );
// }

// export default UserContact;

// class GetUnassignedUsers extends React.Component {
//   constructor () {
//       super();
//       this.state = {
//           data:{unassignedUsers:[],teams:[]},
//           selectValue: '8'
//       };
//   }
//   componentDidMount () {
//       fetch("http://localhost/dashboard/?action=unassignedUsers.getUnassingedUsers", {
//           credentials: 'same-origin'
//       })
//       .then(response => response.json())
//       .then( (json) => {
//           this.setState({
//               data: json
//           });
//       });
//   }
//   handleChange (index, event) {
//       alert(this.state);
//       this.state.data.unassignedUsers[index].selectValue = event.target.value;
//       this.state.forceUpdate();

//   }
//   render () {
//       let unassignedUsers = this.state.data.unassignedUsers;
//       let teams = this.state.data.teams;
//       let availableTeams = teams.map(function (team) {
//           return (
//               <option value={team.id}>{team.team_name}</option>
//           )
//       });
//       // let select = ();
//       let rows = unassignedUsers.map(function (user, index) {
//           return (
//               <tr>
//                   <td>{user.ID}</td>
//                   <td>{user.dateCreated}</td>
//                   <td>{user.company}</td>
//                   <td>{user.email}</td>
//                   <td>{user.contactName}</td>
//                   <td>{user.quoteDomain}</td>
//                   <td>{user.InvoicePostCode}</td>
//                   <td>
//                       <select value={user.selectValue} onChange={this.handleChange.bind(this, index)}>
//                           { availableTeams }
//                       </select>
//                   </td>
//               </tr>
//           )
//       });
//       return (
//           <tbody>
//               {rows}
//           </tbody>
//       );
//   }
// }

// export default GetUnassignedUsers;

// const element = (
//     <div title="outer div">
//         <h1>Hello World! Welcome to Abhishek Chachad's website. Abhishek!!</h1>
//     </div>
// )
// ReactDOM.render(element, document.getElementById('contents'));

// class HelloWorld extends React.Component{
//     render(){
//         const continents = ['Africa','Asia', 'Australia', 'Europe'];
//         const helloContinents = Array.from(continents, c=> Hello ${c}!);
//         const message = helloContinents.join(' '); 
//         return(
//             <div title = "Outer div">
//                 <h1>{message}</h1>
//             </div>
//         );
//     }
// }
// const element = <HelloWorld />;
// ReactDOM.render(element, document.getElementById('contents'));

// class IssueRow extends React.Component {
//     render() {
//         return (
//             <div>This is a placeholder for IssueRow</div>
//         )
//     }
// }

// class IssueFilter extends React.Component {
//     render() {
//         return (
//             <div>This is a placeholder for IssueFilter</div>
//         )
//     }
// }

// class IssueTable extends React.Component {
// render(){
//     return(
//         <div>This is a placeholder for IssueTable</div>
//     )
// }
// }

// class IssueList extends React.Component {
//     render(){
//         return(
//             <React.Fragment>
//                 <h1>Issue Tracker</h1>
//                 <IssueFilter />
//                 <hr />
//                 <IssueTable />
//                 <hr />
//                 <IssueRow />
//                 <hr />
//             </React.Fragment>
//         );
//     }
//     }

// const element = <IssueList />;
// ReactDOM.render(element, document.getElementById('contents'));

const issues = [{
  id: 1,
  status: 'New',
  owner: 'Ravan',
  effort: 5,
  created: new Date('2018-08-15'),
  due: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2,
  status: 'Assigned',
  owner: 'Eddie',
  effort: 14,
  created: new Date('2018-08-16'),
  due: new Date('2018-08-30'),
  title: 'Missing bottom border on panel'
}];
class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ' '), /*#__PURE__*/React.createElement("td", null, issue.title));
  }
}
class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    }));
    return /*#__PURE__*/React.createElement("table", {
      className: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
  }
}
class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueTable, {
      issues: issues
    }));
  }
}
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));
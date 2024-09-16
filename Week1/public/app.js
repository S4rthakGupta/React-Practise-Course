// const element = (
//     <div title="outer div">
//         <h1>Hello World! Welcome to Abhishek Chachad's website. Abhishek!!</h1>
//     </div>
// )
// ReactDOM.render(element, document.getElementById('contents'));

// class HelloWorld extends React.Component{
//     render(){
//         const continents = ['Africa','Asia', 'Australia', 'Europe'];
//         const helloContinents = Array.from(continents, c=> `Hello ${c}!`);
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

class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.issue_id), /*#__PURE__*/React.createElement("td", {
      style: style
    }, this.props.issue_title));
  }
}
class IssueFilter extends React.Component {
  render() {
    const rowStyle = {
      border: "1px solid silver",
      padding: 4
    };
    return /*#__PURE__*/React.createElement("table", {
      style: {
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "ID"), /*#__PURE__*/React.createElement("th", {
      style: rowStyle
    }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
      rowStyle: rowStyle,
      issue_id: 1,
      issue_title: "Error in console when clicking Add"
    }), /*#__PURE__*/React.createElement(IssueRow, {
      rowStyle: rowStyle,
      issue_id: 2,
      issue_title: "Missing bottom border on panel"
    })));
  }
}
class IssueTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for IssueTable");
  }
}
class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null));
  }
}
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));
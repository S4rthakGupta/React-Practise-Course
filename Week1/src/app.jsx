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

const issues = [
    {
        id: 1, 
        status: 'New', 
        owner: 'Ravan', 
        effort: 5,
        created: new Date('2018-08-15'), 
        due: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, 
        status: 'Assigned', 
        owner: 'Eddie', 
        effort: 14,
        created: new Date('2018-08-16'), 
        due: new Date('2018-08-30'),
        title: 'Missing bottom border on panel',
    }
];

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.due ? issue.due.toDateString() : ' '}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => (
            <IssueRow key={issue.id} issue={issue} />
        ));
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueTable issues={issues} />
            </React.Fragment>
        );
    }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));
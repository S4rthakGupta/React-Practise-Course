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

class IssueRow extends React.Component {
    render() {
        return (
            <div>This is a placeholder for IssueRow</div>
        )
    }
}

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for IssueFilter</div>
        )
    }
}

class IssueTable extends React.Component {
render(){
    return(
        <div>This is a placeholder for IssueTable</div>
    )
}
}

class IssueList extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueRow />
                <hr />
            </React.Fragment>
        );
    }
    }

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('contents'));
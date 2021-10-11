import React from "react";
import reactDom from "react-dom";
import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";


const App = () => {


    return (<div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>);
};

reactDom.render(<App />, document.getElementById('root'));

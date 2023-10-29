import React from "react";
import { Routes, Route, Link, Switch } from "react-router-dom";
import Header from "./Header/Header";
import DummyTable from "./tabs/DummyTable";
import DummyChart from "./tabs/DummyChart";
import DummyList from "./tabs/DummyList";
import HomePage from "./HomePage";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dummyTable" element={<DummyTable />} />
                <Route path="/dummyChart" element={<DummyChart />} />
                <Route path="/dummyList" element={<DummyList />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;

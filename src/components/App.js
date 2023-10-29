import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { NotFoundPage } from "./NotFoundPage/NotFoundPage";

const DummyTable = lazy(() => import("./tabs/DummyTable"));
const DummyChart = lazy(() => import("./tabs/DummyChart"));
const DummyList = lazy(() => import("./tabs/DummyList"));

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/dummyTable"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <DummyTable />
                        </Suspense>
                    }
                />
                <Route
                    path="/dummyChart"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <DummyChart />
                        </Suspense>
                    }
                />
                <Route
                    path="/dummyList"
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <DummyList />
                        </Suspense>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;

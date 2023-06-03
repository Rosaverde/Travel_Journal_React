import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import data from "./data.js"

export default function App() {
    const dataElements = data.map(data => {
        return <Card
            key={data.id}
            data={data}
        />
    })
    return (
        <>
            <Nav />
            <section className="card-list">
                {dataElements}
            </section>
        </>

    )
};
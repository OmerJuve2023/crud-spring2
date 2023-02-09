import React from "react";

export default function Home() {
    return (
        <div className={"container"}>
            <div className={"py-4"}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope={"cols"}>#</th>
                        <th scope={"cols"}>Name</th>
                        <th scope={"cols"}>Last Name</th>
                        <th scope={"cols"}>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope={"rows"}></th>
                        <th scope={"rows"}></th>
                        <th scope={"rows"}></th>
                        <th scope={"rows"}></th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
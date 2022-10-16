import axios from "axios";
import React, { useState, useEffect } from "react";

const Api = () => {
    const [actores, setListActores] = useState([]);
    useEffect(() => {
        const obtenerPersonajes = async () => {
            const url = "https://rickandmortyapi.com/api/character";
            const result = await axios.get(url);
            console.log(result.data.results);
            setListActores(result.data.results);
        };
        obtenerPersonajes();
    }, []);

    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {actores.map((i, count) => {
                        return (
                            <tr key={count}>
                                <th scope="row">{i.name}</th>
                                <td>
                                    <img src={i.image} alt="" />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Api;

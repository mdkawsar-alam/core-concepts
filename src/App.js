import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const friends = [{
            name: 'bappi',
            age: '21',
        }, {
            name: 'onnoto',
            age: '22'
        },
        {
            name: 'sakib khan',
            age: '40'
        }

    ]

    const nayoks = ['sakib', 'rakib', 'mehedi', 'moizza ', 'foysal', 'mohshin', 'omi', 'goriala', 'sojib']
    const products = [{ name: 'photoshop', price: '$99.65' }, { name: 'Illastatur', price: '$65.54' }, { name: 'PDF reader', price: '$6.55' }, { name: 'Indesign', price: '$50.36' }, { name: 'primer IE', price: '$225.03' }]


    return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            Users > < /Users> <
            Counter > < /Counter> <
            ul > {
                nayoks.map(nayok => < li > { nayok } < /li>)
                } <
                /ul> {
                    products.map(pd => < Product product = { pd } > < /Product>)
                        } <
                        Person name = 'jamal uddin'
                    job = 'business' > < /Person> <
                        Person name = 'kamal uddin'
                    job = 'driver' > < /Person>

                    <
                    /header> <
                    /div>
                );
            }



            function Users() {
                const [users, setUser] = useState([]);

                useEffect(() => {
                    fetch('https://jsonplaceholder.typicode.com/users')
                        .then(res => res.json())
                        .then(data => setUser(data))


                })


                return ( <
                    div >
                    <
                    h2 > Users: { users.length } < /h2> <
                    ul > {
                        users.map(user => < li > { user.name } < /li>)
                        } <
                        /ul> <
                        /div>

                    )

                }

                function Counter() {
                    const [count, setCount] = useState(0);
                    //const handalwIncrese= ()=>setCount(count+1)



                    return ( <
                        div >
                        <
                        h1 > count: { count } < /h1> <
                        button onClick = {
                            () => setCount(count - 1) } > decrise < /button> <
                        button onClick = {
                            () => setCount(count + 1) } > ADD < /button> <
                        /div>
                    )
                }

                function Product(ProPs) {
                    const productStyle = {
                        border: '2px slid red',
                        borderRadius: '10px',
                        backgroundColor: 'gray',
                        width: '300px',
                        margin: '10px',
                        padding: '10px',
                        float: 'left',


                    }
                    const { name, price } = ProPs.product
                    return <div style = { productStyle } >
                        <
                        h2 > { name } < /h2> <
                        h3 > { price } < /h3> <
                        button > Buy Now < /button> <
                        /div>
                }

                function Person(ProPs) {
                    const personStyle = {
                        border: '2px solid red',
                        margin: '15px',
                        width: '500px'
                    }
                    return ( <
                        div style = { personStyle } >
                        <
                        h1 > name: { ProPs.name } < /h1> <
                        h3 > profession: { ProPs.job } < /h3> <
                        /div>
                    )

                }

                export default App;
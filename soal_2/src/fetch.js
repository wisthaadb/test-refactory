import React, {useState, useEffect} from 'react';
import axios from "axios";


const MyComponent = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const getData = async () => {
            

            axios.get('https://gist.githubusercontent.com/dhamanutd/6993984928506eea49908c2e3fcbc628/raw/65e5c2b0874f6efefb99db824cff922ca9435193/profile_list.md')
                .then(res => {
                    setState(res.data.data);
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                });
        };
        getData();
    }, []);


    return (
        <div></div>
    )

};

export default  MyComponent;


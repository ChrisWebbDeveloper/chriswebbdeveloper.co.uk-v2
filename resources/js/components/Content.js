import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Content() {
    const [data, setData] = useState({about:{}, projects:[], contact:{}});

    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/data'
        })
        .then(result => {
            setData(result.data);
        });
    }, []);

    return (
        <div id="Content">
            <Home />
            <About about={data.about} />
            <Projects projects={data.projects} />
            <Contact contact={data.contact} />
            <Footer />
        </div>
    );
};
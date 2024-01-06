import React from 'react';
import NavBar from './NavBar';
import Section from './Section';
import Footer from './Footer';



const App = () => {
    return (
        <div>
            <NavBar />
            <Section />
            <Footer />
            <SongList />
        </div>
    );
}

export default App;
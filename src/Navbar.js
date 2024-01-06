import React from 'react';
import './style.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#genres">Жанры</a></li>
                <li><a href="#artists">Исполнители</a></li>
                <li><a href="#playlists">Плейлисты</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
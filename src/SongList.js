import React from 'react';
import './style.css'

const SongList = ({ songs }) => {
    return (
        <ul>
            {songs.map((song, index) => (
                <li key={index}>
                    <strong>{song.title}</strong> - {song.artist}
                </li>
            ))}
        </ul>
    );
}

export default SongList;
import React from 'react';
import './style.css';
import SongList from "./SongList";

const Section = () => {
    const rockSongs = [
        { title: 'Bohemian Rhapsody', artist: 'Queen' },
        { title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
        { title: 'Hotel California', artist: 'Eagles' },
        { title: 'Sweet Child o\' Mine', artist: 'Guns N\' Roses' },
    ];

    const popSongs = [
        { title: 'Halo', artist: 'Beyoncé' },
        { title: 'Shape of You', artist: 'Ed Sheeran' },
        { title: 'Despacito', artist: 'Luis Fonsi ft. Daddy Yankee' },
        { title: 'Waka Waka (This Time for Africa)', artist: 'Shakira' },
    ];

    const jazzSongs = [
        { title: 'Take Five', artist: 'Dave Brubeck' },
        { title: 'What a Wonderful World', artist: 'Louis Armstrong' },
        { title: 'Fly Me to the Moon', artist: 'Frank Sinatra' },
        { title: 'So What', artist: 'Miles Davis' },
    ];

    const electronicSongs = [
        { title: 'Strobe', artist: 'Deadmau5' },
        { title: 'Clair de Lune', artist: 'Flight Facilities' },
        { title: 'Midnight City', artist: 'M83' },
        { title: 'Summertime Sadness (Cedric Gervais Remix)', artist: 'Lana Del Rey' },
    ];

    return (
        <section>
            <div className="section-container" id="genres">
                <h2>Популярные Жанры</h2>
                <div className="card">
                    <h3>Рок</h3>
                    <p>Энергичный и разнообразный жанр музыки.</p>
                    <SongList songs={rockSongs} />
                </div>
                <div className="card">
                    <h3>Поп</h3>
                    <p>Популярная музыка с мелодичными мотивами.</p>
                    <SongList songs={popSongs} />
                </div>
                <div className="card">
                    <h3>Джаз</h3>
                    <p>Импровизация и уникальные ритмы.</p>
                    <SongList songs={jazzSongs} />
                </div>
                <div className="card">
                    <h3>Электроника</h3>
                    <p>Современные звуки с использованием электронных инструментов.</p>
                    <SongList songs={electronicSongs} />
                </div>
            </div>
        </section>
    );
}

export default Section;
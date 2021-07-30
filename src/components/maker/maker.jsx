import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1', 
            name: 'Steve Jobs',
            company: 'Apple', 
            theme: 'dark', 
            title: 'former CEO', 
            email: 'jobs@apple.com', 
            message: 'one more thing', 
            fileName: 'jobs', 
            fileURL: null
        }, 
        '2': {
            id: '2', 
            name: 'Dongjin koh', 
            company: 'Samsung Electronics', 
            theme: 'light', 
            title: 'CEO', 
            email: 'djkoh@samsung.com', 
            message: 'show you', 
            fileName: 'koh', 
            fileURL: null
        }, 
        '3': {
            id: '3', 
            name: 'Tim Cook', 
            company: 'Apple', 
            theme: 'colorful', 
            title: 'CEO', 
            email: 'timcook@apple.com', 
            message: 'hello', 
            fileName: 'cook', 
            fileURL: null
        }
    });

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        })
    });

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;

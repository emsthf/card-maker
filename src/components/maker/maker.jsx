import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
            id: '3', 
            name: 'Tim Cook', 
            company: 'Apple', 
            theme: 'colorful', 
            title: 'CEO', 
            email: 'timcook@apple.com', 
            message: 'hello', 
            fileName: 'cook', 
            fileURL: null
        }, 
    ]);
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

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;

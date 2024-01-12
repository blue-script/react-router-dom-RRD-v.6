import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from './components/pages/PageOne';
import {PageTwo} from './components/pages/PageTwo';
import {PageThree} from './components/pages/PageThree';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    Здесь будет навигация
                </div>
                <div className={styles.content}>
                  <Routes>
                    <Route path='/' element={<Navigate to='/page1'/>}/>
                    <Route path='/page1' element={<PageOne/>}/>
                    <Route path='/page2' element={<PageTwo/>}/>
                    <Route path='/page3' element={<PageThree/>}/>
                    <Route path='/error404' element={<Error404/>}/>
                    <Route path='/*' element={<Navigate to='/error404'/>}/>
                  </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;

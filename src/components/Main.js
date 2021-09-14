import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Sidebar from '../components/Resume';

export default function Main(children) {
    return (
        <div class="container gutter-top">
            <Header />

            <div class="row sticky-parent">
                <Sidebar />
                <Resume />
            </div>

        </div>
    );
}
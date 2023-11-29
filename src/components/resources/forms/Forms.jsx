'use client';
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

export default function Forms() {
	const [currentForm, setCurrentForm] = useState('login');

	return <>{currentForm === 'login' ? <Login setForm={setCurrentForm} /> : <Registration setForm={setCurrentForm} />}</>;
}

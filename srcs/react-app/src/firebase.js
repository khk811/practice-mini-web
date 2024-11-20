import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator, getDocs, addDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const timestamp = Timestamp.now();

if (window.location.hostname === "localhost") {
    connectFirestoreEmulator(firestore, 'localhost', 8080);
}

export { firestore, timestamp };
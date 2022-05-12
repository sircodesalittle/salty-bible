import React, {useEffect, useState} from 'react';
import {getUsers, User} from '../data/users';
import {
    IonButton,
  IonContent,
  IonList,
  IonPage,
} from '@ionic/react';
import UserListItem from "../components/UserListItem";

const Login: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [authUrl, setAuthUrl] = useState("");

  useEffect(() => {
    fetch('http://localhost:3333/google/redirect').then(response => response.json())
    .then(data => {
        setAuthUrl(data.redirectUrl);
    })


  }, []);

  const testClick = () => {
    fetch('http://localhost:3333/authcheck', { 
    method: 'get', 
    headers: new Headers({
        'Authorization': 'Bearer ' + localStorage.getItem('salty_token')
    })
}).then((response) => response.json()).then(d=>console.log(d))
  }

  const logoutClick = () => {
      fetch('http://localhost:3333/logout', {
        method: 'post', 
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('salty_token')
        })
    }).then((response) => response.json()).then(d=>console.log(d))
  }

  return (
    <IonPage id="login-page">
      <IonContent fullscreen>
        <IonButton href={authUrl}>Login</IonButton>
        <IonButton onClick={testClick}>Test Auth</IonButton>
        <IonButton onClick={logoutClick}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

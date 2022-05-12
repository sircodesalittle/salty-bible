import React, {useEffect, useState} from 'react';
import {getUsers, User} from '../data/users';
import {
    IonButton,
  IonContent,
  IonList,
  IonPage,
} from '@ionic/react';

const Auth: React.FC = () => {

  const [authUrl, setAuthUrl] = useState("");

  useEffect(() => {
      /**
   * Construct URL for the callback route.
   */
  const url = new URL('http://localhost:3333/google/callback')

  /**
   * Add the query provided by google.
   */
  url.search = window.location.search

  /**
   * Send the final request. You can use Axios if you want.
   */
  const response = fetch(url.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    credentials: 'include'
  }).then(data => data.json()).then(resp => {
    fetch('http://localhost:3333/authcheck', { 
      method: 'get', 
      headers: new Headers({
          'Authorization': 'Bearer ' + resp.token, 
      })
  }).then(resp => resp.json()).then((data) => console.log(data))
  })
    
  }, []);

  const testClick = () => {
    fetch('http://localhost:3333/authcheck', { 
    method: 'get', 
    headers: new Headers({
        'Authorization': 'Bearer ', 
        'Content-Type': 'application/x-www-form-urlencoded'
    })
}).then((response) => response.json()).then(d=>console.log(d))
  }

  return (
    <IonPage id="auth-page">
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Auth;

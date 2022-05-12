import React, {useEffect, useState} from 'react';
import {getUsers, User} from '../data/users';
import {
  IonContent,
  IonList,
  IonPage,
} from '@ionic/react';
import './Home.css';
import UserListItem from "../components/UserListItem";

const Home: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const _users = getUsers();
    setUsers(_users);
  }, []);

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonList>
          {users.map(u => <UserListItem key={u.id} user={u} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

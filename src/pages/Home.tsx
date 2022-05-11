import MessageListItem from '../components/UserListItem';
import {useEffect, useState} from 'react';
import {getUsers, User} from '../data/users';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import UserListItem from "../components/UserListItem";

const Home: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const _users = getUsers();
    setUsers(_users);
  }, []);

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent/>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {users.map(u => <UserListItem key={u.id} user={u} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

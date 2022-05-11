import React, {useEffect, useState} from 'react';
import {getSingularUser, User} from '../data/users';
import {
  IonBackButton,
  IonButtons, IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel, IonList,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewUser.css';
import {getDatePlan} from "../data/plans";

function ViewUser() {
  const [user, setUser] = useState<User>();
  const [ot1, setOt1] = useState();
  const [nt1, setNt1] = useState();
  const [ot2, setOt2] = useState();
  const [nt2, setNt2] = useState();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const _user = getSingularUser(parseInt(params.id, 10));
    if (_user) {
      const _ot1 = getDatePlan(1, _user.lastReadOT1);
      const _nt1 = getDatePlan(1, _user.lastReadNT1);
      const _ot2 = getDatePlan(1, _user.lastReadOT2);
      const _nt2 = getDatePlan(1, _user.lastReadNT1);
      setOt1(_ot1);
      setNt1(_nt1);
      setOt2(_ot2);
      setNt2(_nt2);
    }
    setUser(_user);
  }, []);

  return (
    <IonPage id="view-user-page">
      <IonContent fullscreen>
        {user ? (
          <IonList>
            <IonItem>
              <IonLabel>{nt1}</IonLabel>
              <IonCheckbox/>
            </IonItem>
            <IonItem>
              <IonLabel>{nt2}</IonLabel>
              <IonCheckbox/>
            </IonItem>
            <IonItem>
              <IonLabel>{ot1}</IonLabel>
              <IonCheckbox/>
            </IonItem>
            <IonItem>
              <IonLabel>{ot2}</IonLabel>
              <IonCheckbox/>
            </IonItem>
          </IonList>
        ) : (
          <div>User not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

export default ViewUser;

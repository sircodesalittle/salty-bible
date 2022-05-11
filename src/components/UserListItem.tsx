import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { User } from '../data/users';
import './UserListItem.css';
import React from "react";

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <IonItem routerLink={`/user/${user.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"/>
      <IonLabel className="ion-text-wrap">
        <h2>
          {user.name}
          <span className="date">
            <IonNote>{user.activePlan}</IonNote>
          </span>
        </h2>
        <h3>{user.email}</h3>
      </IonLabel>
    </IonItem>
  );
};

export default UserListItem;

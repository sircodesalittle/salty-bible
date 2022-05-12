import React, {useEffect, useState} from 'react';
import {getSingularUser, User} from '../data/users';
import {
    IonCheckbox,
    IonContent,
    IonItem,
    IonLabel, IonList,
    IonPage,
} from '@ionic/react';
import {useParams} from 'react-router';
import {getMultipleDateReadings, ReadingDate, ReadingsByType} from "../data/plans";
import './ViewUser.css'

function ViewUser() {
    const [user, setUser] = useState<User>();
    const [readings, setReadings] = useState<ReadingsByType>({
        ot1: {
            reading: '',
            date: '0001',
        },
        ot2: {
            reading: '',
            date: '0001',
        },
        nt1: {
            reading: '',
            date: '0001',
        },
        nt2: {
            reading: '',
            date: '0001',
        },
    });
    const params = useParams<{ id: string }>();

    useEffect(() => {
        const _user = getSingularUser(parseInt(params.id, 10));
        if (_user) {
            const _readings = getMultipleDateReadings(1, _user.lastReadOT1Date, _user.lastReadOT2Date, _user.lastReadNT1Date, _user.lastReadNT2Date);
            setReadings(_readings);
        }
        setUser(_user);
    }, [params.id]);

    const formatDate = (date: ReadingDate) => {
        const formattedDate = new Date(2020, Number(date.substring(0, 3)), Number(date.substring(2)));
        return formattedDate.toLocaleDateString('en-us', {month:"long", day:"numeric"})
    }

    return (
        <IonPage id="view-user-page">
            <IonContent className={'ion-padding'}>
                {user ? (
                    <IonList>
                        <IonItem lines={'none'}>
                            <IonCheckbox slot="start"/>
                            <IonLabel className={'ion-text-wrap'}>{readings.nt1.reading ? readings.nt1.reading : 'All Done!'}<br/> ({formatDate(readings.nt1.date)})</IonLabel>
                        </IonItem>
                        <IonItem lines={'none'}>
                            <IonCheckbox slot="start"/>
                            <IonLabel className={'ion-text-wrap'}>{readings.nt2.reading ? readings.nt2.reading : 'All Done!'}<br/> ({formatDate(readings.nt2.date)})</IonLabel>
                        </IonItem>
                        <IonItem lines={'none'}>
                            <IonCheckbox slot="start"/>
                            <IonLabel className={'ion-text-wrap'}>{readings.ot1.reading ? readings.ot1.reading : 'All Done!'}<br/> ({formatDate(readings.ot1.date)})</IonLabel>
                        </IonItem>
                        <IonItem lines={'none'}>
                            <IonCheckbox slot="start"/>
                            <IonLabel className={'ion-text-wrap'}>{readings.ot2.reading ? readings.ot2.reading : 'All Done!'}<br/> ({formatDate(readings.ot2.date)})</IonLabel>
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

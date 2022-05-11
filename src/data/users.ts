import {DateRead} from "./plans";

export interface User {
    id: number,
    name: string,
    email: string,
    activePlan: string,
    lastReadOT1: DateRead,
    lastReadOT2: DateRead,
    lastReadNT1: DateRead,
    lastReadNT2: DateRead
}

const users: User[] = [
    {
        id: 0,
        name: "Alex Dykstra",
        email: "alex@alexdykstra.com",
        activePlan: "1",
        lastReadOT1: "0101",
        lastReadOT2: "0000",
        lastReadNT1: "0000",
        lastReadNT2: "0101"
    },
    {
        id: 1,
        name: "Torey Mercurio",
        email: "mtmercurio@gmail.com",
        activePlan: "1",
        lastReadOT1: "0203",
        lastReadOT2: "0000",
        lastReadNT1: "1210",
        lastReadNT2: "0101"
    },
    {
        id: 2,
        name: "Matt One",
        email: "mattone@gmail.com",
        activePlan: "1",
        lastReadOT1: "0203",
        lastReadOT2: "0000",
        lastReadNT1: "1210",
        lastReadNT2: "0101"
    },
    {
        id: 3,
        name: "Matt Two",
        email: "matttwo@gmail.com",
        activePlan: "1",
        lastReadOT1: "0303",
        lastReadOT2: "0000",
        lastReadNT1: "1113",
        lastReadNT2: "0101"
    },
];

export const getUsers = () => users;

export const getSingularUser = (id: number) => users.find(u => u.id === id);
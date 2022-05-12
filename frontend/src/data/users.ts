import {ReadingDate} from "./plans";

export interface User {
    id: number,
    name: string,
    email: string,
    activePlan: string,
    lastReadOT1Date: ReadingDate,
    lastReadOT2Date: ReadingDate,
    lastReadNT1Date: ReadingDate,
    lastReadNT2Date: ReadingDate
}

const users: User[] = [
    {
        id: 0,
        name: "Alex Dykstra",
        email: "alex@alexdykstra.com",
        activePlan: "1",
        lastReadOT1Date: "0101",
        lastReadOT2Date: "0000",
        lastReadNT1Date: "0000",
        lastReadNT2Date: "0101"
    },
    {
        id: 1,
        name: "Torey Mercurio",
        email: "mtmercurio@gmail.com",
        activePlan: "1",
        lastReadOT1Date: "0203",
        lastReadOT2Date: "0000",
        lastReadNT1Date: "1110",
        lastReadNT2Date: "0101"
    },
    {
        id: 2,
        name: "Matt One",
        email: "mattone@gmail.com",
        activePlan: "1",
        lastReadOT1Date: "0203",
        lastReadOT2Date: "0000",
        lastReadNT1Date: "1110",
        lastReadNT2Date: "0101"
    },
    {
        id: 3,
        name: "Matt Two",
        email: "matttwo@gmail.com",
        activePlan: "1",
        lastReadOT1Date: "0303",
        lastReadOT2Date: "0000",
        lastReadNT1Date: "1013",
        lastReadNT2Date: "0101"
    },
];

export const getUsers = () => users;

export const getSingularUser = (id: number) => users.find(u => u.id === id);

export interface Plan {
    "name": string,
    "id": number,
    "readingsByDate" : {
        "0000": {},
        "0101": {
            "ot1": "Psalms 1",
            "ot2": "Genesis 1-2",
            "nt1": "Matthew 1:1-17",
            "nt2": "Acts 1:1-11"
        },
        "0203": {
            "ot1": "Psalms 2",
            "ot2": "Genesis 3-4",
            "nt1": "Matthew 1:18-25",
            "nt2": "Acts 1:12-26"
        },
        "1210": {
            "ot1": "Job 42",
            "ot2": "Malachi 1-4",
            "nt1": "John 21:15-25",
            "nt2": "Revelation 22"
        },
        "0303": {
            "ot1": "Psalms 50",
            "ot2": "Numbers 5-6",
            "nt1": "Matthew 22:1-14",
            "nt2": "Romans 2"
        },
        "1113": {
            "ot1": "Ezekiel 33-34",
            "ot2": "Job 12",
            "nt1": "2 Peter 2:24-29",
            "nt2": "John 10:22-42"
        },
    }
}

export type DateRead = "0000" | "0101" | "0203" | "1210" | "0303" | "1113"

const plans: Plan[] = [
    {
        "name": "navigators-reading-plan",
        "id": 1,
        "readingsByDate" : {
            "0000": {},
            "0101": {
                "ot1": "Psalms 1",
                "ot2": "Genesis 1-2",
                "nt1": "Matthew 1:1-17",
                "nt2": "Acts 1:1-11"
            },
            "0203": {
                "ot1": "Psalms 2",
                "ot2": "Genesis 3-4",
                "nt1": "Matthew 1:18-25",
                "nt2": "Acts 1:12-26"
            },
            "1210": {
                "ot1": "Job 42",
                "ot2": "Malachi 1-4",
                "nt1": "John 21:15-25",
                "nt2": "Revelation 22"
            },
            "0303": {
                "ot1": "Psalms 50",
                "ot2": "Numbers 5-6",
                "nt1": "Matthew 22:1-14",
                "nt2": "Romans 2"
            },
            "1113": {
                "ot1": "Ezekiel 33-34",
                "ot2": "Job 12",
                "nt1": "2 Peter 2:24-29",
                "nt2": "John 10:22-42"
            },
        }
    },
];

export const getPlans = () => plans;

export const getPlan = (id: number) => plans.find(p => p.id === id);

export const getDatePlan = (id: number, date: DateRead) => getPlan(id)?.readingsByDate[date];
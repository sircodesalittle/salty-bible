const readingDates = [
    '0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009', '0010',
    '0011', '0012', '0013', '0014', '0015', '0016', '0017', '0018', '0019', '0020',
    '0021', '0022', '0023', '0024', '0025', '0026', '0027', '0028', '0029', '0030',
    '0031', '0101', '0102', '0103', '0104', '0105', '0106', '0107', '0108', '0109',
    '0110', '0111', '0112', '0113', '0114', '0115', '0116', '0117', '0118', '0119',
    '0120', '0121', '0122', '0123', '0124', '0125', '0126', '0127', '0128', '0201',
    '0202', '0203', '0204', '0205', '0206', '0207', '0208', '0209', '0210', '0211',
    '0212', '0213', '0214', '0215', '0216', '0217', '0218', '0219', '0220', '0221',
    '0222', '0223', '0224', '0225', '0226', '0227', '0228', '0229', '0230', '0231',
    '0301', '0302', '0303', '0304', '0305', '0306', '0307', '0308', '0309', '0310',
    '0311', '0312', '0313', '0314', '0315', '0316', '0317', '0318', '0319', '0320',
    '0321', '0322', '0323', '0324', '0325', '0326', '0327', '0328', '0329', '0330',
    '0401', '0402', '0403', '0404', '0405', '0406', '0407', '0408', '0409', '0410',
    '0411', '0412', '0413', '0414', '0415', '0416', '0417', '0418', '0419', '0420',
    '0421', '0422', '0423', '0424', '0425', '0426', '0427', '0428', '0429', '0430',
    '0431', '0501', '0502', '0503', '0504', '0505', '0506', '0507', '0508', '0509',
    '0510', '0511', '0512', '0513', '0514', '0515', '0516', '0517', '0518', '0519',
    '0520', '0521', '0522', '0523', '0524', '0525', '0526', '0527', '0528', '0529',
    '0530', '0601', '0602', '0603', '0604', '0605', '0606', '0607', '0608', '0609',
    '0610', '0611', '0612', '0613', '0614', '0615', '0616', '0617', '0618', '0619',
    '0620', '0621', '0622', '0623', '0624', '0625', '0626', '0627', '0628', '0629',
    '0630', '0631', '0701', '0702', '0703', '0704', '0705', '0706', '0707', '0708',
    '0709', '0710', '0711', '0712', '0713', '0714', '0715', '0716', '0717', '0718',
    '0719', '0720', '0721', '0722', '0723', '0724', '0725', '0726', '0727', '0728',
    '0729', '0730', '0731', '0801', '0802', '0803', '0804', '0805', '0806', '0807',
    '0808', '0809', '0810', '0811', '0812', '0813', '0814', '0815', '0816', '0817',
    '0818', '0819', '0820', '0821', '0822', '0823', '0824', '0825', '0826', '0827',
    '0828', '0829', '0830', '0901', '0902', '0903', '0904', '0905', '0906', '0907',
    '0908', '0909', '0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917',
    '0918', '0919', '0920', '0921', '0922', '0923', '0924', '0925', '0926', '0927',
    '0928', '0929', '0930', '0931', '1001', '1002', '1003', '1004', '1005', '1006',
    '1007', '1008', '1009', '1010', '1011', '1012', '1013', '1014', '1015', '1016',
    '1017', '1018', '1019', '1020', '1021', '1022', '1023', '1024', '1025', '1026',
    '1027', '1028', '1029', '1030', '1101', '1102', '1103', '1104', '1105', '1106',
    '1107', '1108', '1109', '1110', '1111', '1112', '1113', '1114', '1115', '1116',
    '1117', '1118', '1119', '1120', '1121', '1122', '1123', '1124', '1125', '1126',
    '1127', '1128', '1129', '1130', '1131'
]

export type ReadingDate = typeof readingDates[number]

export type Readings = {
    ot1: string
    ot2: string
    nt1: string
    nt2: string
}

export interface Plan {
    name: string,
    id: number,
    readingsByDate: {
        [key in ReadingDate]: Readings
    }
}

const plans: Plan[] = [
    {
        'name': 'navigators-reading-plan',
        'id': 1,
        readingsByDate : {
            '0102': {
                ot1: 'Psalms 1',
                ot2: 'Genesis 1-2',
                nt1: 'Matthew 1:1-17',
                nt2: 'Acts 1:1-11'
            },
            '0204': {
                'ot1': 'Psalms 2',
                'ot2': 'Genesis 3-4',
                'nt1': 'Matthew 1:18-25',
                'nt2': 'Acts 1:12-26'
            },
            '1110': {
                'ot1': 'Job 42',
                'ot2': 'Malachi 1-4',
                'nt1': 'John 21:15-25',
                'nt2': 'Revelation 22'
            },
            '0304': {
                'ot1': 'Psalms 50',
                'ot2': 'Numbers 5-6',
                'nt1': 'Matthew 22:1-14',
                'nt2': 'Romans 2'
            },
            '1014': {
                'ot1': 'Ezekiel 33-34',
                'ot2': 'Job 12',
                'nt1': '2 Peter 2:24-29',
                'nt2': 'John 10:22-42'
            },
        }
    },
];

// const createDateArray = () => {
//     let dateArray = []
//     let date = new Date()
//     for (let j = 0; j < 12; j++) {
//         for (let i = 1; i < 32; i++) {
//             date.setMonth(j, i);
//             if (date.getMonth() !== j) {
//                 break
//             }
//             dateArray.push(("0" + date.getMonth()).slice(-2) + ("0" + date.getDate()).slice(-2))
//         }
//     }
//     return dateArray;
// }

// export const getPlans = () => plans;

export const getPlan = (): Plan => plans[0];

export const getDateReading = (id: number, date: ReadingDate): Readings | undefined => getPlan().readingsByDate[date];

export type ReadingsByType = {
    ot1: {
        reading: string,
        date: ReadingDate,
    },
    ot2: {
        reading: string,
        date: ReadingDate,
    },
    nt1: {
        reading: string,
        date: ReadingDate,
    },
    nt2: {
        reading: string,
        date: ReadingDate,
    },
}

export const getNextReadingDate = (currentDate: ReadingDate) => {
    const currentReadingDateIndex = readingDates.indexOf(currentDate);
    if (currentReadingDateIndex < readingDates.length - 1) {
        return readingDates[currentReadingDateIndex + 1];
    } else {
        return readingDates[0];
    }
}

export const getMultipleDateReadings = (id: number, lastReadOT1Date: ReadingDate, lastReadOT2Date: ReadingDate, lastReadNT1Date: ReadingDate, lastReadNT2Date: ReadingDate): ReadingsByType => {
    let currentOT1ReadingDate = getNextReadingDate(lastReadOT1Date);
    let currentOT2ReadingDate = getNextReadingDate(lastReadOT2Date);
    let currentNT1ReadingDate = getNextReadingDate(lastReadNT1Date);
    let currentNT2ReadingDate = getNextReadingDate(lastReadNT2Date);

    const ot1Reading = getDateReading(id, currentOT1ReadingDate)?.ot1;
    const ot2Reading = getDateReading(id, currentOT2ReadingDate)?.ot2;
    const nt1Reading = getDateReading(id, currentNT1ReadingDate)?.nt1;
    const nt2Reading = getDateReading(id, currentNT2ReadingDate)?.nt2;
    return {
        ot1: {
            reading: ot1Reading ? ot1Reading : '',
            date: currentOT1ReadingDate,
        },
        ot2: {
            reading: ot2Reading ? ot2Reading : '',
            date: currentOT2ReadingDate,
        },
        nt1: {
            reading: nt1Reading ? nt1Reading : '',
            date: currentNT1ReadingDate,
        },
        nt2: {
            reading: nt2Reading ? nt2Reading : '',
            date: currentNT2ReadingDate,
        },
    }
}

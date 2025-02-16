import { atom, selector } from 'recoil';

//asynchronous data fetching used later
/*export const NotificationAtom = atom({
    key: 'NotificationAtom',
    default: {
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0
    }
});*/


//A normal async function
/*export const NotificationAtom = atom({
    key: "NotificationAtom",
    default: selector({
        key: "NotificationAtomSelector",
        get: async () => {
            const response = await fetch("http://localhost:3000/notifications")
            const data =  await response.json();
            return data;
        }
    })
})*/

// using axios

import axios from 'axios';

export const NotificationAtom = atom({
    key: "NotificationAtom",
    default: selector({
        key: "NotificationAtomSelector",
        get: async () => {
            // await new Promise(r => setTimeout(r, 7000));//sleeps for 7 seconds 
            const response = await axios.get("http://localhost:3000/notifications")
                return response.data;
        }
    })
})


export const TotalNotificationSelector = selector({
    key: 'TotoalNotificationselector',
    get: ({get}) =>{
        const totalnotifications = get(NotificationAtom);
        return totalnotifications.network + totalnotifications.jobs + totalnotifications.messaging + totalnotifications.notifications;
    }
});


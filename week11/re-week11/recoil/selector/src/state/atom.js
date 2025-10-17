
import { atom ,selector} from "recoil"

export const a = atom({
   default: 0,
   key:"selector"
})

export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({ get }) {
        const currentCount = get(a);
        const isEven = currentCount % 2 == 0;
        return isEven;
    }
})
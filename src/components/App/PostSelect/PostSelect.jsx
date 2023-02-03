import {useState} from "react";

export function PostSelect() {
    const values = [10,25,100];

    const [value,setValue] = useState(values[0]);

    return(
        <select>
            <option></option>
        </select>
    )
}

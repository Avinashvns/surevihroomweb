
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

export default function Selectbox(props) {

    const [data, setData] = useState([]);
    const [showuser, setShowUser] = useState('');
    const GetApiData = window.apiGetData;

    useEffect(() => {

        const handleFetchCharacter = async () => {
            try {
                // const jsonData = await fetApi();
                const jsonData = await GetApiData(`http://surevih.in/api/allusertype`);
                const result = jsonData['usertypes'];
                console.log("Re;-", result);
                setData(result);
            } catch (error) {
                // Handle error, e.g., show an error message
                console.error('Error fetching character:', error);
            }
        };

        handleFetchCharacter();
    }, [GetApiData]);

    const handleChange = (event) => {
        // console.log("data  :" , jsonvalue);
        console.log("Target Value :- ", event.target.value);
        setShowUser(event.target.value);
    };

    // console.log("All types data", data)

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={showuser}
                label="Show User Type"
                onChange={handleChange}
            >
                {
                    data.map((item) =>
                        <MenuItem key={item.id} value={item.id}>{item.usertype}</MenuItem>
                    )
                }
            </Select>

        </FormControl>
    );
}
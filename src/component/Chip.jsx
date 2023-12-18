import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

const myicons = ['Hostel', 'Single Room','1 BHK', ' 2 BHK', '3 BHK'];

const Simplechip = ({ name, icon, handlerClick, handleDelete }) => {
    return (
        <Stack spacing={1}>
            <Chip
                icon={icon}
                label={name}
                variant="outlined"
                onClick={handlerClick}
                onDelete={handleDelete}
                sx={{
                    width: 'fit-content',
                }}
            />
        </Stack>
    );
}

function BasicChips() {
    return (
        <Stack spacing={1}>
            <Chip    
                    label={myicons[0]}
                    variant="outlined"
                />
                <Chip           
                    label={myicons[1]}
                    variant="outlined"
                />
        </Stack>
    );
}

export { BasicChips, Simplechip };

function ChipList({data}) {
    return (
        <Stack spacing={0.5}>
            {data.map((item, index) => (
                <Chip key={index} 
                label={item}
                variant="outlined"
                icon={<AddIcon />}
                sx={{
                    width: 'fit-content',
                }}
                />
            ))}
        </Stack>
    );
}

export default ChipList;


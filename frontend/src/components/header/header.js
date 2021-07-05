import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './header.css';
import { withStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const StyledSelect = withStyles({
    select: {
        color: 'antiquewhite'
    },
    icon: {
        color: 'rgb(255 255 255 / 80%)'
    }
})(Select);

export default function Header({currentLocale, onLanguageSelect}) {
    
    let history = useHistory();

    const handlePageChange = (page) => {
        history.push(`/${currentLocale}${page}`)
    }

    return (
        <div className="headerContainer">
            <div className="linksContainer">
                <Button variant="contained" color="primary" onClick={() => { handlePageChange('') }} disableElevation>Main</Button>
                <Button variant="contained" color="primary" onClick={() => { handlePageChange('/first') }} disableElevation>First</Button>
                <Button variant="contained" color="primary" onClick={() => { handlePageChange('/second') }} disableElevation>Second</Button>
            </div>
            <div>
            <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currentLocale}
                onChange={onLanguageSelect} >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'fr'}>Francaise</MenuItem>
                <MenuItem value={'ro'}>Romana</MenuItem>
            </StyledSelect>
            </div>
        </div>
    )
}
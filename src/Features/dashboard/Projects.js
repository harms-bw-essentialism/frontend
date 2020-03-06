import React, { useState, useEffect } from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import {Paper} from '@material-ui/core'
// import { withStyles } from '@material-ui/core/styles';
// import { Edit, Delete } from '@material-ui/icons';
import axios from 'axios';

const styles = {};

const Projects = () => {
    const [project, setProject] = useState();

    useEffect(() => {
        axios
            .get('https://essentialism2020.herokuapp.com/api/essentialism/projects/user/:id')
            .then(response => setProject(response.data.results))
            .catch(err => console.log('Error', err));
    }, []);

    return (
    <React.Fragment>
        <List component='ul'>
            {project.map(({projectId, projectName}) =>(
                <ListItem
                    key={projectId}
                    button
                    onClick={() => onSelect(projectId)}
                >
                    <ListItemText primary={projectName} />
                    <ListItemSecondAction>
                        <IconButton
                            color='primary'
                            onClick={() => ondeviceorientationabsolute(projectId)}
                        >
                            <Delete />
                        </IconButton>
                    </ListItemSecondAction>
                </ListItem>
            ))}
        </List>
    </React.Fragment>
    )
};

export default Projects;
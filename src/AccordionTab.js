import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import './Menu.scss';

function AccordionTab({title, children}) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
                >
                 <Typography> {title}</Typography>
                    </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       {children}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionTab;

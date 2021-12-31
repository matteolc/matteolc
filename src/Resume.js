import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {grey} from '@mui/material/colors'
import { styled } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 3, 
  marginRight: '2px',
  fontFamily: 'DM Mono'
}));

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  background: 'none', 
  color: grey[400],
  fontFamily: 'DM Mono',
}));

const ResumeItem = ({title, location, period, description, skills=[], customers=[], current=false}) => {
    return (
        <Card 
            variant="outlined" 
            sx={{ 
                backgroundColor: 'transparent', 
                border: 0, 
                color: grey[200],
                marginBottom: 4
            }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color={grey[500]} gutterBottom>
                    <StyledChip size="small" variant={current ? 'filled' : 'outlined'} color={'primary'} label={period} />
                </Typography>
                <Typography variant="h4" color={grey[900]} component="div">
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1.5 }} color={grey[500]}>
                    {location}
                </Typography>
                <Typography sx={{ mb: 2 }} variant="body1" color={grey[800]}>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </Typography>
                <div style={{maxWidth: '60%'}}>
                    {skills.map(skill => <StyledChip variant='filled' size="small" color={'secondary'} label={skill} />)}
                </div>                
                <div style={{maxWidth: '60%'}}>
                    {customers.length > 0 && <StyledListSubheader sx={{paddingLeft: 0}} disableSticky={true}>
                        Noticeable Customers
                    </StyledListSubheader>}                     
                    {customers.map(skill => <StyledChip variant='outlined' size="small" color={'primary'} label={skill} />)}
                </div>
            </CardContent>
        </Card>        
    )
}

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275}}>
        <StyledListSubheader disableSticky={true}>
            Work Experience
        </StyledListSubheader>   
        <ResumeItem 
            title="Senior Software Developer" 
            location="Fabbricadigitale" 
            description='<ul>
            <li>Succesfully develop from the ground-up Typescript applications for JSON API micro-services</li>
            <li>Mentor junior developers on programming best-practices</li>
            <li>Introduce Docker in place of Virtual Machines to the software factory</li>
            <li>Provide application templates to the team</li>
            <li>Introduce Git pipelines, automation tools and quality gates to the team</li>
            <li>Introduce logging and observability guidelines to the software factory</li>
            <li>Timely resolve incidents in production environments</li>
            <li>Support and add features to the softswitch and traffic generator applications authored by myself</li>
            </ul>' 
            period='2018 - Current' 
            current={true}
            skills={[
                'Ruby', 
                'Javascript', 
                'Typescript', 
                'React', 
                'Nextjs', 
                'Express', 
                'Rails', 
                'FreeSWITCH', 
                'Docker', 
                'Kibana', 
                'Elastic' , 
                'TimescaleDB', 
                'PostgreSQL', 
                'Sysadmin', 
                'VoIP',  
                'Git/CI-CD',  
            ]}/>
        <ResumeItem 
            title="Freelance Full-Stack Developer" 
            location="Milan, IT" 
            description='<p>Succesfully develop from the ground-up Ruby-on-Rails applications and Ruby JSON APIs with React frontend for:</p>
            <ul> 
            <li>Automated invoicing with electronic regulatory invoicing</li>
            <li>Multi-level reseller application for airtime top-up</li>
            <li>Lead generation and customer CRM</li>
            <li>Softswitch for wholesale voice operators</li>
            </ul>' 
            period='2012 - 2018' 
            skills={[
                'Javascript', 
                'React', 
                'Rails', 
                'FreeSWITCH', 
                'Docker', 
                'PostgreSQL', 
                'VoIP', 
                'Sysadmin',
                'Git/CI-CD',  
                'VMWare',
            ]}
            customers={[
                'Sicuritalia',
                'Fabbricadigitale',
                'Digiconnect',
            ]}/> 
        <ResumeItem 
            title="Voice Network Technical Officer" 
            location="Soleto SPA" 
            description='Succesfully plan and deploy Voice-over-IP services on top of the existing Fiber Optic and Wi-Fi propietary network' 
            period='2009 - 2012' 
            skills={[
                'Digitalk', 
                'Squire', 
                'VoIP', 
                'SS7', 
                'Wi-Fi', 
                'Sysadmin' 
            ]}/> 
        <ResumeItem 
            title="Technical Support Engineer" 
            location="Digitalk, Rome/Milton Keynes" 
            description='<ul>
            <li>Timely resolve support tickets with various levels of escalation</li>
            <li>Succesfully rack-up and bootstrap new customers</li>
            <li>Help the development team in the identification and resolution of bugs</li>
            <li>Contribute to internal and customer facing documentation</li>
            </ul>' 
            period='2006 - 2009' 
            skills={[
                'MSSQL', 
                'VoIP', 
                'SS7/ISDN',
                'Sysadmin' 
            ]}
            customers={[
                'BeeOne', 
                'Nowtel', 
                'Primus', 
                'Kalaam', 
                'Moreminutes',
                'Hilf Telecom', 
                'MilleniCom', 
                'Wavecrest'
            ]}/> 
        <ResumeItem 
            title="Voice Network Engineer" 
            location="Intrastet SA, Greece" 
            description='<ul>
            <li>Succesfully operate and upgrade the proprietary Wi-Fi and Satellite network</li>
            <li>Deploy and help troubleshoot customer VoIP issues over wireless</li>
            </ul>' 
            period='2005 - 2006' 
            skills={[
                'Wi-Fi', 
                'VoIP', 
                'Mediatrix',
                'Sysadmin' 
            ]}/> 
        <ResumeItem 
            title="Embedded Software Developer" 
            location="ISD SA, Greece" 
            description='Produce reference designs for HDL algorithms and System-on-Chip sub-systems aimed at wireless Home-Theater set-top boxes' 
            period='2003 - 2005' 
            skills={[
                'HDL', 
                'FPGA',
                'Wi-Fi' 
            ]}/> 
        <StyledListSubheader disableSticky={true}>
            Education
        </StyledListSubheader>              
        <ResumeItem 
            title="STMicrolectronics" 
            location="Milan, IT" 
            description='Succesfully develop an HDL synchronization algorithm for Digital Video Broadcasting signals' 
            period='2002 - 2003'
            skills={[
                'MatLAB', 
            ]} />       
        <ResumeItem 
            title="Telecommunication Engineering, M.Sc" 
            location="Politecnico di Milano" 
            period='1998 - 2003' /> 
    </Box>
  );
}
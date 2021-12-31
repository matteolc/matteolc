import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import WaterIcon from '@mui/icons-material/Water';
import ListSubheader from '@mui/material/ListSubheader';
import {grey} from '@mui/material/colors'
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import {uniqBy, upperFirst} from 'lodash';

const Skills = [
    { key: 'programming', primary: "Ruby", secondary: "Since 2012",  rating: 4.5 },
    { key: 'programming', primary: "Javascript", secondary: "Since 2012",  rating: 4 },
    { key: 'programming', primary: "Typescript", secondary: "Since 2018",  rating: 3.5 },
    { key: 'programming', primary: "Other", secondary: "C++, Bash, LUA, T-SQL" },
    { key: 'frameworks', primary: "React", secondary: "Since 2012",  rating: 4 },
    { key: 'frameworks', primary: "Rails", secondary: "Since 2012",  rating: 4 },
    { key: 'frameworks', primary: "Nextjs", secondary: "Since 2021",  rating: 2.5 },
    { key: 'operations', primary: "Docker", secondary: "Since 2016",  rating: 4.5 },
    { key: 'operations', primary: "FreeSWITCH", secondary: "Since 2012",  rating: 4 },
    { key: 'operations', primary: "Git/CI-CD", secondary: "Since 2015",  rating: 3.5 },
    { key: 'operations', primary: "Kibana", secondary: "Since 2020",  rating: 3 },
    { key: 'operations', primary: "Sysadmin", secondary: "Since 2005",  rating: 4.5 },
    { key: 'database/Queues', primary: "PostgreSQL", secondary: "Since 2012",  rating: 4 },
    { key: 'database/Queues', primary: "TimescaleDB", secondary: "Since 2021",  rating: 2 },
    { key: 'database/Queues', primary: "MSSQL Server", secondary: "2006 - 2009",  rating: 3.5 },
    { key: 'database/Queues', primary: "Elasticsearch", secondary: "Since 2019",  rating: 3.5 },
    { key: 'database/Queues', primary: "Redis", secondary: "Since 2012",  rating: 4 },
    { key: 'database/Queues', primary: "Other", secondary: "MySQL, Kafka, RabbitMQ" },
];

const SoftSkills = [
    'Empathy',
    'Listening',
    'Passion'
];

const Interests = [
    'Cooking',
    'Music',
    'Painting',
    'Lego',
    'Gaming'
];

const StyledList = styled(List)(({ theme }) => ({
    width: '260px', 
    color: grey[200]
}));

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  background: 'none', 
  color: grey[400],
  fontFamily: 'DM Mono'
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 3, 
  marginRight: '2px',
  marginBottom: '2px',
  fontFamily: 'DM Mono'
}));

const SkillRatingItem = ({rating, primary, secondary}) => {
    return (
      <ListItem
        secondaryAction={
            rating && <Rating 
                size="small"
                defaultValue={rating} 
                precision={0.5} 
                icon={<Brightness1Icon fontSize="inherit" />}
                emptyIcon={<Brightness1Icon fontSize="inherit" />}            
                readOnly />
        }>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>        
    )
}

const SkillRatingSection = ({title, children}) => {
    return (
        <StyledList 
            dense={true}
            subheader={
                <StyledListSubheader disableSticky={true}>
                    {title}
                </StyledListSubheader>
            }>
                {children}
        </StyledList>        
    )
};

const SkillChipsSection = ({chips}) => {
    return (
        <ListItem>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'flex-start'
            }}>
                {chips.map(s => <StyledChip size="small" variant='outlined' label={s} />)}
            </div> 
        </ListItem>        
    )
}

export default function SkillRating() {
  return (
      <Stack spacing={2}>          
        {uniqBy(Skills, 'key').map(({key}) => {
            return (
                    <SkillRatingSection title={upperFirst(key)}>
                        {Skills.filter(s => s.key === key).map(({primary, secondary, rating}) => 
                            <SkillRatingItem 
                                primary={primary} 
                                secondary={secondary} 
                                rating={rating}/>
                        )}
                    </SkillRatingSection>    
            )
        })}
        <SkillRatingSection title='Soft-skills'>
            <SkillChipsSection chips={SoftSkills}/>
        </SkillRatingSection>
        <SkillRatingSection title='Interests'>
            <SkillChipsSection chips={Interests}/>
        </SkillRatingSection>
        <SkillRatingSection title='Volunteer Work'>
            <ListItem>
                <ListItemIcon >
                    <WaterIcon color={'custom'}/>
                </ListItemIcon>
                <ListItemText 
                    primary="Archelon" 
                    secondary="The Sea Turtle Protection Society of Greece (1999 - 2005)" />
            </ListItem>
        </SkillRatingSection>
      </Stack>
)}
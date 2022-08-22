import styles from '../../styles/checklist.module.scss';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface CheckListContent {
    title: string;
    message: string;
}

const checkListContent: CheckListContent[] = [
    {
        title: '1. “Star” or “Favorite” emails from @theinfluenceproject.com',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        title: '2. Check your email for your faststart activity tracker',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        title: '3. Join our Capital Club Community on Facebook and introduce yourself',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        title: '4. Watch the optimisation and preparation videos',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        title: '5. Schedule your kick-off call with one of our expert coaches',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    }
];


function Checklists() {
    return <div className={styles['checklists']}>{checkListContent.map((c: CheckListContent) => (
        <Checklist title={c.title} message={c.message} key={c.title}/>
    ))}</div>
}

export default Checklists;

interface CheckListProps {
    title: string;
    message: string;
}

function Checklist(props: CheckListProps) {
    const { title, message } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles['accordion']}`}>
            <div className={`${styles['title']} flex flex-row justify-between`} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <ChevronDownIcon  className={`${styles['toggle']}`} aria-expanded={isOpen}/>
            </div>
            <div className={`${styles['content']}`} aria-expanded={!isOpen}>
                <p>{message}</p>
            </div>
        </div>
    );
}


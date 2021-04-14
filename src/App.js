import React, {useState} from 'react'
import DatePicker from 'react-date-picker';
import './App.css';
import data from './data/data';
import List from './components/List';


function App() {
    const [people, setPeople] = useState(data);
    const [value, onChange] = useState(new Date());

    const filterPeople = (e) => {
        if (!e) {
            return;
        }

        const day = ("0" + e.getDate()).slice(-2);
        const month = ("0" + (e.getMonth() + 1)).slice(-2);
        
        const filterPeople = people.filter((filterPeople) => {
            const people_birthday = filterPeople.birthday.split('/');
            return people_birthday[0] === day && people_birthday[1] === month
        });
        
        setPeople(filterPeople);
    }
    
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays</h3>

                <div className="date__filter">
                    <span>Select day: </span>
                    <DatePicker
                        onChange={filterPeople}
                        value={value}
                    />  
                </div>
                
                <List people={people} />
                <button className="btn" onClick={()=> setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default App;

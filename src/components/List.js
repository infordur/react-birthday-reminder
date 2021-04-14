import React, {useState} from 'react'


const List = ({ people }) => {

    const calculateAge = (person) => {
        var birthday_date = person.birthday.split("/");
        var birthdateTimeStamp = new Date(birthday_date[2], birthday_date[1] - 1, birthday_date[0]);
        var today = new Date();
        var diff = today - birthdateTimeStamp;
        var currentAge = Math.floor(diff / 31557600000);
        
        return currentAge;
    }

    return (
        <>
            {people.map((person) => {
                const { id, name, birthday, age, image } = person
                return <article key={id} className="person">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{birthday}</p>
                        <p>{calculateAge(person)} years</p>
                    </div>
                </article>
            })}
        </>
    )
}

export default List;

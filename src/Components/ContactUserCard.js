import React from "react";

const arrayOfContacts = [
    {
      id: 0,
      name: 'Jordan Walke',
      picture: './profile.png',
      position: 'React creator',
      bio: 'Lorem ipsum dolor sit amet.'
    },
    {
        id: 1,
        name: 'John Doe',
        picture: './profile.png',
        position: 'React developer',
        bio: 'Et pariatur corrupti hic.'
    },
    {
        id: 2,
        name: 'Kate Smith',
        picture: './profile.png',
        position: 'Social Media',
        bio: 'Ex dolorum alias ut internos.'
    }
]

export default function ContactUserCard() {
    return (
        <>
        {arrayOfContacts.map(({ name, picture, position, bio, id }) => (
            <div className='profile'>
                <img src={picture}/>
                <div>
                    <h4 key={id}> {name} </h4>
                    <p> {position} </p>
                    <p> {bio} </p>
                </div>
            </div>
        ))}
        </>
    );
}
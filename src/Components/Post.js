import React from "react";

const arrayOfPosts = [
    {
        id: 0,
        title: 'New Post Lorem ipsum',
        content: 'Lorem ipsum dolor sit amet. Vel modi voluptas qui voluptatibus molestiae et deserunt enim sed ipsam suscipit. Et internos quia et sunt voluptatum sit quia dignissimos cum sequi repellat At inventore iure. In aliquam libero non maxime amet ea internos ipsum non quibusdam assumenda.'
    },
    {
        id: 1,
        title: 'New Post Et pariatur',
        content: 'Et pariatur corrupti hic pariatur harum qui aperiam natus et internos totam in vitae consectetur qui quas itaque cum totam consectetur? Eos voluptatem tempora aut nemo voluptatem et ducimus corrupti sit omnis Quis aut quos repellendus.'
    },
    {
        id: 2,
        title: 'New Post Eos praesentium',
        content: 'Eos praesentium rerum quo impedit quis et accusamus quis aut tempore vitae et iste deleniti ut ipsam sequi. Et sapiente reprehenderit non earum totam aut quisquam soluta qui neque modi in magni dolor At necessitatibus ducimus rem veritatis alias'
    },
    {
        id: 3,
        title: 'New Post Ut velit temporibus',
        content: 'Ut velit temporibus est itaque iusto aut reiciendis autem id quod incidunt. Vel earum debitis vel aperiam molestiae est omnis quas id voluptatem ipsum et quisquam molestias. Quo ipsam blanditiis et dolores quam ut unde fugit et sunt esse sed nobis repudiandae.'
    }
]
  
export default function Post() {
    return (
        <>
        {arrayOfPosts.map(({ title, content, id }) => (
            <div className='entry'>
                <h4 key={id}> {title} </h4><p> {content} </p>
            </div>
        ))}
        </>
    );
}
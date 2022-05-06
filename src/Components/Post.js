import React from "react";

//const Post = () => {
//   return <li>
//             <h2>New Post</h2>
//             <p>Lorem Ipsum</p>    
//          </li>
    const arrayOfPosts = [
        {
          id: 0,
          title: 'New Post',
          content: 'Lorem Ipsum'
        },
        {
          id: 1,
          title: 'New Post',
          content: 'Lorem Ipsum'
        },
        {
          id: 2,
          title: 'New Post',
          content: 'Lorem Ipsum'
        },
        {
          id: 3,
          title: 'New Post',
          content: 'Lorem Ipsum'
        },
        {
          id: 4,
          title: 'New Post',
          content: 'Lorem Ipsum'
        }
      ]
    
// };

// export default Post;

// export default function Post() {
//     return (
//       <div>
//         {arrayOfPosts.map(
//           ({ title, content }) => `<h2>${title}</h2> <p>${content}</p>.`
//         )}
//       </div>
//     );
//   }


  
export default function Post() {
    return (
        <>
        {arrayOfPosts.map(({ title, content, id }) => (
            <div>
                <h2 key={id}> {title} </h2><p> {content} </p>
            </div>
        ))}
        </>
    );
}
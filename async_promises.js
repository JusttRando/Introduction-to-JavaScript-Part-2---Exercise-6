// ===============================================
// TODO 1: Promise that simulates fetching user data
// ===============================================

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error


function grabData(userId) 
{
    return new Promise((info, error) => 
        {
        setTimeout(() => 
            {
            const StudInfo = {id:userId, name:"Antonio", email:"AntonioUno@gmail.com", registrationDate:"16/01/2023"}
            
            if (userId > 0) 
                {
                info(`
                                Student Info 

                ⠀⠀⠀⠀⠀⢀⣤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⢀⡼⠋⠀⣀⠄⡂⠍⣀⣒⣒⠂⠀⠬⠤⠤⠬⠍⠉⠝⠲⣄⡀⠀⠀ID = ${StudInfo.id}
                ⠀⠀⠀⢀⡾⠁⠀⠊⢔⠕⠈⣀⣀⡀⠈⠆⠀⠀⠀⡍⠁⠀⠁⢂⠀⠈⣷⠀⠀
                ⠀⠀⣠⣾⠥⠀⠀⣠⢠⣞⣿⣿⣿⣉⠳⣄⠀⠀⣀⣤⣶⣶⣶⡄⠀⠀⣘⢦⡀ Name = ${StudInfo.name}
                ⢀⡞⡍⣠⠞⢋⡛⠶⠤⣤⠴⠚⠀⠈⠙⠁⠀⠀⢹⡏⠁⠀⣀⣠⠤⢤⡕⠱⣷
                ⠘⡇⠇⣯⠤⢾⡙⠲⢤⣀⡀⠤⠀⢲⡖⣂⣀⠀⠀⢙⣶⣄⠈⠉⣸⡄⠠⣠⡿  Email = ${StudInfo.email}
                ⠀⠹⣜⡪⠀⠈⢷⣦⣬⣏⠉⠛⠲⣮⣧⣁⣀⣀⠶⠞⢁⣀⣨⢶⢿⣧⠉⡼⠁
                ⠀⠀⠈⢷⡀⠀⠀⠳⣌⡟⠻⠷⣶⣧⣀⣀⣹⣉⣉⣿⣉⣉⣇⣼⣾⣿⠀⡇⠀ Date = ${StudInfo.registrationDate}
                ⠀⠀⠀⠈⢳⡄⠀⠀⠘⠳⣄⡀⡼⠈⠉⠛⡿⠿⠿⡿⠿⣿⢿⣿⣿⡇⠀⡇⠀
                ⠀⠀⠀⠀⠀⠙⢦⣕⠠⣒⠌⡙⠓⠶⠤⣤⣧⣀⣸⣇⣴⣧⠾⠾⠋⠀⠀⡇⠀Thank You !!!
                ⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣭⣒⠩⠖⢠⣤⠄⠀⠀⠀⠀⠀⠠⠔⠁⡰⠀⣧⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⢤⣀⣀⠉⠉⠀⠀⠀⠀⠀⠁⠀⣠⠏⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠒⠲⠶⠤⠴⠒⠚⠁
                `);
                } else 
                {
                error(new Error("Invalid user ID: " + userId));
                }
            }, 1500);
        });
}

// TODO: Create a function that uses template literals for HTML generation

function helloSite ()
{
    const Hello = 
    `<!doctype html>
  <html lang="en-US">
    <head>
      <title>Hello</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`;

  return Hello
}

// ===============================================
// TODO 2: Promise that simulates fetching user posts
// ===============================================

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error


function PostsNsocials(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userId) {
                return reject("User ID is missing!");
            }

            const posts = [
                { id: 1, title: "Hello World", content: "My first post!", userId },
                { id: 2, title: "Another Day", content: "Coding JavaScript!", userId },
                { id: 3, title: "Async Magic", content: "Promises are awesome", userId }
            ];

            resolve(posts);
        }, 1000);
    });
}

// ===============================================
// TODO 3: Function that chains Promises
// ===============================================

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain

function linkedPost(userId) {
    return grabData(userId)
        .then(user => {
            return PostsNsocials(user.id)
                .then(posts => ({ user, posts }));
        })
        .catch(err => {
            console.error("Promise Chain Error:", err);
        });
}



// ===============================================
// TODO 4: Convert the chain into async/await
// ===============================================

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data

async function linkedPostAsync(userId) {
    try {
        console.log("Fetching user...");
        const user = await grabData(userId);

        console.log("Fetching posts...");
        const posts = await PostsNsocials(user.id);

        console.log("Combining user + posts...");
        return { user, posts };

    } catch (err) {
        console.error("Async/Await Error:", err);
    }
}

// ===============================================
// TODO 5: Fetch multiple users in parallel
// ===============================================

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users

async function fetchManyUsers(userIds) {
    const promises = userIds.map(id =>
        grabData(id).catch(err => ({ error: err, userId: id }))
    );

    const results = await Promise.all(promises);

    return results.filter(r => !r.error); // keep only successful users
}

// ===============================================
// TODO 6: Fetch users and posts in parallel
// ===============================================

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately

async function fetchUsersAndPosts(userIds) {
    try {
        // Step 1: fetch all users in parallel
        const users = await Promise.all(
            userIds.map(id => 
                grabData(id).catch(err => ({ error: err, userId: id }))
            )
        );

        // Filter only valid users
        const validUsers = users.filter(u => !u.error);

        // Step 2: fetch their posts in parallel
        const postsArray = await Promise.all(
            validUsers.map(user =>
                PostsNsocials(user.id).catch(err => ({ error: err, userId: user.id }))
            )
        );

        // Combine
        return validUsers.map((user, index) => ({
            user,
            posts: postsArray[index]
        }));

    } catch (err) {
        console.error("Parallel Fetch Error:", err);
    }
}

// ===============================================
// TODO 7: Test success cases
// ===============================================

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling

linkedPost(1).then(console.log);

linkedPostAsync(1).then(console.log);

fetchManyUsers([1, 2, 999])   // 999 will fail
    .then(result => console.log("Many users:", result));

fetchUsersAndPosts([1, 2]).then(console.log);






















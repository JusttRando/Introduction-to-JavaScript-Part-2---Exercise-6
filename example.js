// ===============================================
// TODO 1: Promise that simulates fetching user data
// ===============================================
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
function PostsNsocials(userId) 
{
    return new Promise((post, coast) => 
        {
        setTimeout(() => 
            {
            if (userId > 0) 
                {
                post([
                    { id: 1, title: "Lava challange", content: "burn your face", userId },
                    { id: 2, title: "Rick Roll", content: "Never gonna give you up", userId }
                ]);
                } else
                    {
                        coast(new Error("Cannot fetch posts — Invalid user ID"));
                    }
            }, 1000);
        });
}



// ===============================================
// TODO 3: Function that chains Promises
// ===============================================
function getUserAndPosts_Chain(userId) 
{
    return fetchUserData(userId)
        .then(user => 
            {
            return fetchUserPosts(user.id)
                .then(posts => 
                    {
                    return { user, posts };
                    });
            })
        .catch(err => {console.error("Promise Chain Error:", err);});
}



// ===============================================
// TODO 4: Convert the chain into async/await
// ===============================================
async function getUserAndPosts_Async(userId) {
    try {
        console.log("Fetching user...");
        const user = await fetchUserData(userId);

        console.log("Fetching posts...");
        const posts = await fetchUserPosts(user.id);

        console.log("All data fetched!");
        return { user, posts };
    } catch (error) {
        console.error("Async/Await Error:", error);
    }
}



// ===============================================
// TODO 5: Fetch multiple users in parallel
// ===============================================
async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id =>
        fetchUserData(id)
            .catch(err => {
                console.error("Failed to fetch user:", id, err.message);
                return null; // keep results array intact
            })
    );

    const results = await Promise.all(promises);

    return results.filter(u => u !== null); // return successful only
}



// ===============================================
// TODO 6: Fetch users and posts in parallel
// ===============================================
async function fetchUsersAndPosts(userIds) {
    try {
        const users = await fetchMultipleUsers(userIds);

        const postPromises = users.map(u =>
            fetchUserPosts(u.id).catch(() => [])
        );

        const posts = await Promise.all(postPromises);

        return users.map((u, i) => ({
            user: u,
            posts: posts[i]
        }));

    } catch (err) {
        console.error("Error fetching users + posts:", err);
    }
}



// ===============================================
// TODO 7: Test success cases
// ===============================================

console.log("\n=== Test: Single User ===");
getUserAndPosts_Async(1).then(data => console.log(data));

console.log("\n=== Test: Multiple Users ===");
fetchMultipleUsers([1, 2, -5, 3]).then(data => console.log(data));

console.log("\n=== Test: Users + Posts Parallel ===");
fetchUsersAndPosts([1, 2, 3]).then(data => console.log(data));


// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Both resolve, who is faster?
Promise.all([myPromise1, myPromise2]).then((x) => {
  myDisplay(x);
});
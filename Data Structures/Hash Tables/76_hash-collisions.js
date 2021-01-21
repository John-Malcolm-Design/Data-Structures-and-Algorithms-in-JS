let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('ahhhhh')
    }
}

user.age // 0(1)
user.spell // 0(1)
user.scream() // 0(1)

// Open Hashing (Collisions )
// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
// With Hash Tables we cannot avoid collisions
// We have finite data - so we will eventually run out!
// When we have a collision it slows down by 0(n-k) 
// Where k is the size of the table.
// The Linked List Data Structure is one of the most common resolutions 
// Called Collision Chaning 
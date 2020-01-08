const db = [];

function all() {
    // return copyOf(db);
    // return db; // this gives them
                  // access to the
                  // original

    return [   // return a new array
        ...db  // with the contents of
               // `db` sprinkled
               // inside.
    ];
}

function create(name, joyVal) {
    let givesJoy = false;
    if (joyVal) {
        givesJoy = true;
    }
    const newItem = {
        name,
        givesJoy
    };
    db.push(newItem);
}

const stuff = {
    all,
    create
};

// const users = {
//     allUsers,
//     signup,
//     login
// };

module.exports = {
    stuff,
    // users
};
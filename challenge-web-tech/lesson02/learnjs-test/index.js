let man = {
    name: "serge",
    surname: "belyaev",
    fullName() {
        return `${this.surname} ${this.name}`
    }
}
class Room {
    constructor() {
        this.windows = 1
        this.owner = "serge"
    }
}

module.exports.man = man
module.exports.Room = Room
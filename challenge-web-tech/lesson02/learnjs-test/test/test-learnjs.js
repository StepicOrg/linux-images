const assert = require("assert")
const index = require("../index")

describe("Basic test", function() {
    it("Man basic", function() {
        assert(index.man, "Man exists")
        let man = index.man
        assert(man.name, "Name exists")
        assert(man.surname, "Surname exists")
        assert(man.fullName() == `${man.surname} ${man.name}`, "Fullname function")
    })
    it("Man basic", function() {
        assert(index.man, "Man exists")
        let man = index.man
        man.name = "serge"
        man.surname = "belyaev"
        assert(man.fullName() == `${man.surname} ${man.name}`, "Fullname function")
    })
    it("Class basic", function() {
        assert(index.Room, "Room exists")
        let room = new index.Room()
        assert(room.windows > 0, "Have windows")
        assert(room.owner, "Have owner")
    })
})

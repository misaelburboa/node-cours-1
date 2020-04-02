const event = {
    name: "Birthday Party",
    guestList: ['Misa', 'Ale', 'Prieto', 'Ana Emilia'],
    printGuest() {
        console.log('Guest list for' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
};

event.printGuest();
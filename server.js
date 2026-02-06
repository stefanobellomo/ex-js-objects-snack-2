// SNACK 1

// Viene stampato Double Cheese Burger due volte ma l'oggetto è sempre uno poichè il tipo è reference

// SNACK 2

// Gli ingredienti vengono presi come reference e quindi viene sempre stampato salad, ma vengono creati tre oggetti

// SNACK 3

// Oltre l'oggetto originale vengono creati due cloni, in totale 9 oggetti in pagina (hamburger, maker, resturant)

// SNACK 4

// Per chef userei lo spread operator perchè così posso clonare anche la funzione.
// Per resturant userei lo structured clone in modo da poter copiare anche i metodi della data.

// SNACK 5

// Viene stampato prima due volte Chef Hyur e poi due volte Hyur's II, l'oggetto su cui vengono effettuate le modifiche è sempre lo stesso, cinque oggetti vengono creati

// SNACK 6

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

const newChef = {
    ...chef,
    resturant: {
        ...chef.restaurant,
        address: {
            ...chef.restaurant.address
        }
    }
}
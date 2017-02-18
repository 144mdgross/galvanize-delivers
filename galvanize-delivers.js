$(document).ready(function() {
    var tableBody = $('.order')

    qObject = {
        breakfast: parseInt($('[name="breakfast"]').attr("data-quantity"), 10),
        appetizers: parseInt($('[name="appetizers"]').attr("data-quantity"), 10),
        dinner: parseInt($('[name="dinner"]').attr("data-quantity"), 10),
        dessert: parseInt($('[name="dessert"]').attr("data-quantity"), 10)
    }

    let quantityKeys = Object.keys(qObject)



    $('main').click(function(e) {
        if (e.target === this) {
            //  do nothing
        } else if ($(e.target).hasClass('putOnTable')) {

            let target = $(e.target)
            let value = $(e.target).attr("value")
            let item = $(e.target).attr("name")
            let quantity = parseInt($(e.target).attr("data-quantity"), 10)

            //update the breakfast quantitydata
            //   do i also want to create table elements now? if I'm already going to have tons of if statements

            //what if....I make a function and then call if when i need to add things to the table?
            //could i also use a function to check for target matching an object?
            if (quantity === 0) {
                createOrder(quantity)

            } else if (quantity >= 1) {
                updateQuantity($(e.target))
            }







            function createOrder(quantity) {
              console.log(quantity, "quantity param")
                //this one should create the Table Elements if they are cicked and their quantity is zero
                //make row and append to table for each item
                tableRow = $('<tr>')
                tableBody.append(tableRow)
                //make item and append to row
                let tableItem = $('<td>')
                tableItem.text(item)
                tableRow.append(tableItem)
                //populate table with price
                let tablePrice = $('<td>')
                tablePrice.text(value)
                tableRow.append(tablePrice)

                let tableQuantity = $('<td>')
                tableQuantity.addClass("quantity")
                // populate quantity position with 0 in this case
                tableQuantity.text(quantity)
                tableRow.append(tableQuantity)
                //now I need to increment the quantity by one? should I call the function I made in this function to do that?
                // seems messy....

                updateQuantity(target)

                //now how to update the corresponding quantity in the object so it can only happen once?


            }

            //need to check for value being zero before this...
            function updateQuantity(value) {
                let name = value.attr("name")

                let addToQuantity = parseInt(value.attr("data-quantity"), 10)

                //this one will only update quantity if the item is already in the table
                if (name === quantityKeys[0]) {
                    qObject['breakfast'] += 1

                    // this updates the object but it should also update the actual attribute..
                    addToQuantity += 1
                    value.attr("data-quantity", addToQuantity)
                    $(".quantity").text(addToQuantity)

                } else if (name === quantityKeys[1]) {
                    qObject['appetizers'] += 1
                    addToQuantity += 1
                    value.attr("data-quantity", addToQuantity)
                    $(".quantity").text(addToQuantity)

                } else if (name === quantityKeys[2]) {
                    qObject['dinner'] += 1
                    addToQuantity += 1
                    value.attr("data-quantity", addToQuantity)
                    $(".quantity").text(addToQuantity)


                } else if (name === quantityKeys[3]) {
                    qObject['dessert'] += 1
                    addToQuantity += 1
                    value.attr("data-quantity", addToQuantity)
                    $(".quantity").text(addToQuantity)


                }
            }



        } //else if e.target.hasClass



        //check to see what object key it matches
    })

})

//  other function that could be created....
//function to do the math for the subtotal, total and tax. How many functions shoudl that be?

//function

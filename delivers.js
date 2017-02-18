$(document).ready(function() {
    //  add menu item the receipt which updates the subtotal, tax and total
    //  for the order page...
    var tableBody = $('.order')
    console.log(tableBody[0], "table body")
    //  thinking of how my page is set up...
    //  do I want to do my event listener on main? that will get all my cards and tables...
    //  which I want...but is that too much?
    //let itemQuantity = 0


    //a single variable isn't enough. maybe i need to....make an object


    quantityObject = {
      breakfast: parseInt($('a[name="breakfast"]').attr("data-quantity"), 10),
      appetizers: parseInt($('a[name="appetizers"]').attr("data-quantity"), 10),
      dinner: parseInt($('a[name="dinner"]').attr("data-quantity"), 10),
      dessert: parseInt($('a[name="dessert"]').attr("data-quantity"), 10),
    }

    $('main').click(function(e) {
        if (e.target === this) {
            //  do nothing
        } else if ($(e.target).hasClass('putOnTable')) {

            //  right now this is keeping the first click from adding to the table.
            // if(itemQuantity===0) {
            //   itemQuantity = 1
            //
            // } else if(itemQuantity >= 1) {
            //   itemQuantity++
            //   console.log(itemQuantity)
            //   }
            //   this store name attribute to add to table later
            let addToOrderVar = $(e.target).attr("name")
            //  this stores value attribute to add to table later
            let price = $(e.target).attr("value")
            //this stores quantity data to add to table later
            // let quantity = $(e.target).attr("data-quantity")
            // let parsedQuantity = parseInt(quantity, 10)
            let tableQuantity = $('<td>')
            let tablePrice = $('<td>')
            // console.log(quantity, "quantity")
            //  now I want to filter so things are only added to table when first clicked
            //otherwise their quantity increments up.
            if (quantityObject['breakfast'] === 0 || quantityObject['appetizers'] === 0 || quantityObject['dinner']===0 || quantityObject['dessert']===0) {
                //  cool parsedQuantity was what I needed here.
                  console.log('zero', 0)
                let bodyRow = $('<tr>')
                //  making item info and adding to table
                let tableItem = $('<td>')
                tableItem.text(addToOrderVar)
                bodyRow.append(tableItem)
                //   adding price.

                tablePrice.text(price)
                bodyRow.append(tablePrice)  


                // let tableQuantity = $('<td>')
                // parsedQuantity ++
                // tableQuantity.text(parsedQuantity)
                // $(e.target).attr("data-quantity", parsedQuantity)
                // bodyRow.append(tableQuantity)


                // bodyRow.append(tableQuantity)

                tableBody.append(bodyRow)
            } else if (parsedQuantity === 1 || parsedQuantity > 1) {
                // newQuantity = parsedQuantity + 1
                  // console.log(parsedQuantity)
                parsedQuantity += 1
                // console.log(parsedQuantity)

                $(e.target).attr("data-quantity", parsedQuantity)
                // tablePrice.html(parsedQuantity)




            }

        }

        //  end of main event listener
    })

    //  end of document ready
})

//  grab information from menu items. figure out best approach to do this.
// attribute? inner text of title?
//  there also needs to be a cost that goes with it.

//  append that info to the table


//  give user a way to delete items and
// modify quantity(including clearing the form)
//  take data from table, sum it and plug it into subtotal


//  take subtotal and miltiply by 8.995 to get tax rate.
// then put/update that total in the total table spot.

//  bonus calculate delivery fee based on distance and chosen speed of delivery

//


//  type their information into each required textfield of the delivery format
//  can I do this by giving user power to directly edit the things? how?


//click the button to place the order:
//if the receipt has no menu items or any of the textfields(ie: user-info) are blank, they should see a validation message ('try again') in a toast OTHERWISE they should see a success message in a toast.

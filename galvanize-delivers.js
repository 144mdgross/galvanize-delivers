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
          // variables for use within functions
            let target = $(e.target)
            let value = $(e.target).attr("value")
            let item = $(e.target).attr("name")
            let quantity = parseInt($(e.target).attr("data-quantity"), 10)

            function updateQuantity(target) {
                let name = target.attr("name")

                //this one will only update quantity if the item is already in the table
                if (name === quantityKeys[0]) {
                    // increment object value with each click
                    qObject['breakfast'] += 1
                    //  change data associated with html element to equal object value
                    target.attr("data-quantity", qObject['breakfast'] )
                    // update <td> with quantity info
                    $('#qbreakfast').text(qObject['breakfast'])

                } else if (name === quantityKeys[1]) {
                  qObject['appetizers'] += 1
                  target.attr("data-quantity", qObject['appetizers'] )
                  $('#qappetizers').text(qObject['appetizers'])

                } else if (name === quantityKeys[2]) {
                  qObject['dinner'] += 1
                  target.attr("data-quantity", qObject['dinner'] )
                  $('#qdinner').text(qObject['dinner'])

                } else if (name === quantityKeys[3]) {
                  qObject['dessert'] += 1
                  target.attr("data-quantity", qObject['dessert'] )
                  $('#qdessert').text(qObject['dessert'])
                }
            }

            function createOrder(quantity) {
                //this one creates the Table Elements if they are cicked and their quantity is zero
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

                //   I either need to start over or I need to give the quantity
                // column a different ID each time it's made....horray id!
                let tableQuantity = $(`<td id="q${item}">`)

                tableRow.append(tableQuantity)

                // now update the quantity in the tables with corresponding item
                updateQuantity(target)
            }

            //now actually create and update targets based off of their quantity.
            if (quantity === 0) {
                createOrder(quantity)

            } else if (quantity >= 1) {
                updateQuantity(target)
            }



        } //  end of else if e.target.hasClass

    }) // end of "click" event listener on main

}) // end of Content ready.

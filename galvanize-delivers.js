$(document).ready(function() {

  var tableSubtotal = 0
  console.log(tableSubtotal, "tableSubtotal to start with")
  var tax = 0
  var total = 0


  // Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
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
            // console.log(value, "value")
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



            // console.log(dollars())
            // now for the subtotal tax and total
            function dollars () {
              //parse the value of each item into a number and chop off $
              let price = parseFloat(value.substring(1))
              tableSubtotal += price
              $(".subtotal").text("$"+tableSubtotal)
              // price += subtotal
              //console.log(tableSubtotal, "subtotal")
              //doesn't work.....

              //   now calculate the tax
              tax = (tableSubtotal * .08995).toFixed(2)
              $('.tax').text("$"+tax)


                }// end of dollars




              //this coerces value into a number w/o the dollar symbol
              //why isn't this working on the first click? It needs to be accessed by the create function too?
              // or I need to do these calculations from the table directly
              // let price = +value.substring(1)
              // let tableQuantity = quantity + 1
              // subtotal = 0
              // console.log(price, "price")
              // console.log(tableQuantity, 'quantity')


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
                // let tablePrice = $(`<td id="v${value}">`)
                let tablePrice = $('<td>')
                // tablePrice.addClass("subtotal")
                // console.log(tablePrice, "blah lbah blahblabh")
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
                dollars()

            } else if (quantity >= 1) {
                updateQuantity(target)
                dollars()//what to I pass into dollars to get it to work?
            }



              // let subtotal = 0
              // if($('#v$8.95')===undefined || $('#v$11.83') === undefined || $('#v$16.79')===undefined || $('#v$7.96') === undefined) {

// console.log(dollars());


                //now i need to get the values, trim them, add them, multiply them, add that result to the subtotal and get the actual total. add append each of those to the total table. Should this be part of the event listener or read that separetly.







        } //  end of else if e.target.hasClass

    }) // end of "click" event listener on main

}) // end of Content ready.

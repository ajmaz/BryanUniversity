const bankName = 'CashMoney Bank'
    var letterText = ''

    const customers = [
        { fname: 'Brianna', balance: -54.99, rate: 2.7 },
        { fname: 'Dillon', balance: 1014.94, rate: 5.1 },
        { fname: 'Dmitri', balance: 0, rate: 7.2 },
        { fname: 'Hazel', balance: 0, rate: 7.2 },
        { fname: 'Isaiah', balance: 224.99, rate: 5.1 },
        { fname: 'Laura', balance: -213.40, rate: 2.5 },
        { fname: 'Matias', balance: -12.06, rate: 3.1 },
        { fname: 'Monique', balance: 2220.54, rate: 7.2 },
        { fname: 'Petra', balance: 500.35, rate: 4.9 },
        { fname: 'Reggie', balance: 0, rate: 7.2 }
    ]

    customers.forEach((customer) => {

        if (customer.balance < 0) {
            letterText += "<div class = 'letter'> Hello " + customer.fname + " this is an attempt to collect a debt owed to " + bankName + ". Your account is past due by the amount of" +
                customer.balance + "</div>"; 
        }
        if (customer.balance > 0 && customer.balance > 500) {
            letterText += "<div class = 'letter'>Hello " + customer.fname + ", greetings from " + bankName + ". Your balance is current. No need for action until next month." + "</div>"; 

        }
        else {letterText += "<div class = 'letter'>Hello " + customer.fname + ", greetings from " + bankName + " Because you are such a great customer, we're lowering your interest rate to " + customer.rate + "%.</div>"};
    })

    document.querySelector("#letterDiv").innerHTML =("<div>" + letterText + "</div>");
        // Create a loop that iterates through the customers array. Based on the customer's balance, create a personalized copy
        // of the appropriate letter text from below. Each letter should be contained within a div with the style of 'letter'.

        // Hello [fname], this is an attempt to collect a debt owed to [bankName]. Your account is past due by the amount of [balance].
        // Hello [fname], greetings from [bankName]. Your balance is current. No need for action until next month.
        // Hello [fname], greetings from [bankName]. Because you are such a great customer, we're lowering your interest rate to $[rate]%.

        // Display all these letters in the letterDiv element.

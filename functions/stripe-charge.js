const stripe = require('stripe')('')

// Uses an async function call
exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    // Must create customer first before running next func
    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charges.create({
        customer: customer.id,
        amount,
        name,
        description,
        currency: 'usd'
    })
}
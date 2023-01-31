---
sidebar_position: 3
---

# Names

## What are Names?

A Name is a human readable alias for an address.

The main fields a Name has is:

- `owner` - The address that owns the name
- `destiantion` - The address that name references, can be different from the "owner"
- `expiration_height` - The block height the name will expire
- `price` - Asking price, anyone can buy this name from the owner for this amount. And this asking price is used for calculating the Registration fee (1%). See [Why do Names have a price?](#why-do-names-have-a-price).

See the full spec in the proto definition in [name.proto](https://gitlab.com/dysonproject/dyson/-/blob/master/chain/proto/names/name.proto).

## How are Names useful?

Name owners have several privileges, better subdomains and ability to mint native coins. (TODO: make tutorial for minting)

Also Names can be used to verify your Discord account to get an advanced role.

## What do URLs look like with a Name?

All Scripts are hosted at a subdomain like:

- https://dys12cgan5v9jkhqu2v27c8c674cnqv8qs65r8tajg.dysonprotocol.com/
- https://dys12cgan5v9jkhqu2v27c8c674cnqv8qs65r8tajg.dyson.lol/

With a name, for exmaple `example.dys`, can use the shorter easier subdomain:

- https://example.dysonprotocol.com/
- https://example.dyson.lol/

And the Script page on the dashboard:

- https://dys.dysonprotocol.com/scripts/example.dys
- https://dys.dyson.lol/scripts/example.dys

## How long is a Name registered?

Currently Names are registed for **30 days** as calculated by block height of the registration or extension transaction.

The registration and extension time is not prorated. It is 30days from when the transaction was sent. If a Name was registered 2 days ago and I want to change the price using [names/sendMsgSetPriceAndExtend](https://dys.dysonprotocol.com/commands?command=names/sendMsgSetPriceAndExtend), the new `expiration_height` will be 30 days from now.

## Why do Names have prices?

Names are paid for using a form of [Harberger Tax](https://en.wikipedia.org/wiki/Harberger_Tax) which funds the [Community Pool](https://dys-api.dysonprotocol.com/cosmos/distribution/v1beta1/community_pool).
Specifically Names are registered for 30 days and pay 1% of the asking price to the community pool. At any point within the 30 days the Name can be [Extended](https://dys.dysonprotocol.com/commands?command=names/sendMsgSetPriceAndExtend) with a new asking price and pay the fee of 1%.

In the future it will be possible to set longer experation times and be prorated for any fees already paid.

### Example

- Alice registers example.dys and sets a price of 100dys (the minimum)
- Alice pays 1dys for the registration which goes to the Community Pool
- The example.dys will expire in 30 days
- Before the 30 days Alice extends the Name and updates the asking price to 2000000 dys (two million)
- Alice pays 20000dys (twenty thousand is 1% of 2000000dys) for the Community Pool
- Bob sees that example.dys is a good name for his project
- Bob buys example.dy using [names/sendMsgBuy](https://dys.dysonprotocol.com/commands?command=names/sendMsgBuy)
- Alice receives 2000000dys for a profit of 1998000dys

## Why 30 days and no rebate or prorating?

Dyson may be the first chain to implement a Harberger Tax natively in the protocol for digitally scarce goods.

This is very different from pure property rights like Namecoin (and the subsequent squatting problems they have).

1. The goal is for people to be forced to review the price they have set and deliberately set the optimal price again to minimize surprises if someone buys it.
2. It is easier to reason about: 30 days. No rebates. There is no opportunity for someone to accidentally pay for a decade and empty their wallet.

## What is a good price?

A good price is one that you would be happy to sell the name for.

## How do I get Names?

See [How to Register a Dys Name](tutorials/register-name)

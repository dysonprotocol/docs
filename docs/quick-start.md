---
sidebar_position: 1
---

#  Quick Start Tutorial

Let's discover the **Dyson Protocol in less than 5 minutes**.

## Getting Started

Get started by **installing the Keplr browser extension** .


### What you'll need
- [Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Keplr Extension](https://www.keplr.app/download) 
- [Discord account](https://discord.com/)


:::danger Protect your seed

Save your seed somewhere safe and NEVER share it with anyone ever!

:::


:::info

The Keplr mobile app doesn't support Dyson Protocol so be sure to use the browser extension

:::


## Connect to the Testnet

Before using real DYS, it's better to get familiar with everything by using the testnet.
Follow these steps to connect your Keplr wallet to the Dyson Protocol testnet.

1. Go to https://dys-testnet.dysonvalidator.com/
2. Click the menu button `Connect with Keplr`
3. On the Keplr popup click the button in the menu `Add Dyson to Keplr`
4. Approve the connection to the Dyson Testnet Chain

## Request Testnet coins in Discord

Once you have connected to the testnet join our discord and request some testnet
DYS. You will need testnet DYS to complete the next step. 

1. Join our [Discord server](https://discord.gg/JArrt6KPAR)
2. Copy your new DYS address from the Keplr extension, make sure "Dyson Protocol" is seleleted 
3. Paste your DYS address in the `💸testnet-faucet` channel and Dyson Helper Bot will send you coins
4. Go to https://dys-testnet.dysonvalidator.com/ 
5. Click the menu button `Connect with Keplr`
6. Verify that you have DYS listed under "Assets"

Good job! Now you can do the tutorial using the testnet and your testnet DYS

## Hello World function

The classic "Hello world" is in the simplest function you can make on the Dyson Protocol.
The function will have a single parameter called "name". And when run, will either
print "hello {name}!" or "Hello World!" if name is empty.

1. Click "My script" in the menu
2. Paste the following code
3. Click Save

``` python
def say_hello(name: str):
    if not name:
        name = "world"
    print(f"hello {name}!")
```

:::info

If the `Save` button is disabled make sure to click `Connect with Keplr` in the menu
:::

Now you should see a new form titled `say_hello` with a single input labeled `name`

Every form will have two buttons:
 - `Query <function name>`
 - and `Run <function name>`

Click on `Query say_hello` to call your function for free. You will see some stats on your call and the output. Look at the "Stdout" to see if your function worked.

Then click on `Run say_hello` and Keplr will prompt you to sign your transaction. If you approve it, this function will be run and your message will be stored on the blockchain.

## Success!

In conclusion, this quick intro has shown how to create and run a basic "Hello World" function in Python on Dyson. This serves as a strong foundation for further learning and experimentation with the chain. Keep practicing and expanding your skills!

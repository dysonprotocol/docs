---
title: Creating and Updating Scripts on Dyson Protocol
description: How to create and manage scripts on the Dyson Protocol
authors: [sybil]
image: ./bg.png
tags: [scripts, autonomous scripts, DeFi, DAOs]
---

![](./bg.png)


### TL;DR

A Script can be **created** by:

- creating a new wallet account and calling [`dyson/sendMsgUpdateScript`](https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgUpdateScript) 
- calling [`dyson/sendMsgDeployAutonomousScript`](https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgDeployAutonomousScript)
- but the preferred way is by creating a new [Group Policy](https://dys-testnet.dysonvalidator.com/commands?command=cosmos.group.v1/sendMsgCreateGroupPolicy) and calling  [`dyson/sendMsgUpdateScript`](https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgUpdateScript) 

Scripts can only be **updated** by:

- calling [`dyson/sendMsgUpdateScript`](https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgUpdateScript) on themselves  

:::info 
 You can get testnet DYS by pasting your address in the [#testnet-faucet channel on Discord](https://discord.com/channels/940167079657615370/940167079657615373)
:::

<!-- truncate -->

---

## Update or Deploy?

### Update Script

This is the command we are all familiar with. This is the way you can save your changes to your script with your wallet account. It allows an account to update the script of the same address. When you click "save" when editing your script, the dashboard is using this command to save your changes.

:::info
The only way a script can be modified is by calling [`dyson/sendMsgUpdateScript`](https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgUpdateScript) on itself.
:::

### Deploy Autonomous Script

[`dyson/sendMsgDeployAutonomousScript`](https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgDeployAutonomousScript) is a way to create a new script at a new DYS address. There is no private key associated with this address. Because it cannot be directly edited to fix mistakes, creating an autonomous script has a minimum gas cost of 1000dys to prevent spam.

:::caution
It is not possible for the creator to directly modify an autonomous script or it's assets.
:::

---

## Types of Scripts

Now let's talk about some definitions and then discuss the various ways Scripts can be managed.

### Externally Owned Script

An External Owned Script is the script of an address created with a private key, for example, in Keplr wallet. This is what you have been using so far. This is great for development, testing, and making scripts for your personal use. The code can be updated at anytime by owner of the private key with the command `dyson/sendMsgUpdateScript` . Using someone else's EO script requires a high degree of trust in the owner of the private key not to maliciously update the script. This is not the best choice for a script for DeFi apps or DAOs.

### Autonomous Script

An autonomous script is a script that is controlled only by itself. It is created by the command `dyson/sendMsgDeployAutonomousScript`. It is fully autonomous and its source code can only be updated by calling `dyson/sendMsgUpdateScript` within its own code. Other than that it is exactly like any other script.

It is possible for the script to have a functions that runs `dyson/sendMsgUpdateScript` based on some internal logic or data in storage. So it is possible for an autonomous script to update itself if programmed to allow it. These scripts are [Turing complete](https://en.wikipedia.org/wiki/Turing_completeness) so the possibilities are really endless.

### Group Policy Script

 A Group has an admin, which is an account, and is a collection of members which are also accounts.  A Group can have multiple Policies which are accounts that members propose and vote on commands that, if passed, are executed in the context of that Policy account.

:::info
The Group module is not specific to Dyson Protocol. This module is built-in with the cosmos-sdk. Read more about it in the [cosmos-sdk documentation](https://docs.cosmos.network/main/modules/group).
:::

[A Group Policy is an account and address associated with a group and a decision policy.](https://docs.cosmos.network/main/modules/group#concepts) A group can have many policies which all have their own individual address and script. A decision policy is the way members of the group vote on proposals to be executed by that group policy.


Importantly this can control how the script of a policy is updated or what messages are run. You can trust this as much as you trust the decision policy of the group itself.

The group admin and members can be any type of account. The group admin can be a policy account (that is controlled by members votes), and externally owned account (controlled by a private key), or even an autonomous script's account (controlled only by that scripts code). 

[This is the one way to start a project]( https://dys-testnet.dysonvalidator.com/commands?command=cosmos.group.v1/sendMsgCreateGroupWithPolicy) that may begin with single point of ownership, and over time transition to community decisions or even because self administrated.




---
slug: updating-and-creating-scripts
title: Updating and Creating Scripts
authors: [sybil]
tags: [scripts]
---

First, let's discuss these two very important commands: `dyson/sendMsgUpdateScript` and `dyson/sendMsgDeployAutonomousScript`
The links here are for the testnet because
,at the time of this post, they are being tested on the testnet.

<!-- truncate -->

### Update Script

This is the command we are all familar with. It allows an account to update or create the script of the same address. When you click "save" when editing your script, the dashboard is using this command to save your changes.

**The only way to modify a script is with `dyson/sendMsgUpdateScript`.**

See: https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgUpdateScript

### Deploy Autonomous Script

This creates a new autonomous script and generates a new dys address from its hash. There is no private key associated. Creating an autonomous script has a minimum gas cost of 1000dys to prevent spam.

**It is not possible for the creator to directly modify an autonomous script or it's assets.**

See: https://dys-testnet.dysonvalidator.com/commands?command=cosmos.group.v1/sendMsgCreateGroupWithPolicy

---

Now let's talk about some definitions and then discuss the various ways Scripts can be created and updated.

### Externally Owned Script

An External Owned Script is the script of an account created with a private key, for example, in Keplr wallet. This is what you have been using so far. This is great for development, testing, and making scripts for your persional use. They can be updated at anytime by owner of the private key with the command `dyson/sendMsgUpdateScript` . Using someone elses EO script requires a high degree of trust in the owner of the private key not to maliciously update the script. This is not the best choice for a script for DeFi apps or DAOs.

### Autonomous Script

An autonomous script is a script that is controlled only by itself. It is created by the command `dyson/sendMsgDeployAutonomousScript`. It is fully autonomous and its source code can only be updated by calling `dyson/sendMsgUpdateScript` within its own code. Other than that it is exactly like any other script.

It is possible for the script to have some access control functions that run `dyson/sendMsgUpdateScript` based on some internal logic or data in storage. So it is possible for an autonomous script to update itself if programmed to allow it. These scripts are [Turing complete](https://en.wikipedia.org/wiki/Turing_completeness) so the possiblilites are really endless.

See: https://dys-testnet.dysonvalidator.com/commands?command=dyson/sendMsgDeployAutonomousScript

### Group Policy Script

A Group Policy is an account and address associated with a group and a decision policy. A group can have many policies which all have their own individual address and script. A decision policy is the way memebers of the group vote on proposals to be excecuted by that group policy.

Importantly this can control how the script of a policy is updated or what messages are run. You can trust this as much as you trust the decision policy of the group itself.

Group members or admin can be externally owned accounts, autonomous accounts, or even other group policy accounts. And the members or admin can be changed according to the vots of the group.

This is the one way to start a project that may begin with single point of ownership, and over time transition to community decisions or even because self administrated.

See: https://docs.cosmos.network/v0.46/modules/group/01_concepts.html#group-policy
Also: https://dys-testnet.dysonvalidator.com/commands?command=cosmos.group.v1/sendMsgCreateGroupWithPolicy

## Summary

A Script can be **created** by:

- creating a new wallet account and calling `dyson/sendMsgUpdateScript`
- calling `dyson/sendMsgDeployAutonomousScript`
- or creating a new policy on a group and calling `dyson/sendMsgUpdateScript`

Script can only be **updated** with:

- calling `dyson/sendMsgUpdateScript`

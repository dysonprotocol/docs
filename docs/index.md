---
sidebar_position: 1
---

# Introduction

:::note WIP

These docs are a Work In Progress. So let us know if you see any typos or bugs.

:::


## What is the purpose of the Dyson Protocol?

1. To lower the barrier of entry in making distributed web apps by using an existing popular language, Python.
2. To eliminate a major single point of failure in crypto, the user interface, by hosting the frontend on-chain.

## What are the key features and functionalities?

### Python
Scripts, also known as smart-contracts, are written in a subset of Python.
This allows developers to leverage their existing knowlage of the Python syntax
and standard libraries.


### Forms
Functions written in Scripts will have their definition automatically parsed
into jsonschema and rendered to html forms in the dashboard. This allows users
to interact with the Script without the developer learning JS, protobufs, or
needing to interact with the wallet directly. 

### HTTP
Dyson uses the popular WSGI protocol so Scripts that make the appropriate `application()` function 
will have access the full raw HTTP request and has full control of the HTTP response sent to the client.

## How to get support or report bugs?

Head over to [GitHib](https://github.com/orgs/dysonprotocol/discussions) and drop a comment.

Or join [Discord](https://discord.gg/FZfKmSJCyP), verify your account, and ask for help there.

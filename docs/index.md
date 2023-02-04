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
Scripts, also known as smart-contracts, are written in a <a href="/available-python-functions">subset of Python</a>.
This allows developers to leverage their existing knowlage of the Python syntax
and <a href="available-python-functions">standard libraries</a>.


### Automatic UI Generation
Function definitions are  automatically parsed into jsonschema and rendered to HTML forms in the dashboard. This allows users
to interact with the Script without the developer learning JS, Protobufs, or
needing to interact with the wallet directly. 

### Full HTTP control
Dyson uses the popular <a href="https://wsgi.readthedocs.io/en/latest/learn.html">WSGI protocol</a> so Scripts that make the appropriate `application()` function 
will have access the full raw HTTP request and has full control of the HTTP response sent to the client.

## How to get support or report bugs?

Head over to [GitHub](https://github.com/orgs/dysonprotocol/discussions) and drop a comment.

Or join [Discord](https://discord.gg/FZfKmSJCyP), verify your account, and ask for help there.

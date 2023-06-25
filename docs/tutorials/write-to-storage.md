---
sidebar_position: 3
---
import Usage from '@site/src/components/Usage';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store and Fetch Data

Saving to storage is a way to save state on the blockchain. This opens up a lot more possibilities for richer blockchain apps.

There are two ways to save data to the blockchain:

- `dyson/sendMsgCreateStorage` - create storage at a new index
- `dyson/sendMsgUpdateStorage` - update existing storage

There are three ways to read from storage

- `dyson/QueryStorage` - Retreave a single storage at the `index`
- `dyson/QueryPrefixStorage` - List all storage with an `index` that starts with a `prefix`
- `dyson/QueryStorageAll` - List all storage on the chain

:::tip Access Control
This line prevents anyone from running your function except you. You will see
this used in the examples below.

```python
assert SCRIPT_ADDRESS == CALLER, "not allowed"
```

:::

## Create

This code defines a function called `create` that takes in three parameters: `index`, `data`, and `force`. The function first checks if the value of `SCRIPT_ADDRESS` is equal to the value of CALLER. If it is not equal, the function raises `AssertionError('not allowed')`. If the assertion passes, the function calls the `_chain` function from the `dys` module.
If `force=True` it will never raise an exception and will always write to the index regardless of any existing data or not.

```python showLineNumbers
from dys import _chain, SCRIPT_ADDRESS, CALLER


def create(index: str, data: str, force: bool):
    assert SCRIPT_ADDRESS == CALLER, "not allowed"
    return _chain(
        "dyson/sendMsgCreateStorage",
        creator=SCRIPT_ADDRESS,
        index=SCRIPT_ADDRESS + "/" + index,
        data=data,
        force=force,
    )
```

## Retrieve

This example defines two functions, `get` and `list`, that interact with a storage system using the `_chain` function.

The `get` function takes in a parameter `index` which is a string. It then constructs a storage query by calling `_chain` with the `dyson/QueryStorage` method and passing in the index with the `SCRIPT_ADDRESS` concatenated to it.

See also: https://dys-api.dysonprotocol.com/#/Query/DysonStorage

<Tabs groupId="client">
<TabItem value="python" label="Python">

```python showLineNumbers
def get(index: str):
    return _chain(
        "dyson/QueryStorage",
        index=SCRIPT_ADDRESS + "/" + index,
    )
```

</TabItem>
<TabItem value="curl" label="Curl">


```bash showLineNumbers
curl https://dys-api.dysonprotocol.com/dyson/storage?index=<SCRIPT_ADDRESS>/<index>
```

</TabItem>
</Tabs>

The `list` function takes in a parameter `prefix` which is also a string. It constructs a storage query by calling `_chain` with the "dyson/QueryPrefixStorage" method and passing in the prefix with the `SCRIPT_ADDRESS` concatenated to it.

See also: https://dys-api.dysonprotocol.com/#/Query/DysonPrefixStorage


<Tabs groupId="client">
<TabItem value="python" label="Python">

```python showLineNumbers
def list(prefex: str):
    return _chain("dyson/QueryPrefixStorage", prefix=SCRIPT_ADDRESS + "/" + prefex)
```

</TabItem>
<TabItem value="curl" label="Curl">

```bash showLineNumbers
curl https://dys-api.dysonprotocol.com/dyson/storage?index=<SCRIPT_ADDRESS>/<index>
```

</TabItem>
</Tabs>

Both of these example functions return the result of the `_chain` function call.

## Update

This will update an existing Storage object at the given `index` or will return an
error if it is not there.

If `force=True` it will never raise an exception and will always write to the index.

```python showLineNumbers
def update(index: str, data: str, force: bool):
    assert SCRIPT_ADDRESS == CALLER, "not allowed"
    return _chain(
        "dyson/sendMsgUpdateStorage",
        creator=SCRIPT_ADDRESS,
        index=SCRIPT_ADDRESS + "/" + index,
        data=data,
        force=force,  # set to True to always write to this index
    )

```

## Delete

This will delete an existing Storage object at the given `index` or will return an
error if it is not there.

```python showLineNumbers
def delete(index: str):
    assert SCRIPT_ADDRESS == CALLER, "not allowed"
    return _chain(
        "dyson/sendMsgDeleteStorage",
        creator=SCRIPT_ADDRESS,
        index=SCRIPT_ADDRESS + "/" + index,
    )
```

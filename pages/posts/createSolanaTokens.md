---
title: Create Solana tokens on command line
date: 2022/3/12
description: I recently learned this so I would like to share
tag: Solana
author: Chad
---

# Create Solana tokens

I had to do this and got a bit confused in the process, so I took notes here, incase I need to do this again. This page is inspired by [this Figment tutorial.](https://learn.figment.io/tutorials/sol-mint-token)

If you are unsure of what a command does just add `--help` after it without any inputs. Also use `--verbose` when runing the commands to get more information.

1. Create a wallet with public and private keys and then send 0.01 Sol to this wallet

```
   input -> solana-keygen new --force
   output -> Generating a new keypair
   pubkey: dC3CTsSDtfp9yoDbBoAMExn6yHeTpLEp7Fk12n7oVhw
```

2. Create new token

```
   input -> spl-token create-token
   output -> Creating token HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG
```

3. Create account for this token with: `spl-token create-account <TOKEN_ADDRESS>`

```
   input -> spl-token create-account HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG
   output -> Creating account 1q7aA2kztrAAj7mNKHfrMtagw6qSNrEmhYfZNjLjPzQ
```

4. Mint tokens with: `spl-token authorize [FLAGS] [OPTIONS] <TOKEN_ADDRESS> <AUTHORITY_TYPE> <AUTHORITY_ADDRESS> `

```
   input -> spl-token mint HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG 1000000 1q7aA2kztrAAj7mNKHfrMtagw6qSNrEmhYfZNjLjPzQ
   output -> Minting 1000000 tokens
   Token: HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG
   Recipient: 1q7aA2kztrAAj7mNKHfrMtagw6qSNrEmhYfZNjLjPzQ
```

5. Check balance

```
   input -> spl-token accounts
   output -> Token Balance

HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG 1000000
```

6. Mint more tokens by repeting step 4

7. Repeat step 5 to confirm that more tokens are minted

8. Limit supply to prevent unlimited minting with: `spl-token authorize <TOKEN_ADDRESS> mint --disable`

```
   input -> spl-token authorize HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG mint --disable
   output -> Updating HD4wGTJA2HdzDVFqUqwtkvZKE1JJ9NeL8HZxr7Y7uVvG
 Current mint authority: dC3CTsSDtfp9yoDbBoAMExn6yHeTpLEp7Fk12n7oVhw
 New mint authority: disabled
```

9. Repeat step 4 and confirm that you cannot mint anymore of these tokens

## Note

To work on dev net, use:

`solana config set --url https://api.devnet.solana.com`

To work on main net, use:

`solana config set --url https://api.mainnet-beta.solana.com `

Thats all. If someone else reads this and has some feedback, contact me.

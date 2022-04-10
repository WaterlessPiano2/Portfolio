---
title: Starknet ZK-Rollup Intro
date: 2022/4/10
description: My notes from preparation to Starknet Hackathon
tag: Solidity Ethereum Development
author: Chad
---

[These are my notes from this video.](https://www.youtube.com/watch?v=E4YO11rHMhw)

# StarkNet ZK-Rollup Intro

StarkNet is a permissionless decentralised Validity-Rollup (also known as a “ZK-Rollup”). It operates as an L2 network over Ethereum, enabling any dApp to achieve unlimited scale for its computation – without compromising Ethereum’s composability and security, thanks to StarkNet’s reliance on the safest and most scalable cryptographic proof system – STARK.
StarkNet Contracts and the StarkNet OS are written in Cairo – supporting the deployment and scaling of any use case, whatever the business logic.

## What problem does it solve?

Bitcoin and Ethereum were released 15 years ago, but they are still slower than banks when transacting.

**Banks** have centralised systems, meaning they control their servers and databases.
Users relying on this centralised system is called delegate accountability. The bank can easily throw an extra giant server into the mix when it needs to scale its system.

**Blockchains**, on the other hand, distribute all the computation, data storage and verification of work to every user, so this effort gets duplicated on the chain.
In the blockchain, it takes more effort and time to process, verify, and store the data, respectively.
Inclusive accountability means every user participating in a network doing their work and storing their data.
This process is quite expensive because everyone has to replicate the same work and store the same data. The issue with this is scalability and privacy. **Scalability** is affected when work I want to do on blockchain will also need to be done by everyone else. **Privacy** is compromised because all the transactions on the blockchain are public.

## What does ZK-Rollups do ?

ZK-Rollups provide a way for a node to do the computation instead of what all the other nodes had to do and provide cryptographic proof that the work has been done correctly. This way, other users don’t have to do the exact computation; they verify that the delegated Node has done the computation correctly. Verifying complex computation is less effort than doing the computation.

Nodes that do the computation stake some tokens in the system. If the Node misbehaves and attempts to slow down the network or provide false results, they get slashed, meaning some of the tokens they staked are taken away from them. When a node gets slashed, it becomes less reputable, which means fewer investors will let this Node stake their tokens with it.

With ZK-STARK there are three parties.

**Statement:** Amount of computation spent looking for a solution.
**Prover:** Party that is producing the proof.
**Verifier:** The Party checking the proof can be everyone who uses the network. It can also be Starknet validators.

In a nutshell, computation gets done by a single big node called a proofer rather than the whole network. The proofer node will then publish input, output and the program for the computation it has done, along with the cryptographic proof that it has been done correctly. Verifier nodes validate that prover has indeed done the computation correctly. The bigger the load on the proofer node, the bigger the load on the verifier node; however, the load on the verifier node increases slower.

In Cairo (The programming language used to implement Starknet ZK-Rollup smart contracts), you can write software to ensure a program is executed correctly.

An example is: if we had to implement a game that runs entirely on the Ethereum blockchain, that would have cost us soo many gas fees because everyone on the chain also had to calculate every single detail of the game. With Starknet ZK-Rollup, only the profer has to do this.

## What is StarkWare?

StarkWare is a company that is established by the inventor of Starks. StarkWare developed a tool to cryptographically prove that you know the solution to a specific problem without actually solving the problem yourself.

- Using this tool StarkWare created Cairo language. Cairo enables you to execute provable computation. Cario is a general-purpose language, not a smart contract language.
- The proofer will use the code written in Cairo to prove that it did the computation correctly.
- The verifier also uses Cario code to verify that the computation has been completed correctly.

## StarkEx

StarkEx is an execution engine that helps trade NFTs and ERC-20s. This is like a white label engine for many different projects. The programs are executed off the chain and then proven on the blockchain.

## StarkNet

StarkNet is a network where you can write general-purpose smart contacts about anything.

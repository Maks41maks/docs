---
title: Envio Community Update No. 01
sidebar_label: Envio Community Update No.01
slug: /envio-developer-community-update-no-1
---

<img src="/blog-assets/envio-developer-community-update-1.png" alt="Cover Image Envio Developer Community Update No.1" width="100%"/>

<!--truncate-->

Ahoy Envio Shipooors!

Welcome to our first-ever monthly community update that will be happening on a monthly cadence so you can get a first-hand snapshot of what the team has been focusing on in the previous month.

So what's been happening behind the scenes at [Envio](https://envio.dev/)? Lots! In this update, we’ll cover technical features, release updates, upcoming events, and milestones we've reached. This month's update also provides a sneak peek into Envio’s upcoming Hypersync feature 👀. This month has been an epic display of #BigDevEnergy with our first release going live! 🚀

To commemorate the release of our alpha version we launched the [Envio “Build Bigger. Ship Faster” Grant Program](https://docs.envio.dev/blog/envio-grant-program-now-live), where we’ve invited blockchain developers like you to receive up to **$10,000** in prizes for simply integrating an awesome use case with Envio, and providing us with feedback on your experience. Cool right?! 🤩

In addition, our [Greeter Tutorial](https://docs.envio.dev/docs/greeter-tutorial), launched on Polygon, basically allows you to write a greeting message on the blockchain by indexing a simple Greeter smart contract, and instantaneously querying your greeting message using Envio. Think of it as the on-chain equivalent of a “[#gm](https://twitter.com/hashtag/gm?src=hashtag_click)” Discord channel.

The team has also joined forces with the fantastic team at [Linea](https://linea.build/), where co-founder and shipping enthusiast [Jason Smythe](https://twitter.com/JasoonSmythe) hopped on an interview to discuss why we built the Lindexer, a recap of our experience at EthGlobal, and the decision to take the Lindexer from hackathon project to production-grade infrastructure. The [Lindexer](https://ethglobal.com/showcase/lindexer-hyvic) is a hybrid indexer for Linea, powered by Envio, that can index both on and off-chain data efficiently in a decoupled manner. This is particularly useful for NFT-related applications, where in most cases, the NFT metadata is stored off-chain.

Full interview [here](https://www.youtube.com/watch?v=lvr6-abYNfM&list=PLFuio8vKOeNclzHqsj3j1gHKnpnm1Bu1r). 👈

### **Upcoming Events ⭐**

- Join the Envio team at the [Berlin Blockchain Week 2023](https://blockchainweek.berlin/) from the 11th-17th of September, where we’ll be attending [DappCon](https://www.dappcon.io/), handing out our world-famous stickers, and hosting a “Beers & Bratwurst” event. Beers and banter will be provided, but first come first serve so don’t forget to RSVP by clicking [here](https://partiful.com/e/fx0UOaAUPAbtM6zIK0h1). 👈
- Meet and greet the Envio team at [ETHLondon 3-Day Hackathon](https://www.encode.club/eth-london) hosted by Encode Club later in October. Expect awesome bounty prizes and stay tuned for more details leading up to the event.

### **Technical overview 🏗️**

Ever wondered what makes Envio tick? Our brilliant devs have documented our current architectures and created snazzy diagrams and templates to make it all crystal clear. Whether you're a tech whiz or just a curious soul, these visuals will shed light on Envio’s inner workings.

**Metrics Setup with Prometheus: 📈**

We've stepped up our game with a Prometheus integration, keeping a close eye on all the important metrics, and explored ELK (Elasticsearch, Logstash, and Kibana) for those who crave even more data insights.

**ELK Spike: 🦌**

Speaking of ELK, we've taken a bold step by completing the ELK setup in docker-compose. Get ready to dive deep into logs and analytics like never before!

**Linea: ✨**

We're thrilled to announce that we’ve partnered with Linea. We are also adding ERC-1155 support to our templates, making sure we've got all the bases covered.

**UI Login and Playground: 🖥️**

Our user interface is getting a facelift! We've introduced user authentication and deployed a sleek UI [COMING SOON].

**Indexing Speed Benchmarking: 🚀**

Need for speed? We've built a framework to measure indexing speed and, of course, provided some juicy insights for optimization. Fasten your seatbelts; it's going to be a wild ride!

**Re-syncing: 🔄**

Sometimes you need a fresh start, right? That's why we've implemented the 'raw events' ChainWorker, allowing us to re-sync from the raw events table. P.S. We've even got plans for a fancy ChainWorker swapping mechanism.

**HyperSync: 🚄**

Last but not least, we're reaching new heights with our HyperSync feature. The tests are in, and the documentation is looking sharp. Prepare to experience indexing at blazingly fast speeds!

TL;DR, _Nodes are optimized for consensus not reading and serving data. This service aims to optimize blockchain data for reading and querying with accelerated APIs_ 🧠

Stay tuned for more monthly updates and hop in our Discord for more up-to-date information.

Exciting times are ahead, and we’re thrilled to have you along for the ride. Until next time, stay curious and keep up the good shipping! 🚢

LFG.

## **Ship with us. 🚢**

By builders, for builders. Envio is a dev-friendly, speed-optimized, modern blockchain indexing solution that addresses the limitations of traditional blockchain indexing approaches and gives developers peace of mind. By harnessing the power of Envio, developers can overcome the challenges posed by latency, reliability, and costs across various sources. Envio serves as the front door for any application’s need to access, transform, and save real-time or historical data, from any EVM-compatible smart contracts.

If you're a blockchain developer looking to enhance your development process and unlock the true potential of Web3 infrastructure, look no further. Join our growing community of elite developers, check out our [docs](https://docs.envio.dev/docs/HyperIndex/overview), and let's work together to revolutionize the blockchain world and propel your project to the next level.

Follow Envio on [Twitter](https://twitter.com/envio_indexer) and/or [Lenster](https://lenster.xyz/u/envio) for updates on new features, or jump into our [Discord](http://discord.gg/gt7yEUZKeB) for any questions.

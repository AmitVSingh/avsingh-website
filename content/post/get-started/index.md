---
title: 🎉 Easily create your own simple yet highly customizable website
summary: Build aesthetically pleasing ‘personal websites’ for free…
date: 2023-10-27

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com)'

authors:
  - admin

tags:
  - Academic
  - Hugo Blox
  - Markdown
---

Welcome 👋

{{< toc mobile_only=true is_open=true >}}

<!-- ## Overview -->

Since the dawn of human civilization, we have been talking about the transformation of one or other kind. In this digital age, when human and machine interaction has increased manifolds, it has already started shaping ourself be it the fruits of our hard work in form of digital currencies, our creativity like composing music and writing a novel by AI machines, or communicating with human-like chatbots. The best way to respond to this change between carbon-based life and silicon-based life is by merging our identities with machines in forms of bits and bytes. Conventionally, bytes are used to store memory and bits for streaming the data. A baby step would be first to register our presence by building a personal websites. These websites would be the digital warehouses where we can store the relevant information and communicate it with the outer world.

In this blog, I will give you a brief yet complete tutorial to build your personal website. So let’s start…

[//]: # ([![The template is mobile first with a responsive design to ensure that your site looks stunning on every device.]&#40;https://raw.githubusercontent.com/wowchemy/wowchemy-hugo-modules/main/starters/academic/preview.png&#41;]&#40;https://hugoblox.com&#41;)

### Why consider building your website with HUGO/Blogdown/Netlify
- A lightning-fast response (usually it takes a fraction of second to respond the edit)
- A robust and easily maintainable static website generator with HUGO. No server side knowledge required.
- Blogdown (Rmarkdown+HUGO) helps you to write scientific blogs including cool graphics and daunting mathematical equations.
User-friendly deployment on a host server with Netlify.

### Get Started

- 👉 [**Create a new site**](https://hugoblox.com/templates/)
- 📚 [**Personalize your site**](https://docs.hugoblox.com/)
- 💬 [Chat with the **Hugo Blox community**](https://discord.gg/z8wNYzb) or [**Hugo community**](https://discourse.gohugo.io)
- 🐦 Twitter: [@GetResearchDev](https://twitter.com/GetResearchDev) [@GeorgeCushen](https://twitter.com/GeorgeCushen) #MadeWithHugoBlox
- 💡 [Request a **feature** or report a **bug** for _Hugo Blox_](https://github.com/HugoBlox/hugo-blox-builder/issues)
- ⬆️ **Updating Hugo Blox?** View the [Update Guide](https://docs.hugoblox.com/reference/update/) and [Release Notes](https://github.com/HugoBlox/hugo-blox-builder/releases)

## A kickstart guide
- Install R studio and get comfortable with the environment
- Install blowdown and Hugo by pasting the following code chunks in your R studio console
install.packages("blogdown")
blogdown::install_hugo(force = TRUE)
- Download and extract the zip file. Open academic.Rproj from academic-kickstart folder.
- In the RStudio console copy and paste 
blogdown:::serve_site()

Your website is now ready for preview. Either use R studio IDE viewer or you can also copy and paste the generated url (e.g. http://127.0.0.1:3642) from R studio console into your browser.
One can personalize the content of the website by editing the ‘content’ and ‘static’ folders. The folder’s name are self explanatory however you still need to spend some time here to understand the role of each file and the effect on editing. A good point of start would be ‘conf.toml’ file. Feel free to explore here all the options and for more information, please read the references provided at the end of this blog.

## Deployment
Now that you have build your stunning website, it’s time to deploy it to a host server. Don’t worry! we will do it in the easiest way possible with a user friendly website Netlify. You just have to drag your public folder from the academic-kickstart project directory and drop it in the deployment settings (watch video). You can further customize the URL for example “name.netlify.com” with the domain settings tab. You are all set to copy this brand new URL into your browser and congratulations!! time to welcome your digital identity into the world.



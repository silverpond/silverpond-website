---
layout: blog
title: Embedded Deep-Learning on the NVIDIA Jetson TX1
author: Lyndon Maydwell
meta: |
  The Jetson TX1 Dev-Kit Silverpond has been waiting for has arrived, and we're now ready
  to test new deep-learning models we've been developing on a low-power, small-form-factor board.
image: jetson.jpg
category: articles
path: /articles/2016-12-07-jetson-for-embedded-deep-learning
---
Silverpond has been waiting for a Jetson TX1 Dev-Kit to arrive for the
last couple of weeks in order to test out some new deep-learning models
that we've been developing on a lower-power, smaller-form-factor board.
Well here it is on my desk!
What's exciting about this computation format for us is that it allows the
fairly computationally intensive tasks involved in deep-learning inference
(and some backpropagation too) to be taken back out of the cloud and
moved closer to the point of data-ingestion.

<!--more-->

The marketing spiel goes like so:

> The Jetson TX1 Developer Kit is a full-featured development platform for visual
> computing designed to get you up and running fast ...
> This makes it ideal for all your applications requiring high
> computational performance in a low-power envelope.

Part of what makes deep-learning (and machine-learning in general) interesting,
is that the refinement and development of the model can be decoupled from
the use of the model for inference. In practice this means that once a neural-network
has been trained, it can be used effectively for inference with much lower resource
requirements than during training. Of course, this doesn't mean that you'll be able
to do image classification with your Casio calculator, but you can certainly
take advantage of lower power-factor computers to perform inference in the field.

This was the use-case that inspired us when we considered using the
Jetson hardware. We've traditionally deployed a lot of our services to cloud
infrastructure, but that won't work in off-line environments. The kinds
of use-cases that the Jetson facilitates are often especially interesting too,
as one of the appeals of AI is that it can drive autonomy, and autonomy implies
(though doesn't necessitate) independence from the hive - remote services in
this case.

The first model that we're planning to run on our Jetson is still top-secret,
however it is an extension of the
[pedestrian-detection demo](/object-detector)
that we've had online on our site for some time. We'll be sure to tell
you all about it as soon as possible. Stay tuned!

### Links

* <https://developer.nvidia.com/embedded/buy/jetson-tx1-devkit>
* [Pedestrian Detection Demo](/object-detector)

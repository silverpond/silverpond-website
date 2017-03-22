---
layout: blog
title: Beatles Abbey-Road Pedestrian Extraction
author: Lyndon Maydwell
meta: |
  An entertaining demonstration of the extraction capability of the object-detection
  API that we have built is provided by the iconic Beatles Abbey Road album cover.
image: cover-boxes.png
---
The current [object-detection demo](/object-detector) that we have built can,
with an attached probability, locate and outline pedestrians in an image.
Recently, the extraction of the pedestrians into separate images has also
been added to the demo, and while performing ad-hoc testing, a search for
the best and worst test-images has been underway. I believe that the
iconic Beatles Abbey Road album cover may very-well be the number-one
example we've come across so far!

<!--more-->

While the extraction of individuals from an image provides possibly the
second-most obvious use-case for this system (after vanilla detection),
the most interesting implication for me is that it is now possible to
perform neural-network composition via API. Each extracted individual
can now be fed into any secondary network - Classifying, or performing
further extraction and predictions based on the now-restricted context
of the sub-image.

This API-driven composition is quite reminiscent of the construction of functional
programs in point-free style:

	pipeline = extract_pedestrians >>> map predict_age

In-fact, you may even be able to define these high-level pipelines in code
in this very fashion. What is interesting is that there are various degrees
of coupling that are possible that can all be expressed in the same
high-level language that manifest with very different properties:

* User-Interface-Based, Asynchronous API Composition
* Service-Based, End-To-End, Synchronous API Composition
* Network-Based, Integrated, Inference Composition
* Learning-Based, Data-Driven, Trained Composition

I see this as a developer expressing the same pipeline, and via configuration,
being able to witness it manifest as various UI components on a website or
mobile application... Or having it pushed to the cloud as various micro-services
connected to queues... Or integrated into a single network by concatenating the
layers... Or finally, using this composed network in a training-context, supplying
new data and optimising the entire pipeline end-to-end. Analogously, this
could be the difference between a toolbox, a welded construction, a cast
engine and a grafted, living tree.

What imagery would you use to describe these different manifestations?

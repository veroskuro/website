---
title: "Understanding Activation Patching in mBERT"
date: 2026-04-17T12:00:00.000Z
case_id: "BX-994"
cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmLlgRXETQM_hyjFkq1ZQK0RzJM8yuUaEsJu6BGWEFr1g5PHZyub2RAaQdG5LuVp0rR-3K8hq3Ym5nPxOvzpY9d0bjfPo5dAn87UNFRKHJTX1Fe1zLaYonTst23LSI_7YXM9tBpo7WMW5rDEuvqKEqn7dKZP1SOm8KvfMbwIkMc-CRbSsO9FnCEI2fvYx0JAW8ptAIC95VXjD6DKp8ot7p5_PnS-HH4CY8IXEDH2WH0ro4AHwOKL1Wtr5Fcxrkv_k8z8kJ90kce_U"
---

It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.

When attempting to localize the sentiment circuit within multilingual BERT (mBERT), standard probing techniques fall short. They show us what information is available, but not what information the model *actually uses*.

> The microscopic dust that settles in the neglected corners of a room often speaks louder than the body in the center of it.

This is where **Activation Patching** (or causal tracing) comes in. By running the model on a clean prompt, freezing the activations, and then selectively patching in activations from a corrupted prompt, we can forensically isolate the exact heads and MLPs responsible for moving the sentiment logit.

## The Boron Anomaly
In our recent tests targeting Hindi and Hinglish inputs, we discovered that the sentiment circuit partially degrades. It appears to rely on English-script geometry that fails predictably on code-switched text.

Thus, the absence of ordinary ash proved to be the most damning evidence of all.

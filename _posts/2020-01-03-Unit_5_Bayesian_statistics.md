---
layout: post
title: Unit 5 - Bayesian statistics
date: 2020-01-03
Author: flpvvvv
tags: [Statistics]
comments: false
toc: true
pinned: false
---

An alternative of the frequentist approach is the **Bayesian approach**. In a sense, Bayesian inference amounts to having a likelihood function $L_n(\theta)$ that is weighted by prior knowledge on what $\theta$ might be. This is useful in many applications.

## Compare the frequentist approach and the Bayesian approach

The frequentist approach:

- Assume a statistical model $(E, \\{\mathbf P_\theta\\} _ {\theta \in \Theta})$.
- We assumed that the data $X_1,\ldots,X_n$ was drawn i.i.d from $\mathbf P_ {\theta^*}$ for some **unknown fixed** $\theta^*$.
- When we used the MLE for example, we looked at all possible $\theta \in \Theta$.
- Before seeing the data we did not prefer a choice of $\theta \in \Theta$ over another.

The Bayesian approach:

- In many practical contexts, we have a **prior belief** about $\theta^*$.
- Using the data, we want to update that belief and transform it into a **posterior belief**.

In Bayesian statistics, the true parameter is modeled as a random variable, or at the very least, the uncertainty regarding the true parameter is modeled as such. The Bayesian approach gives statisticians some freedom to reflect prior belief. 

## Prior and posterior

- Consider a probability distribution on a parameter space $\Theta$ with some pdf $\pi(\cdot)$: the prior distribution.
- Let $X_1,\ldots,X_n$ be a sample of $n$ random variables.
- Denote by $L_n(\cdot\vert\theta)$ the joint pdf of $X_1,\ldots,X_n$ conditionally on $\theta$, where $\theta \sim \pi$.
- Remark: $L_n(X_1,\ldots,X_n\vert\theta)$ is the likelihood used in the frequentist approach.
- The conditional distribution of $\theta$ given $X_1,\ldots,X_n$ is called the posterior distribution. Denote by $\pi(\cdot\vert X_1,\ldots,X_n)$ its pdf.

## Bayes’ formula

Bayes’ formula states that:

$$\pi(\theta\vert X_1,\ldots,X_n)\propto\pi(\theta)L_n(X_1,\ldots,X_n\vert\theta),\quad \forall \theta\in\Theta$$

The constant does not depend on $\theta$:

$$\pi(\theta\vert X_1,\ldots,X_n)=\frac {\pi(\theta)L_n(X_1,\ldots,X_n\vert\theta)}{\int_\Theta L_n(X_1,\ldots,X_n\vert t)\pi (t) dt},\quad \forall \theta\in\Theta$$

> Bayes’ theorem is stated mathematically as the following equation:
> $$\mathbf P(A\vert B)=\frac {\mathbf P(A)\mathbf P(B\vert A)}{\mathbf P(B)}$$
> where $A$ and $B$ are events and $\mathbf P(B)\ne 0$.

## Example: Bernoulli Experiment with the Beta Prior

Take "flip coin" as an example, we select a prior $\pi (p) \sim  \textsf {Beta}(a,a)$:

$$\pi(p) \propto p^{a-1}(1-p)^{a-1}, \quad p\in(0,1)$$

Given $p,X_1,\ldots,X_n \stackrel{iid}{\sim} \textsf {Ber}(p)$, so

$$L_n(X_1,\ldots,X_n\vert p)=p^{\sum_{i=1}^n X_i}(1-p)^{n-\sum_{i=1}^n X_i}$$

Hence the posterior:

$$\pi(p \vert X_1,\ldots,X_n) \propto p^{a-1+\sum_{i=1}^n X_i}(1-p)^{a-1+n-\sum_{i=1}^n X_i}$$

The posterior distribution is:

$$\textsf {Bata}\left(a+\sum_{i=1}^n X_i,a+n-\sum_{i=1}^n X_i \right)$$

In this example, the posterior distribution is also a Beta distribution, just like the prior distribution. We call it a **conjugate prior**.

## Prior Distribution

The prior distribution is to be specified by the researcher in order to take into account previous knowledge about possible values of the parameter.

When applying the Bayesian framework, we have considerable freedom in specifying the family of our prior distribution. We must consider the following factors in deciding on our prior:

- Whether or not we could specify the parameters of the distribution so that its shape approximates our prior belief
- Whether or not the support of the distribution is realistic based on our context
- How tractable it would be to compute the posterior distribution and perform inference from it, given the form of the likelihood function

### Non informative priors

We can still use a Bayesian approach if we have no prior information about the parameter. Good candidate: $\pi(\theta)\propto 1$, i.e., constant pdf on $\Theta$.

- If $\Theta$ is bounded, this is the uniform prior on $\Theta$.
- If $\Theta$ is unbounded, this does not define a proper pdf on $\Theta$.

An *improper prior* on $\Theta$ is a measurable, non-negative function $\pi(\cdot)$ defined on $\Theta$ that is not integrable. In general, one can still define a posterior distribution using an improper prior, using Bayes’ formula.

A uniform prior reflects an equal belief in each possible hypothesis. The maximum a-posteriori and maximum likelihood estimators when using such a prior would always be the same.

### Beta Distribution as priors

The Beta distribution is very suited to models where our parameter represents a probability due to its support being $[0,1]$. It is also very suited to models where our parameter represents a probability because multiplying it by $p$ or $1−p$ simply involves incrementing the respective parameter.

### Jeffreys' Prior

Jeffreys' Prior is an attempt to incorporate frequentist ideas of likelihood in the Bayesian framework, as well as an example of a *non-informative prior*. This prior depends on the statistical model used for the observation data and the likelihood function. Mathematically, it is the prior $\pi_J(\theta)$ that satisfies:

$$\pi_J(\theta) \propto \sqrt{\det \mathcal I(\theta)}$$

where $\mathcal I(\theta)$ is the **Fisher Information matrix** of the statistical model associated with $X_1,\ldots,X_n$ in the frequentist approach, provided that it exists.

In the one-variable case, Jeffreys' prior reduces to:

$$\pi_J(\theta) \propto \sqrt{\mathcal I(\theta)}$$

The Fisher information matrix $\mathcal I(\theta)$ here is treated as a *linear transformation* matrix which maps one coordinate space to another. In linear transformation terms, taking the determinant represents the ratio of volumes of corresponding spaces between coordinate system, which explains the intuition behind the use of $\det \mathcal I(\theta)$.

Let our parameter of interest be $\theta$. As computing Jeffreys' prior makes use of the Fisher information $\mathcal I(\theta)$, it is somehow related to the frequentist MLE approach (which has variance $\mathcal I(\theta)^{-1}$). This yields interpretations of Jeffreys' prior in terms of frequentist notions of estimation, uncertainty, and information:

- The Jeffreys' prior gives more weight to values of $\theta$ whose MLE estimate has less uncertainty.
- As a result, the Jeffreys' prior yields more weight to values of $\theta$ where the data has more information towards deciding the parameter.
- The Fisher information can be taken as a proxy for how much, at a particular parameter value $\theta$, would equivalent shifts to the parameter influence the data. Thus, Jeffreys' prior gives more weight to regions where the potential outcomes are more sensitive to slight changes in $\theta$.

## Bayesian confidence regions

For $\alpha \in (0, 1)$, a Bayesian confidence region with level $\alpha$ is a random subset $\mathcal R$ of the parameter space $\Theta$, which depends on the sample $X_1,\ldots,X_n$, such that:

$$\mathbf P[\theta \in \mathcal R\vert X_1,\ldots,X_n]=1-\alpha$$

Note that $\mathcal R$ depends on the prior $\pi(\cdot)$.

"Bayesian confidence region" and "confidence interval" are two distinct notions.

## Bayesian estimation

The Bayesian framework can also be used to estimate the true underlying parameter (hence, in a frequentist approach). In this case, the prior distribution does not reflect a prior belief: It is just an artificial tool used in order to define a new class of estimators.

Back to the frequentist approach: The sample $X_1,\ldots,X_n$ is associated with a statistical model $\left(E, ( \mathbf P_\theta ) _ {\theta \in \Theta }\right)$. 

1. Define a prior (that can be improper) with pdf $\pi$ on the parameter space $\Theta$.
2. Compute the posterior pdf $\pi(\cdot\vert X_1,\ldots,X_n)$  associated with $\pi$.

Bayes estimator:

$$\hat\theta^{(\pi)}=\int_\Theta\theta d \pi(\theta\vert X_1,\ldots,X_n)$$

This is the **posterior mean**. The Bayesian estimator depends on the choice of the prior distribution $\pi$ (hence the superscript $\pi$).

Another popular choice is the point that maximizes the posterior distribution, provided it is unique. It is called the MAP (**maximum a posteriori**):

$$\hat\theta^{\textsf {MAP}}=\arg\max_{\theta\in\Theta}\pi(\theta\vert X_1,\ldots,X_n)$$

In the [previous examples](#example-bernoulli-experiment-with-the-beta-prior), with prior $\textsf {Beta}(a,a)$ $(a>0)$:

$$\hat p^{(\pi)}=\frac{a+\sum_{i=1}^n X_i}{2a+n}=\frac{a/n+\bar X_n}{2a/n+1}$$

In particular, for a=1/2 (Jeffreys' prior):

 $$\hat p^{(\pi_J)}=\frac{1/(2n)+\bar X_n}{1/n+1}$$

In this example, the Bayes estimator is consistent and asymptotically normal.

In general, the asymptotic properties of the Bayes estimator do not depend on the choice of the prior.

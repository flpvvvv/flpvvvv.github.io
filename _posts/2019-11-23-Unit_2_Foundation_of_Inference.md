---
layout: post
title: Unit 2 - Foundation of Inference
date: 2019-11-23
Author: flpvvvv
tags: [Statistics]
comments: false
toc: true
pinned: false
---

The trinity of statistical inference: **estimation**, **confidence intervals** and **testing**.

- **Estimator**: one value whose performance can be measured by consistency, asymptotic normality, bias, variance and quadratic risk.
- **Confidence intervals** provide “error bars” around estimators. Their size depends on the confidence level.
- **Hypothesis testing**: we want to ask a yes/no answer about an unknown parameter. They are characterized by hypotheses, level, power, test statistic and rejection region. Under the null hypothesis, the value of the unknown parameter becomes known (no need for plug-in).

## Statistical model
Formal definition:

Let the observed outcome of a statistical experiment be a sample$X_1,X_2,\ldots ,X_ n$ of n i.i.d. random variables in some measurable space $E$ (usually $E \subseteq \mathbb R$) and denote by $\mathbf P$ their common distribution. A statistical model associated to that statistical experiment is a pair:

$$\left(E, ( \mathbf P_\theta ) _{\theta \in \Theta }\right)$$

where:

- $E$ is called *sample space* 
- $( \mathbf P_\theta ) _{\theta \in \Theta }$ is a family of probability measured on E
- $\Theta$ is any set , called *parameter set*.

For example: the statistical model of Bernoulli distribution: $(\\{0,1\\},(\textsf{Ber}(p)) _{p \in (0,1)} )$

### Parametric, nonparametric and semiparametric models
Usually, we will assume that the statistical model is well specified, i.e., defined such that $\mathbf P=\mathbf P_\theta$, for some $\theta \subseteq \Theta$. This particular $\theta$ is called the ***true parameter***, and is **unknown**: The aim of the statistical experiment is to estimate $\theta$, or check it’s properties when they have a special meaning.

- if $\Theta \subseteq \mathbb R^d$ for some $d\geq 1$, the model is called **parametric**
- if $\Theta$ is infinite dimensional, the model is called **nonparametric**
- if $\Theta=\Theta _1\times \Theta_2$, where $\Theta _1$ is finite dimensional, and $\Theta _2$ is infinite dimensional, then the model is called **semiparametric**.

### Identifiability
The parameter $\theta$ is called *identifiable* iff the map $\theta \in \Theta \mapsto \mathbf P_\theta$ is injective, i.e.:

$$\theta \neq \theta ' \Rightarrow \mathbf P_\theta \neq \mathbf P_{\theta '}$$

or equivalently:

$$\mathbf P_\theta = \mathbf P_{\theta '} \Rightarrow \theta = \theta ' $$

## Estimation

> A **statistic** is any measurable function of the **sample**.

An **estimator** of $\theta$ is a statistic $\hat\theta _ n = \hat\theta _ n(X_1,\ldots , X_ n)$ whose expression **does not** depend on $\theta$.

- An estimator $\hat\theta _ n$ of $\theta$ is weakly (resp. strongly) ***consistent*** if $\hat\theta _ n \xrightarrow [n\rightarrow \infty ]{\mathbf P/(resp.\ a.s.)} \theta$
- An estimator $\hat\theta _ n$ of $\theta$ is ***asymptotically normal*** if $\sqrt n(\hat\theta _ n-\theta) \xrightarrow [n\rightarrow \infty ]{(d)} \mathcal{N}(0,\sigma^2)$. The quantity $\sigma ^2$ is then called asymptotic variance of $\hat\theta _ n$.

Bias of an estimator $\hat\theta _ n$ of $\theta$: 

$$\text {bias}(\hat\theta _ n)=\mathbb E[\hat\theta _ n]-\theta$$

If $\text {bias}(\hat\theta _ n)=0$, we say that $\hat\theta$ is ***unbiased***.

We want estimators to have **low bias** and **low variance** at the same time.

The **Risk** (or **quadratic risk**) of an estimator $\hat\theta _ n\in \mathbb R$ is

$$\mathbf R(\hat\theta _ n)=\mathbb E[\vert\hat\theta _ n-\theta\vert^2]$$

which means: $\text {Quadratic Risk}=\text {Variance}+\text {Bias}^2$

For example: for Bernoulli distribution $(\\{0,1\\},(\textsf{Ber}(p)) _ {p \in (0,1)} )$, using $\hat {p} _ n = \overline{X} _ n$ as an estimator for $p$, this estimator is *unbiased*, *consistent*, and its quadratic risk tends to 0 as the sample size $n \to \infty$.

## Confidence Intervals

Let $\left(E, ( \mathbf P_\theta ) _{\theta \in \Theta }\right)$ be a statistical model based on observations $X_1,X_2,\ldots ,X_ n$ and assume $\Theta \subseteq \mathbb R$. Let $\alpha \in (0,1)$.

- Confidence interval (C.I.) of level $1-\alpha$ for $\theta$: any random (depending on $X_1,X_2,\ldots ,X_ n$) interval $\mathcal I$ whose boudnaries do not depend on $\theta$ and such that:

	$$\mathbf P_\theta [\mathcal I\ni \theta]\geq 1-\alpha, \quad \forall \theta \in \Theta$$

- C.I. of *asymptotic level* $1-\alpha$ for $\theta$: any random interval $\mathcal I$ whose boundaries do not depend on $\theta$ and such that:

	$$\lim _{n\to \infty } \mathbf{P} [\mathcal I\ni \theta]\geq 1-\alpha, \quad \forall \theta \in \Theta$$

Be aware that it is $\mathbf P \geq 1-\alpha$, not $\mathbf P = 1-\alpha$.

For example: for Bernoulli distribution $(\\{0,1\\},(\textsf{Ber}(p)) _{p \in (0,1)} )$, using $\hat{p }_ n = \overline{X}_ n$ as an estimator for $p$, and from CLT:

$$\sqrt{n}\frac{\overline{X}_ n-p}{\sqrt{p(1-p)}}\xrightarrow [n\rightarrow \infty ]{(d)} \mathcal{N}(0,1)$$

For a fixed $\alpha \in (0,1)$, if $q_{\alpha/2}$ is the $(1-\alpha/2$)-quantile of $\mathcal{N}(0,1)$, then with probability $\simeq 1-\alpha$ (if $n$ is large enough),

$$\overline{X}_ n \in [p-\frac {q_{\alpha/2}\sqrt{p(1-p)}}{\sqrt n},p+\frac {q_{\alpha/2}\sqrt{p(1-p)}}{\sqrt n}]$$

It yields:

$$\lim _{n\to \infty } \mathbf{P}( [\overline{X}_ n-\frac {q_{\alpha/2}\sqrt{p(1-p)}}{\sqrt n},\overline{X}_ n+\frac {q_{\alpha/2}\sqrt{p(1-p)}}{\sqrt n}] \ni p)=1-\alpha .$$

But it is **not** a confidence interval, because it depends on p !! Three solutions are presented below.

### Conservative bound
Since $p(1-p)\leq 1/4$, roughly with probability at least $1-\alpha$,

$$\mathcal I_{\textsf {conserv}}=[\overline{X}_ n -\frac {q_{\alpha/2}}{2\sqrt n},\overline{X}_ n +\frac {q_{\alpha/2}}{2\sqrt n}]$$

Indeed: $\lim _{n\to \infty } \mathbf{P}( \mathcal I_{\textsf {conserv}} \ni p)\geq 1-\alpha .$

### Solving the (quadratic) equation for p
From

$$\overline{X}_ n-\frac {q_{\alpha/2}\sqrt{p(1-p)}}{\sqrt n} \leq p \leq \overline{X}_ n+\frac {q_{\alpha/2}\sqrt{p(1-p)}}{\sqrt n}$$

we can get

$$(p-\overline{X}_ n)^2\leq \frac {q_{\alpha/2}^2p(1-p)}{n} $$

We need to find the roots $p_1<p_2$ of

$$(1+\frac {q_{\alpha/2}^2}{n})p^2-(2\overline{X}_ n+\frac {q_{\alpha/2}^2}{n} )p+\overline{X}_ n^2=0$$

This leads to $\mathcal I_{\textsf {solve}}=[p_1,p_2]$, such that: $\lim _{n\to \infty } \mathbf{P}( \mathcal I_{\textsf {solve}} \ni p)= 1-\alpha$.

### Plug-in
This method uses the estimated $\hat p$ to calculate the variance.

By LLN: $\hat p=\overline{X}_ n\xrightarrow [n\rightarrow \infty ]{\mathbf P,\ a.s.} p$, and by Slutsky: 

$$\sqrt{n}\frac{\overline{X}_ n-p}{\sqrt{\hat p(1-\hat p)}}\xrightarrow [n\rightarrow \infty ]{(d)} \mathcal{N}(0,1)$$

This leads to:

$$\mathcal I_{\textsf {plug-in}} =  [\overline{X}_ n-\frac {q_{\alpha/2}\sqrt{\hat p(1-\hat p)}}{\sqrt n},\overline{X}_ n+\frac {q_{\alpha/2}\sqrt{\hat p(1-\hat p)}}{\sqrt n}]$$

such that: $\lim _{n\to \infty } \mathbf{P}( \mathcal I_{\textsf {plug-in}} \ni p)= 1-\alpha .$

### Meaning of confidence interval
There is a ***frequentist*** interpretation: 

> 95% C.I. means if we were to repeat the experiment then the true parameter $\theta$ would be in the resulting confidence interval about 95% of the time.

It is **wrong** to say that 

> By 95% of chance that the true parameter $\theta$ is in the resulting confidence interval

Because from the frequentists' point of view, the true parameter $\theta$ is deterministic (fixed, even though unknown). Once the confidence interval is calculated, we can only say that the true parameter $\theta$ is in the C.I. or not, like a Bernoulli distribution, only 1 or 0 is taken. But I suppose we can say that:

> The expectation of that Bernoulli distribution is 95%.

### Steps to find a confidence interval
1. Find an estimator for $\hat\theta$ for $\theta$
2. Determine the (asymptotic) distribution of $\hat\theta$
3. Compute a confidence interval for $\theta$  based on $\hat\theta$ with level $\alpha$ 

## Delta method
### Exponential distribution example (1/2)
Take *Exponential distribution* as an example, PDF: $f(t)=\lambda e^{-\lambda t}, \ \forall t \geq 0$.

Let $X_1, X_2, \ldots , X_ n \stackrel{iid}{\sim } \exp (\lambda )$, and its sample mean: $\overline{X}_ n := \frac{1}{n} \sum _{i = 1}^ n X_ i$. By LLN: $\overline{X}_ n \xrightarrow [n\rightarrow \infty ]{a.s. / \mathbf P} \frac 1\lambda$, because $\mathbb E[X_1]=\frac 1\lambda$.

So a natural estimator of $\lambda$ is:

$$\hat\lambda:=\frac 1{\overline{X}_ n}$$

Hence: $\hat\lambda \xrightarrow [n\rightarrow \infty ]{a.s. / \mathbf P} \lambda$.

Be careful that, $\mathbb E[\frac 1{X_1}]>\frac 1{\mathbb E[X_1]}=\lambda$.

By CLT:

$$\sqrt{n}(\overline{X}_ n -\frac 1\lambda ) \xrightarrow [n \to \infty ]{(d)}\mathcal{N}(0,\lambda^{-2})$$

How does the CLT transfer to $\hat\lambda$? How to find an asymptotic confidence interval for $\lambda$? Here we need to use the **Delta method**.

### The Delta method
Let $(Z_n) _{n \geq 1}$ sequence of r.v. that satisfies

$$\sqrt{n}(Z_ n - \theta ) \xrightarrow [n \to \infty ]{(d)}\mathcal{N}(0,\sigma^2)$$

for some $\theta \in \mathbb R$ and $\sigma^2>0$ (the sequence $(Z_n) _{n \geq 1}$ is said to be asymptotically normal around $\theta$).

Let $g:\mathbb R \to \mathbb R$ be continuously differentiable at the point $\theta$. Then, $(g(Z_n)) _{n \geq 1}$ is also asymptotically normal around $g(\theta)$; More precisely:

$$\sqrt{n}(g(Z_ n) - g(\theta) ) \xrightarrow [n \to \infty ]{(d)}\mathcal{N}(0,(g'(\theta))^2\sigma^2)$$

### Exponential distribution example (2/2)
By using the delta method, $g(x)=\frac 1x$,

$$\sqrt{n}(\hat\lambda -\lambda ) \xrightarrow [n \to \infty ]{(d)}\mathcal{N}(0,\lambda^2)$$

To calculate the asymptotic confidence interval for $\lambda$:

$$[\hat\lambda -\frac {q_{\alpha/2}\lambda}{\sqrt n},\hat\lambda +\frac {q_{\alpha/2}\lambda}{\sqrt n}]$$

Then we can use "Solve" or "Plug-in" method to get confidence interval for $\lambda$.

## Hypothesis testing
### Statistical formulation

- Consider a sample $X_1,X_2,\ldots ,X_ n$ of i.i.d. random variables and a statistical model $\left(E, ( \mathbf P_\theta ) _{\theta \in \Theta }\right)$
- Let $\Theta _0$ and $\Theta _1$ be disjoint subsets of $\Theta$
- Consider the two hypotheses:
	- $H_0: \theta \in \Theta _0$
	- $H_1: \theta \in \Theta _1$
- $H_0$ is the ***null hypothesis***, $H_1$ is the ***alternative hypothesis***
- If we believe that the true $\theta$ is either in $H_0$ or in $H_1$, we may want to test $H_0$ against $H_1$
- We want to decide whether to reject $H_0$ (look for evidence against $H_0$ in the data)

### Asymmetry in the hypotheses

- $H_0$ and in $H_1$do not play a symmetric role: the data is is only used to try to disprove $H_0$
- In particular lack of evidence, does not mean that $H_0$ is true (“innocent until proven guilty”)
- A test is a statistic $\psi \in \\{0,1\\}$ such that:
	- If $\psi =0$, $H_0$ is not rejected
	- If $\psi =1$, $H_0$ is rejected

### Errors

- **Rejection region** of a test $\psi$:

	$$R_\psi=\\{x \in E^n:\psi (x)=1\\}$$

- **Type I error** of a test $\psi$ (rejecting $H_0$ when it is actually true): $\alpha_\psi$
- **Type II error** of a test $\psi$ (not rejecting $H_0$ although $H_1$ is actually true): $\beta_\psi$
- Power of a test $\psi$:

	$$\pi_\psi=\inf\limits_{\theta \in \Theta_1}(1-\beta_\psi(\theta))$$

### Level, test statistic and rejection region

- A test has **level** $\alpha$ if:

	$$\alpha_\psi(\theta) \leq \alpha, \quad \forall \theta \in \Theta_0$$

- A test has **asymptotic level** $\alpha$ if:

	$$\lim_{n \to \infty}\alpha_{\psi _ n}(\theta) \leq \alpha, \quad \forall \theta \in \Theta_0$$

- In general, a test has the form:

	$$\psi=\mathbf 1\\{T_n>c\\}$$

	for some statistic $T_n$ and threshold $c \in \mathbb R$
	
- $T_n$ is called the **test statistic**. The rejection region is $R_\psi=\\{T_n>c\\}$

### One-sided vs two-sided tests
We can refine the terminology when $\theta \in \Theta \subset \mathbb R$ and $H_0$ is of the form:

$$H_0: \theta=\theta_0 \iff \Theta_0=\\{ \theta_0\\}$$

- If $H_1:\theta \neq \theta_0$: **two-sided test**
-  if $H_1:\theta > \theta_0$ or $H_1:\theta < \theta_0$: **one-sided test**

### p-value
The (asymptotic) p-value of a test $\alpha_\psi$ is the smallest (asymptotic) level $\alpha$ at which $\alpha_\psi$ rejects $H_0$. It is random, it depends on the sample.

$\text {p-value} \leq \alpha \iff H_0$ is rejected by $\psi_\alpha$, at the (asymptotic) level $\alpha$

**The smaller the p-value, the more confidently one can reject $H_0$.**

### Steps of hypothesis testing

1. Find estimators
2. Find **pivot** and determine the distribution of pivot. Write some statistic $T_n$, and let $\psi=\mathbf 1\\{T_n>c\\}$
> It is pivot if we can manage to write it down in such a way that it's distribution under the null hypothesis is known and does not depend on any additional parameters. 
3. Adjust $c$ to match level $\alpha$.

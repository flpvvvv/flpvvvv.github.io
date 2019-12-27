---
layout: post
title: Unit 4 - Hypothesis testing
date: 2019-12-14
Author: flpvvvv
tags: [Statistics]
comments: false
toc: true
pinned: false
---

This unit will present more tests based on CLT and sometimes Slutsky, like **T-test** when data is Gaussian, $\sigma^2$ is unknown and Slutsky does not apply; like **Wald's test** when we use asymptotic normality of MLE; like **Implicit hypotheses** when testing about multivariate parameters; like **Goodness of fit** when answering questions like "does my data follow a Gaussian distribution?". 

## Asymptotic test - Clinical trials example

Let $X_1,\dots ,X_ n$ be i.i.d. **test group** samples distributed according to $\mathcal{N}\left(\Delta _ d,\sigma _ d^2\right)$ and let $Y_1,\dots ,Y_ m$ be i.i.d. **control group** samples distributed according to $\mathcal{N}\left(\Delta _ c,\sigma _ c^2\right)$. Assume that $X_1,\dots ,X_ n, Y_1,\dots ,Y_ m$ are independent.

Hypotheses:

$$H_0: \Delta_d=\Delta_c \quad \text {vs.} \quad H_1:\Delta_d>\Delta_c$$

From (even don't need CLT to get this):

$$\bar X_n\sim \mathcal{N}\left(\Delta _ d,\frac {\sigma _ d^2}{n}\right) \quad \text {and} \quad \bar Y_m\sim \mathcal{N}\left(\Delta _ c,\frac {\sigma _ c^2}{m}\right)$$

We can get:

$$\frac {\bar X_n-\bar Y_m-(\Delta_d-\Delta_c)}{\sqrt {\frac{\sigma_d^2}{n}+\frac{\sigma_c^2}{m}}}\sim \mathcal N(0,1)$$

Assume that $m = cn$ and $n\to\infty$, using Slutsky's lemma, we can replace the variance $\sigma^2$ by the sample variance $\widehat{\sigma^2}$:

$$\frac {\bar X_n-\bar Y_m-(\Delta_d-\Delta_c)}{\sqrt {\frac{\widehat{\sigma_d^2}}{n}+\frac{\widehat{\sigma_c^2}}{m}}}\sim \mathcal N(0,1)$$

where:

$$\widehat{\sigma_d^2}=\frac 1{n-1}\sum _{i=1}^n (X_i-\bar X_n)^2 \quad \text {and} \quad \widehat{\sigma_c^2}=\frac 1{m-1}\sum _{i=1}^m (Y_i-\bar Y_m)^2$$

This is a one-side, two-sample test. Here we use $(n-1)$ instead of $n$, because it is a [no-biased variance estimator](#the-sample-variance).

However, when the sample size is small, we cannot realistically apply Slutsky’s lemma, so we cannot replace the variance $\sigma^2$ by the sample variance $\widehat{\sigma^2}$. Slutsky's theorem only gives a good approximation when the sample size is very large.

## The $\chi^2$ distribution

For a positive integer $d$, the $\chi^2$ (pronounced “Kai-squared”) distribution with $d$ degrees of freedom is the law of the random variable $Z_1^2 + Z_2^2 + \cdots + Z_ d^2$ , where $Z_1, \ldots , Z_ d \stackrel{iid}{\sim } \mathcal{N}(0,1)$ .

If $\mathbf{Z} \sim \mathcal{N}_ d (0, I_ d)$, then $\Vert  \mathbf{Z} \Vert _2^2 \sim \chi^2_d$ .

And $\chi^2_2=\textsf {Exp}(\frac 12)$ .

If $X \sim \chi^2_d$, then

- $\mathbb E[X]=d$
- $\textsf {Var}[X]=2d$

### The sample variance

**Cochran's theorem** states that if $X_1, \ldots , X_ n \stackrel{iid}{\sim } \mathcal{N}(\mu , \sigma ^2)$, then the sample variance:

$$S_ n = \frac{1}{n} \sum _{i = 1}^ n (X_ i - \bar X_ n)^2=\frac{1}{n} \left(\sum _{i = 1}^ n X_ i^2\right) - (\bar X_ n)^2$$

satisfies:

- $\bar X_ n$ is independent of $S_n$
- $\frac{n S_ n}{\sigma ^2} \sim \chi _ {n -1}^2$

Here it is $\chi _ {n -1}^2$ because there is only $(n-1)$ degree of freedom: the sum of all the variables $(X_ i - \bar X_ n)$ equal to $0$: $\sum _ {i = 1}^ n (X_ i - \bar X_ n)=0$ .

We often prefer the **unbiased estimator** of $\sigma^2$:

$$
\begin{aligned}
\widetilde{S}_ n &= \frac{1}{n-1} \sum _{i=1}^ n \left(X_ i - \bar X _ n\right)^2 \\
&=\frac{n}{n-1} S_n
\end{aligned}
$$

Then its expectation:

$$
\begin{aligned}
 \mathbb E[\widetilde{S}_ n] &= \frac{n}{n-1}\mathbb E[S_n] \\
&= \frac{n}{n-1}\mathbb E \left[\frac{\sigma^2\chi _ {n -1}^2}{n}\right] \\
&= \frac{\sigma^2}{n-1}\mathbb E \left[\chi _ {n -1}^2\right] \\
&= \frac{\sigma^2}{n-1}\mathbb (n-1)\\
&= \sigma^2
\end{aligned}
$$

## Student’s T distribution

For a positive integer $d$, the Student’s T distribution with $d$ degrees of freedom (denoted by $t_d$) is the law of the random variable $\frac {Z}{\sqrt{V/d}}$, where $Z\sim \mathcal N (0, 1)$, $V \sim \chi^2_d$ and $Z \perp \!\!\! \perp V$ ($Z$ is independent of $V$).

### Student's T test

#### One-Sample, Two-Sided

The test statistic:

$$
\begin{aligned}
T_{n} &= \frac{\sqrt{n}(\bar{X}_ n - \mu)}{\sqrt{\widetilde{S}_ n}} \\
&= \sqrt{n} \left( \frac{\bar{X}_ n - \mu }{\sqrt{\frac{1}{n- 1} \sum _{i = 1}^ n (X_ i - \bar{X}_ n)^2} } \right)
\end{aligned}
$$

where $\bar X_n$ is the sample mean of i.i.d. Gaussian observations with mean $\mu$ and variance $\sigma^2$, $\widetilde{S} _ n$ is the unbiased sample variance. 

Since $\sqrt{n}(\bar{X} _ n - \mu)/\sigma \sim \mathcal N(0,1)$, and $\widetilde{S}_ n/\sigma^2 \sim \chi _ {n -1}^2/(n-1)$, then $T _ n \sim t _ {n-1}$ (by Cochran's theorem), which is **Student’s T distribution with $(n-1)$ degrees of freedom**. So the distribution of $T_n$ is pivotal, and its quantiles can be found in tables.

The student's T test of level $\alpha$ is specified by:

$$\psi _{\alpha } = \mathbf{1}(\vert T_ n\vert > q_{\alpha /2})$$

where $q _ {\alpha/2}$ is the $(1-\alpha/2)$-quantile of $t _ {n-1}$.

Be careful that: **The Student's T test requires the data $X_1,\ldots,X_n$ to be Gaussian.** This test is ***non-asymptotic***. That is, for any fixed $n$, we can compute the level of our test rather than the *asymptotic* level.

#### One-Sample, One-Sided

The student's T test of level $\alpha$ is specified by:

$$\psi _{\alpha } = \mathbf{1}(\vert T_ n\vert > q_{\alpha})$$

where $q _ {\alpha}$ is the $(1-\alpha)$-quantile of $t _ {n-1}$.

#### Two-Sample

Back to the Clinical trials example, we have:

$$\frac {\bar X_n-\bar Y_m-(\Delta_d-\Delta_c)}{\sqrt {\frac{\sigma_d^2}{n}+\frac{\sigma_c^2}{m}}}\sim \mathcal N(0,1)$$

When the samples size is small, we can not use Slutsky's lemma anymore, which means that we can not replace the variance $\sigma^2$ by the sample variance $\widehat{\sigma^2}$ anymore.

But we have approximately:

$$\frac {\bar X_n-\bar Y_m-(\Delta_d-\Delta_c)}{\sqrt {\frac{\widehat{\sigma_d^2}}{n}+\frac{\widehat{\sigma_c^2}}{m}}} \stackrel{\text {approx.}}{\sim } t_N$$

where the degrees of freedom $N$ is given by the **Welch-Satterthwaite formula** :

$$\min (n,m)\, \leq \,  N\, =\, \frac{\big (\hat\sigma _ X^2/n + \hat\sigma _ Y^2/m\big )^2}{\frac{\hat\sigma _ X^4}{n^2(n-1)}+\frac{\hat\sigma _ Y^4}{m^2(m-1)}} \, \leq \, n+m$$

## Wald's test

According to **Asymptotic Normality of the MLE**:

$$\sqrt{n}(\widehat{\theta }_ n^{\textsf {MLE}} - \theta ^*) \xrightarrow [n \to \infty ]{(d)} \mathcal{N}(0, \mathcal{I}(\theta ^*)^{-1})$$

where $\theta^ * \in \mathbb R^d$, and $\mathcal I (\theta^ * )$ denotes the Fisher information.

Standardize the statement of asymptotic normality above:

$$\sqrt{n} \mathcal{I}(\theta ^*)^{1/2} (\widehat{\theta }_ n^{\textsf {MLE}} - \theta ^*) \xrightarrow [n \to \infty ]{(d)} \mathcal{N}(0, \mathbf{I}_{d})$$

The Wald's test:

$$\left\Vert  \sqrt{n}\, \mathcal{I}(\mathbf{\theta ^*})^{1/2}(\widehat{\theta }_ n^{\textsf {MLE}}- \theta ^*) \right\Vert ^2 \xrightarrow [n\to \infty ]{(d)} \chi ^2_ d$$

which is also:

$$n (\widehat{\theta }_ n^{\textsf {MLE}} - \theta ^*)^{\textsf T} \mathcal{I}(\theta ^{\textsf {MLE}}) (\widehat{\theta }_ n^{\textsf {MLE}} - \theta ^*) \xrightarrow [n \to \infty ]{(d)} \chi ^2_ d$$

### Wald's Test in 1 Dimension

In 1 dimension, Wald's Test coincides with the two-sided test based on on the asymptotic normality of the MLE.

Given the hypotheses:

$$
\begin{aligned}
H_0&: \theta ^*= \theta _0 \\
H_1&: \theta ^*\ne \theta _0
\end{aligned}
$$

a two-sided test of level $\alpha$, based on the asymptotic normality of the MLE, is

$$\psi _\alpha =\mathbf{1}\left(\sqrt{n\mathcal I(\theta _0)} \left\vert \widehat{\theta }^{\textsf {MLE}} -\theta _0 \right\vert>q_{\alpha /2}(\mathcal{N}(0,1))\right)$$

where the Fisher information $\, \mathcal I(\theta _0)^{-1}\,$ is the asymptotic variance of $\widehat{\theta }^{\textsf {MLE}}$ under the null hypothesis.

On the other hand, a Wald's test of level $\alpha$ is

$$
\begin{aligned}
\psi ^{\textsf {Wald}}_\alpha &= \mathbf{1}\left(n\mathcal I(\theta _0) \left(\widehat{\theta }^{\textsf {MLE}} -\theta _0\right)^2\, >\, q_{\alpha }(\chi ^2_1)\right) \\
&= \mathbf{1}\left(\sqrt{n \mathcal I(\theta _0)} \, \left\vert \widehat{\theta }^{\textsf {MLE}} -\theta _0 \right\vert\, >\, \sqrt{q_{\alpha }(\chi ^2_1)}\right)
\end{aligned}
$$

Using the result from the problem above, we see that the two-sided test of level $\alpha$ is the same as Wald's test at level $\alpha$.

### Example: Performing Wald's Test on a Gaussian Data Set

Suppose $X_1, \ldots , X_ n \stackrel{iid}{\sim } N(\mu , \sigma ^2)$. The goal is to hypothesis test between:

$$
\begin{aligned}
H_0&: (\mu , \sigma ^2) = (0,1) \\
H_1&: (\mu , \sigma ^2) \ne (0,1)
\end{aligned}
$$

The Wald's test of level $\alpha$ is:

$$
\begin{aligned}
\psi ^{\textsf {Wald}}_\alpha &= \mathbf{1}\left(W_ n > q_\alpha (\chi _2^2) \right) \\
&= \mathbf{1}\left( n \left(\widehat{\theta }_ n^ T-\begin{pmatrix} 0& 1\end{pmatrix}\right)\mathcal{I}((0,1))\left(\widehat{\theta }_ n- \begin{pmatrix} 0\\ 1\end{pmatrix}\right) > q_\alpha (\chi _2^2) \right)
\end{aligned}
$$

where:

$$\widehat{\theta } _ n^ T=\begin{pmatrix} \widehat{\mu }_ n^{MLE}\\ (\widehat{\sigma ^2})_ n^{MLE}\end{pmatrix} = \begin{pmatrix}  \overline{X}_ n\\ \frac{1}{n} \sum _{i = 1}^ n ( X_ i - \overline{X}_ n )^2 \end{pmatrix}$$

and

$$\mathcal{I}(\mu , \sigma ^2) = \begin{pmatrix}  \frac{1}{\sigma ^2} &  0 \\ 0 &  \frac{1}{2 \sigma ^4} \end{pmatrix}$$

## Likelihood Ratio Test

### Basic Form

Given the hypotheses:

$$
\begin{aligned}
H_0&: \theta ^*= \theta _0 \\
H_1&: \theta ^*= \theta _1
\end{aligned}
$$

The likelihood ratio in this set-up is of the form :

$$\psi _ C = \mathbf{1}\left( \frac{L_ n(x_1, \ldots , x_ n; \theta _1 )}{L_ n(x_1, \ldots , x_ n; \theta _0 )} > C \right)$$

where $C$ is a threshold to be specified.

### Likelihood Ratio Test (based on log-likelihood)

Consider an i.i.d. sample $X_1, \ldots , X_ n$ with statistical model $\left(E, ( \mathbf P _ \theta ) _ {\theta \in \Theta }\right)$, where $\theta \in \mathbb R^d$.

Suppose the null hypothesis has the form: 

$$H_0: (\theta ^*_{r+1}, \ldots , \theta _ d^*)= (\theta ^{(0)}_{r+1}, \ldots , \theta _ d^{(0)})$$

for some fixed and given numbers $\theta ^{(0)}_{r+1}, \ldots , \theta _ d^{(0)}$.

Thus $\Theta_0$, the region defined by the null hypothesis, is

$$\Theta _0 := \\{  \mathbf{v} \in \mathbb {R}^ d: (v_{r+1}, \ldots , v_{d}) = (\theta ^{(0)}_{r+1}, \ldots , \theta _ d^{(0)}) \\}$$

where $(\theta ^{(0)}_{r+1}, \ldots , \theta _ d^{(0)})$ consists of *known* values.

The **likelihood ratio test** involves the test-statistic:

$$T_ n = 2 \left( \ell _ n(\widehat{\theta _ n}^{MLE}) - \ell _ n(\widehat{\theta _ n}^{c}) \right)$$

where $\ell_n$ is the log-likelihood.

The estimator $\widehat{\theta _ n^{c}}$ is the **constrained MLE** , and it is defined to be:

$$\widehat{\theta _ n^{c}} = \text {argmax}_{\theta \in \Theta _0} \ell _ n(X_1, \ldots , X_ n ; \theta )$$

### Wilks’ Theorem

Assume $H_0$ is true and the MLE technical conditions are satisfied. Then, $T_n$ is a pivotal statistic; *i.e.*, it converges to a pivotal distribution.

$$T_ n \xrightarrow [n \to \infty ]{(d)} \chi _{d-r}^2$$

## Goodness of Fit Tests

Goodness of fit (GoF) tests: we want to know if the hypothesized distribution is a good fit for the data. In order to answer questions like:

- Does $X$ have distribution 	$\mathcal N(0,1)$?
- Does $X$ have a Gaussian distribution ?
- Does $X$ have distribution 	$\mathcal U([0,1])$?

Key characteristic of GoF tests: no parametric modeling.

Suppose you observe i.i.d. samples $X_1, \ldots , X_ n \sim P$ from some  **unknown**  distribution $\mathbf P$. Let $\mathcal F$ denote a parametric family of probability distributions (for example, $\mathcal F$ could be the family of normal distributions $\\{  \mathcal{N}(\mu , \sigma ^2) \\} _ {\mu \in \mathbb {R}, \sigma ^2 > 0} \,$).

In the topic of  **goodness of fit testing**, our goal is to answer the question "**Does** $\mathbf P$ **belong to the family** $\mathcal F$,  **or is** $\mathbf P$ **any distribution outside of** $\mathbf P$ **?**"

**Parametric hypothesis testing** is a particular case of goodness of fit testing. However, in the context of parametric hypothesis testing, we assume that the data distribution $\mathbf P$ comes from some  **parametric**  statistical model $\\{ \mathbf{P} _ \theta \\} _ {\theta \in \Theta }$, and we ask if the distribution $\mathbf P$ belongs to a submodel $\\{ \mathbf{P} _ \theta \\} _ {\theta \in \Theta _0}$ or its complement $\\{ \mathbf{P} _ \theta \\} _ {\theta \in \Theta _1 }$. In parametric hypothesis testing, we allow only a small set of alternatives $\\{ \mathbf{P} _ \theta \\} _ {\theta \in \Theta _1 }$, where as in the goodness of fit testing, we allow the alternative to be anything.

### GoF for Discrete Distributions

The probability simplex in $\mathbb R^K$, denoted by $\Delta_K$, is the set of all vectors $\mathbf{p} = \left[p_1, \dots , p_ K\right]^ T$ such that:

$$\mathbf{p}\cdot \mathbf{1}\, =\, \mathbf{p}^ T \mathbf{1} = 1,  \quad p_ i \ge 0 \textsf { for all } K$$

where $\mathbf 1$ denotes the vector $\, \mathbf{1}=\begin{pmatrix} 1& 1& \ldots & 1\end{pmatrix}^ T$. Equivalently, in more familiar notation,

$$\Delta _ K\, =\, \left\{ \mathbf{p}=(p_1,\ldots ,p_ K) \in [0,1]^ K \, :\, \sum _ {i=1}^{K} p_ i \, =\, 1\right\}$$

We want to test:

$$H_0: \mathbf{p} = \mathbf{p}^0, \quad H_1: \mathbf{p} \ne \mathbf{p}^0$$

where $\mathbf{p}^0$ is a fixed PMF.

The **categorical likelihood** of observing a sequence of $n$ i.i.d. outcomes $X_1, \dots , X_ n \sim X$ can be written using the number of occurrences $N_ i, i=1,\dots ,K$, of the $K$ outcomes as:

$$L_ n(X_1,\dots ,X_ n,p_1,\dots ,p_ K) = p_1^{N_1}p_2^{N_2} \cdots p_ K^{N_ K}$$

The categorical likelihood of the random variable $X$, when written as a random function, is

$$L(X,p_1,\dots ,p_ K) = \prod _{i=1}^ K p_ i^{\mathbf{1}(X = a_ i)}$$

(the sample space of a **categorical random variable** $X$ is $E = \\{  a_1, \ldots , a_ K \\}$).

Let $\widehat{\mathbf p}$ be the MLE:

$$\widehat{\mathbf{p}}^{\textsf {MLE}}_ n = \textsf {argmax}_{\mathbf{p} \in \Delta _K} \log L_ n(X_1, \ldots , X_ n, \mathbf{p})$$

then:

$$\widehat{\mathbf p}_j=\frac {N_j}{n}, \quad j=1,\ldots,K$$

$\chi ^2$ test : if $H_0$ is true, then $\sqrt{n}(\widehat{\mathbf{p}} - \mathbf{p}^0)$ is asymptotically normal and:

$$n \sum _{i = 1}^ K \frac{ ( \widehat{ p_ i } - p_ i^0)^2 }{p_ i^0} \xrightarrow [n \to \infty ]{(d)} \chi _{K -1}^2$$

### GoF for Continuous Distributions

Let $X_1,\ldots,X_n$ be i.i.d. real random variables. The **cdf** of $X_1$ is defined as:

$$F(t)=\mathbf P[X_1\le t]=\mathbb E[\mathbf{1}(X_1\leq t)], \quad \forall t \in \mathbb R$$

which completely characterizes the distribution of $X_1$.

The **empirical cdf** (a.k.a. sample cdf) of the sample $X_1,\ldots,X_n$ is defined as:

$$
\begin{aligned}
F_n(t)&=\frac{1}{n} \sum _{i = 1}^ n \mathbf{1}(X_ i \leq t) \\
&=\frac {\#\{i=1,\ldots,n:X_i\leq t\}}{n}, \quad \forall t \in \mathbb R
\end{aligned}
$$

By the LLN, for all $t \in \mathbb R$,

$$F_n(t) \xrightarrow [n \to \infty ]{a.s.} F(t)$$

By **Glivenko-Cantelli Theorem** (Fundamental theorem of statistics):

$$\sup _{t \in \mathbb {R}} \left\vert F_ n(t) - F(t) \right\vert \xrightarrow [n \to \infty ]{a.s.} 0$$

By the CLT, for all $t \in \mathbb R$,

$$\sqrt{n} ( F_ n(t) - F(t) ) \xrightarrow [n \to \infty ]{(d)} \mathcal N(0,F(t)(1-F(t))$$

(The variance of Bernoulli distribution is $p(1-p)$.)

**Donsker’s Theorem** states that if $\mathbf F$ is continuous, then

$$\sqrt{n} \sup _{t \in \mathbb {R}} \vert F_ n(t) - F(t) \vert \xrightarrow [n \to \infty ]{(d)} \sup _{0 \leq x \leq 1} \vert\mathbb {B}(x)\vert$$

where $\mathbb B$ is a random curve called a **Brownian bridge**.

We want to test:

$$H_0: \mathbf{F} = \mathbf{F}^0, \quad H_1: \mathbf{F} \ne \mathbf{F}^0$$

where $\mathbf{F}^0$ is a continuous cdf. Let $\mathbf F_n$ be the empirical cdf of the sample $X_1,\ldots,X_n$. If $H_0$ is true ($\, \mathbf{F} = \mathbf{F}^0\,$), then $\mathbf{F} _ n(t) \thickapprox \mathbf{F}^0(t)$, for all $t \in \mathbb R$.

#### Kolmogorov-Smirnov test

The Kolmogorov-Smirnov test statistic is defined as:

$$T_ n = \sup _{t \in \mathbb {R}} \sqrt{n} \vert F_ n(t) - F^0(t) \vert$$

and the Kolmogorov-Smirnov test is

$$\mathbf{1}(T_ n>q_\alpha )\quad \text {where } q_\alpha =q_\alpha (\sup _{t \in [0,1]}\vert \mathbb {B}(t) \vert)$$

Here, $q_\alpha =q_\alpha (\sup _ {t \in [0,1]}\vert \mathbb {B}(t) \vert)\,$ is the $(1−\alpha)$-quantile of the supremum $\sup _{t \in [0,1]}\vert \mathbb {B}(t) \vert$ of the Brownian bridge as in Donsker's Theorem.

$T_n$ is called a pivotal statistic: If $H_0$ is true, the distribution of $T_n$ does not depend on the distribution of the $X_i$’s and it is easy to reproduce it in simulations. In practice, the quantile values can be found in *K-S Tables*.

Even though the K-S test statistics $T_n$ is defined as a supremum over the entire real line, it can be computed explicitly as follows:

$$
\begin{aligned}
T_n&=\sqrt{n}\sup _{t \in \mathbb {R}} \vert F_ n(t) - F^0(t) \vert \\
&=\sqrt{n}\max _{i=1,\ldots ,n}\left\{ \max \left(\left\vert \frac{i-1}{n}-F^0(X_{(i)}) \right\vert,\left\vert \frac{i}{n}-F^0(X_{(i)}) \right\vert \right) \right\}
\end{aligned}
$$

where $X_{(i)}$ is the **order statistic** , and represents the $i^{th}$ smallest value of the sample. For example, $X_{(1)}$ is the smallest and $X_{(n)}$ is the greatest of a sample of size $n$.

#### Kolmogorov-Lilliefors Test

What if I want to test: "Does X have Gaussian distribution?" but I don’t know the parameters? A simple idea is using plug-in:

$$\sup _{t \in \mathbb {R}} \vert F_ n(t) - \Phi_{\hat\mu,\hat\sigma^2}(t) \vert$$

where: $\hat\mu=\bar X_n$, $\hat\sigma^2=S_n^2$, and $\Phi_{\hat\mu,\hat\sigma^2}(t)$ is the cdf of $\mathcal N(\hat\mu,\hat\sigma^2)$.

**In this case Donsker’s theorem is no longer valid.**

Instead, we compute the quantiles for the test statistic:

$$\widetilde{T}_ n=\sup _{t \in \mathbb {R}} \vert F_ n(t) - \Phi_{\hat\mu,\hat\sigma^2}(t) \vert$$

They do not depend on unknown parameters! This is the **Kolmogorov-Lilliefors test**.

#### Example: Testing the Mean for a Sample with Unknown Distribution

Suppose that you observe a sample $X_1, \ldots , X_ n \stackrel{iid}{\sim } \mathbf{P}$ for some distribution $\mathbf{P}$ with continuous cdf. Your goal is to decide between the null and alternative hypotheses:

$$H_0: \mu = 0, \quad H_1: \mu \ne 0$$

Looking at a histogram, you suspect that $X_1, \ldots , X_ n$ have a Gaussian distribution. We would like to first test this suspicion. Formally, we would like to decide between the following null and alternative hypotheses:

$$
\begin{aligned}
H_0'&: \mathbf P \in \{ \mathcal{N}(\mu , \sigma ^2) \} _{\mu \in \mathbb {R}, \sigma ^2 > 0} \\
H_1'&: \mathbf P \notin \{ \mathcal{N}(\mu , \sigma ^2) \} _{\mu \in \mathbb {R}, \sigma ^2 > 0}
\end{aligned}
$$

We can use **Kolmogorov-Lilliefors test** to decide between $H_0'$ and $H_1'$.

Suppose that the test we used in the previous part for $H_0'$ and $H_1'$ **fails to reject**. 

Then we can use **Student's T test** to decide between the original hypotheses $H_0$ and $H_1$.

> In practice, many of the methods for statistical inference, such as the student's T test, rely on the assumption the data is Gaussian. Hence, before performing such a test, we need to evaluate whether or not the data is Gaussian. This problem gives an example of such a procedure. First we tested for the Gaussianity of our data, and since the Kolmogorov-Lilliefors test failed to reject, assuming that there was no error, we could apply the student's T test to answer our original hypothesis testing question.

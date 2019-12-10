---
layout: post
title: Unit 3 - Methods of Estimation
date: 2019-12-04
Author: flpvvvv
tags: [Statistics]
comments: false
toc: true
pinned: false
---

When the parameter is not directly the expectation of samples ($\mathbb E(X)$), three estimation methods will be presented: **Maximum likelihood estimation**, **Method of moments**, and **M-estimators**.

## Distance measures between distributions

Two methods are presented to measure the distance between distributions: **Total variation distance** and **Kullback-Leibler (KL) divergence**.

### Total variation (TV) distance

Let $\left(E, ( \mathbf P_\theta ) _ {\theta \in \Theta }\right)$ be a statistical model, and $\theta^*$ is the true parameter, the statistician's goal is that given $X_1,X_2,\ldots ,X_ n$, find an estimator $\hat\theta=\hat\theta(X_1,X_2,\ldots ,X_ n)$ such that $\mathbf P _ {\hat\theta}$ is close to $\mathbf P _ {\theta^\*}$. This means: $\vert\mathbf P _ {\hat\theta} -\mathbf P _ {\theta^\*}\vert$ is small for all $A \subset E$. Here $A$ is a sub sample space.

The **total variation distance** between two probability measures $\mathbf P _ \theta$ and $\mathbf P _ {\theta '}$with sample space E is defined by:

$$\text {TV}(\mathbf{P} _ {\theta }, \mathbf{P} _ {\theta '})={\max _ {A \subset E}}\, \big \vert \mathbf{P} _ {\theta }(A)-\mathbf{P} _ {\theta '}(A)\big \vert$$

Let $\mathbf P$ and $\mathbf Q$ be probability measures with a sample space $E$ and probability mass functions $f$ and $g$. Then, the total variation distance between $\mathbf P$ and $\mathbf Q$:

$$\text {TV}(\mathbf{P}, \mathbf{Q}) = {\max _ {A \subset E}}\vert \mathbf{P}(A) - \mathbf{Q}(A) \vert$$

- If E is **discrete** (total variation distance between discrete measures)

	$$\text {TV}(\mathbf{P}, \mathbf{Q}) = \frac{1}{2} \, \sum _ {x \in E} \vert f(x) - g(x)\vert$$

- if E is **continuous** (total variation distance between continuous measures)

	$$\text {TV}(\mathbf{P}, \mathbf{Q}) = \frac{1}{2} \, \int _ {x \in E} \vert f(x) - g(x)\vert ~ \text {d}x$$

	**It can be imagined as the half of the sum of the surface difference between their PDF.** Here $\frac12$ is the normalization.  

#### Properties of Total Variation Distance

$d$ is a **distance** on probability measures:

- **Symmetric**: $d(\mathbf{P}, \mathbf{Q}) = d(\mathbf{Q}, \mathbf{P})$
- **Nonnegative**: $d(\mathbf{P}, \mathbf{Q}) \geq 0$
- **Definite**: $d(\mathbf{P}, \mathbf{Q}) = 0 \iff \mathbf{P}= \mathbf{Q}$
- **Triangle inequality**: $d(\mathbf{P}, \mathbf{V}) \leq d(\mathbf{P}, \mathbf{Q}) + d(\mathbf{Q}, \mathbf{V})$

The total variation distance (TV) is a distance on probability measures.

### Kullback-Leibler (KL) divergence

Let $\mathbf P$ and $\mathbf Q$ be **discrete** probability distributions with PMFs $p$ and $q$ respectively. Let's also assume $\mathbf P$ and $\mathbf Q$ have a common sample space $E$. Then the **KL divergence** (also known as **relative entropy** ) between $\mathbf P$ and $\mathbf Q$ is defined by:

$$\text {KL}(\mathbf{P}, \mathbf{Q}) = \sum _ {x \in E} p(x) \ln \left( \frac{p(x)}{q(x)} \right)$$

where the sum is only over the support of $\mathbf P$. 

If $\mathbf P$ and $\mathbf Q$ are continuous probability distributions with PDFs $p$ and $q$ on a common sample space $E$, then:

$$\text {KL}(\mathbf{P}, \mathbf{Q}) = \int _ {x \in E} p(x) \ln \left( \frac{p(x)}{q(x)} \right) dx$$

where the sum is again only over the support of $\mathbf P$.

#### Properties of KL-divergence

- **No-Symmetric**: $\text {KL}(\mathbf{P}, \mathbf{Q}) \neq \text {KL}(\mathbf{Q}, \mathbf{P})$
- **Nonnegative**: $\text {KL}(\mathbf{P}, \mathbf{Q}) \geq 0$
- **Definite**: $\text {KL}(\mathbf{P}, \mathbf{Q}) = 0 \iff \mathbf{P}= \mathbf{Q}$
- **No triangle inequality**: $\text {KL}(\mathbf{P}, \mathbf{V}) \nleq \text {KL}(\mathbf{P}, \mathbf{Q}) + \text {KL}(\mathbf{Q}, \mathbf{V})$ in general

The Kullback-Leibler (KL) divergence is **NOT** a distance.

For example, KL divergence between 2 **Gaussian** distributions $\mathbf P=\mathcal N(a,1)$ and $\mathbf Q=\mathcal N(b,1)$:

$$\text {KL}(\mathbf{P}, \mathbf{Q})=\frac 12(a-b)^2$$

Explanation can be found [here](https://github.com/erochassa/mitx18.650/blob/master/recitation5.pdf).

## Maximum likelihood estimation

Let $(E, ( \mathbf P_\theta ) _ {\theta \in \Theta })$ be a statistical model, and $\theta^*$ is the true parameter, in order to find an estimator $\hat\theta$, we can minimize the KL-divergence:

$$\text {KL}(P _ {\theta^*}, P _ {\hat\theta}) = \sum _ {x\in E} p _ {\theta^*} \ln \frac{p _ {\theta ^*}(x)}{p _ {\hat\theta}(x)}$$

This approach will naturally lead to the construction of the **maximum likelihood estimator**.

The KL divergence $\text {KL}(\mathbf{P}, \mathbf{Q})$ can be written as an **expectation** with respect to the distribution $\mathbf{P}$. In general, it is easier to build an estimator for the KL divergence than it is to build an estimator for the total variation distance.

$$
\begin{aligned}
\text {KL}(\mathbf {P _ {\theta^*}}, \mathbf {P _ {\theta}}) &= \mathbb E _ {\theta^*}[\ln (\frac {p _ {\theta^*}(X)}{p _ {\theta}(X)})]  \\ 
&= \mathbb E _ {\theta^*}[\ln {p _ {\theta^*}(X)}]-\mathbb E _ {\theta^*}[\ln {p _ {\theta}(X)}]
\end{aligned}
$$

The left part $\mathbb E _ {\theta^\*}[\ln {p _ {\theta^\*}(X)}]$ is a constant $C$. The right part can be estimated by an average, by the Law of Large Number (LLN). So the KL estimator can be written as below:

$$
\widehat{\text {KL}}(\mathbf {P _ {\theta^*}}, \mathbf {P _ {\theta}}) = C-\frac 1n\sum _{i = 1}^ n \ln (p_\theta (X_ i))
$$

We want to solve:

$$
\begin{aligned}
\min _{\theta \in \Theta} \, \widehat{\text {KL}}(\mathbf {P _ {\theta^*}}, \mathbf {P _ {\theta}}) &\Leftrightarrow \max _ {\theta \in \Theta} \, \frac 1n\sum _ {i = 1}^ n \ln (p_\theta (X_ i)) \\
&\Leftrightarrow \max _ {\theta \in \Theta} \, \ln [\prod _ {i = 1}^ n (p_\theta (X_ i))] \\
&\Leftrightarrow \max _ {\theta \in \Theta} \, \prod _ {i = 1}^ n (p_\theta (X_ i))
\end{aligned}
$$

This is the **maximum likelihood principle**.

The **likelihood** is the function:

$$
\begin{aligned}
\displaystyle  L_ n: E^ n \times \Theta &\to \mathbb {R} \\
(x_1, \ldots , x_ n, \theta ) &\mapsto \prod _{i = 1}^ n p_\theta (x_ i)
\end{aligned}
$$

For example: likelihood of a **Bernoulli** Statistical Model:

$$
\begin{aligned}
L_ n(x_1, \ldots , x_ n, p)  &= \prod _ {i = 1}^ n \left( x_ i p + (1 - x_ i) (1 - p) \right) \\
&=  \prod _ {i = 1}^ n \left( p^{x_i}  (1 - p)^{1 - x_ i} \right) \\
&= p^{\sum _ {i = 1}^ n x_ i} (1 -p)^{n- \sum _ {i = 1}^ n x_ i}
\end{aligned}
$$

For example, likelihood for the **Gaussian** Statistical Model:

$$L_ n(x_1, \ldots , x_ n; \mu, \sigma^2)  = \frac 1{(\sigma \sqrt {2\pi})^n}\exp \bigg( -\frac 1{2\sigma^2} \sum _ {i = 1}^ n(x_i -\mu)^2 \bigg)$$

### Maximum Likelihood Estimator

The **maximum likelihood estimator** for $\theta^*$ is defined to be:

$$
\begin{aligned}
\hat\theta _ n ^{\text {MLE}} &= \arg\max _ {\theta \in \Theta} \, L(x_1, \ldots , x_ n, \theta)\\
&= \arg\max _ {\theta \in \Theta} \left( \prod _ {i = 1}^ n p _ \theta (X_ i) \right)
\end{aligned}
$$

And in practice, we use a lot the **log-likelihood estimator**:

$$\hat\theta _ n ^{\text {MLE}} = \arg\max _ {\theta \in \Theta} \, \ln [L(x_1, \ldots , x_ n, \theta)]$$

For example: Maximum Likelihood Estimator of a **Poisson Statistical Model**. Let $X_1, \ldots , X_ n \stackrel{iid}{\sim } \text {Poiss}(\lambda ^\*)$ for some unknown $\lambda ^\* \in (0,\infty )$. The associated statistical model is $(\mathbb {N} \cup \\{ 0\\} , \\{ \text {Poiss}(\lambda )\\} _ {\lambda \in (0,\infty )})$. Likelihood of a Poisson Statistical Model can be written:

$$L_ n(x_1, \ldots , x_ n, \lambda ) = \prod _{i = 1}^ n e^{-\lambda } \frac{\lambda ^{x_ i}}{ {x_ i}!} = e^{-n \lambda } \frac{\lambda ^{\sum _{i = 1}^ n x_ i}}{x_1 ! \cdots x_ n !}$$

And the log-likelihood is: $\ell (\lambda ) := \ln L _ n(x_1, \ldots , x _ n, \lambda )$.

The derivative of the log-likelihood can be written:

$$\frac{\partial }{\partial \lambda } \ln L_ n(x_1, \ldots , x_ n, \lambda ) = -n + \frac{\sum _{i = 1}^ n x_ i}{\lambda}$$

and if we set the above equation to 0, we can get: $\hat\lambda _ n ^{\text {MLE}} = \bar X _ n$.

### Consistency of MLE

Given i.i.d samples $X_1, \ldots , X _ n\sim \mathbf{P} _ {\theta ^\*}$ and an associated statistical model $\left(E,\\{ \mathbf{P} _\theta \\} _ {\theta \in \Theta }\right)$, the maximum likelihood estimator $\hat{\theta } _ n^{\text {MLE}}$ of $\theta^\*$ is a **consistent** estimator under mild regularity conditions (e.g. continuity in $\theta$ of the pdf $p_\theta$ almost everywhere), i.e.

$$\hat\theta _ n^{\text {MLE}}\xrightarrow [n\to \infty ]{\mathbf P} \theta ^*$$

Note that this is true even if the parameter $\theta$ is a vector in a **higher dimensional parameter space** $\Theta$, and $\hat{\theta } _ n^{\text {MLE}}$ is a **multivariate random variable**, e.g. if $\theta =\begin{pmatrix} \mu \\ \sigma ^2\end{pmatrix}\in \mathbb {R}^2$ for a Gaussian statistical model.

This can be proven by KL divergence: the true parameter $\theta^*$ is **identifiable**.

## Covariance

If $X$ and $Y$ are random variables with respective means $\mu_X$ and $\mu_Y$, then recall the **covariance** of $X$ and $Y$ (written $\text {Cov} (X,Y)$) is defined to be

$$
\begin{aligned}
\text {Cov}(X,Y) &= \mathbb E[(X - \mu _ X)(Y - \mu _ Y)] \\
&= \mathbb E[XY] - \mathbb E[X]\mathbb E[Y] \\
&= \mathbb E[X \cdot (Y-\mathbb E(Y)] \\
&= \mathbb E[(X-\mathbb E(X) \cdot Y]
\end{aligned}
$$

It shows that the covariance can be calculated with $X$ and $Y$ both centered, or just one centered.

The properties of covariance:

- $\textsf{Cov}(X,X) = \textsf{Var}(X)$
- $\textsf{Cov}(X,Y) = \textsf{Cov}(Y,X)$
- $\textsf{Cov}(aX + bY, Z) = a\textsf{Cov}(X,Z) + b\textsf{Cov}(Y,Z)$
- If $X$ and $Y$ are independent, then $\textsf{Cov}(X,Y)=0$.
	
In general, the converse of the last property is NOT true, except if $(X,Y)^T$ is a Gaussian vector. Think a counter example that  $\mathbb E[XY]=0$ and  $\mathbb E[Y]=0$, but $X,Y$ are not independent: Consider X which is $\textsf {Bernoulli}(\frac 12)$. Let $Y$ be a random variable which is always $0$ if $X=0$, and uniformly distributed over $\\{\pm 1\\}$ if $X=1$. Notice that $\mathbb E[Y] = \frac{1}{2} 0 + \frac{1}{4} 1 + \frac{1}{4}(-1) = 0$. On the other hand, $\mathbb E[XY] = (0 \cdot 0) \cdot \frac{1}{2} + (1 \cdot 1) \frac{1}{4} + (1 \cdot -1) \frac{1}{4} = 0$. However, $X$ and $Y$ are not independent.

### Covariance matrix

Let $\mathbf X= \begin{pmatrix} X^{(1)}\\ \vdots \\ X^{(d)}\end{pmatrix}\,$ be a random vector of size $d \times 1$. Let $\mu \triangleq \mathbb E[\mathbf X]$ denote the **entry-wise** mean, i.e.

$$\mathbb E[\mathbf X] = \begin{pmatrix} \mathbb E[X^{(1)}]\\ \vdots \\ \mathbb E[X^{(d)}]\end{pmatrix}$$

Then the **covariance matrix**  $\Sigma$ can be written as:

$$\Sigma = \mathbb E[(\mathbf X- \mu )(\mathbf X- \mu )^ T]$$

This matrix has a size of $d \times d$. The term  on the $i$th row and $j$th column is $\Sigma _ {ij} = \mathbb E[(\mathbf X ^ {(i)}- \mu  ^ {(i)})(\mathbf X ^ {(j)}- \mu ^ {(j)} )^ T]=\textsf {Cov}(X ^ {(i)},X ^ {(j)})$.

And: $\textsf {Cov}(AX+B)=\textsf {Cov}(AX)=A \cdot \textsf {Cov}(X) \cdot A^T=A\Sigma A^T$.

### The multivariate Gaussian distribution

A random vector $\mathbf{X}=(X^{(1)},\ldots ,X^{(d)})^ T$ is a **Gaussian vector**, or **multivariate Gaussian or normal variable**, if any linear combination of its components is a (univariate) Gaussian variable or a constant (a “Gaussian" variable with zero variance), i.e., if $\alpha ^ T \mathbf{X}$ is (univariate) Gaussian or constant for any constant non-zero vector $\alpha \in \mathbb {R}^ d$.

The distribution of $X$, the  **$d$-dimensional Gaussian or normal distribution**, is completely specified by the vector mean $\mu =\mathbb E[\mathbf{X}]= (\mathbb E[X^{(1)}],\ldots ,\mathbb E[X^{(d)}])^ T$ and the $d\times d$ covariance matrix $\Sigma$.  If $\Sigma$ is invertible, then the pdf of $X$ is:

$$f _ {\mathbf X}(\mathbf x) = \frac{1}{\sqrt{\left(2\pi \right)^ d \textsf {det}(\Sigma )}}e^{-\frac{1}{2}(\mathbf x-\mu )^ T \Sigma ^{-1} (\mathbf x-\mu )}, ~ ~ ~ \mathbf x\in \mathbb {R}^ d$$

where $\textsf {det}(\Sigma )$ is the determinant of the $\Sigma$, which is positive when $\Sigma$ is invertible.  

In 2 dimensions ($d=2$, $(X,Y)^T$), its PDF depends on 5 parameters: $\mathbb E[X], \textsf {Var}(X),\mathbb E[Y], \textsf {Var}(Y)$ and $\textsf {Cov}(X,Y)$.

If $\mu=0$ and $\Sigma$ is the identity matrix, then $X$ is called a **standard normal random vector**.  

Note that when the covariant matrix $\Sigma$ is diagonal, the PDF factors into PDFs of univariate Gaussians, and hence the components are independent.

### The multivariate CLT

The CLT may be generalized to averages or random vectors (also vectors of averages). Let $X_1, \ldots,X_n \in \mathbb R^d$ be independent copies of a random vector $X$ such that $\mathbb E[X]=\mu$, $\textsf {Cov}(X)=\Sigma$,

$$\sqrt n (\bar X_n-\mu)\xrightarrow [n\to \infty]{(d)}\mathcal{N} _d (0,\Sigma)$$

Equivalently:
$$\sqrt n \Sigma^{-\frac 12}(\bar X_n-\mu)\xrightarrow [n\to \infty]{(d)}\mathcal{N} _ d (0,I_d)$$

### Multivariate Delta method

Let $(T_n) _ {n \geq 1}$ sequence of random vectors in $\mathbb R^d$ such that:

$$\sqrt{n}(T_ n - \theta ) \xrightarrow [n \to \infty ]{(d)}\mathcal{N} _d (0,\Sigma)$$

for some $\theta \in \mathbb R$ and some covariance $\Sigma \in \mathbb R ^ {d \times d}$.

Let $g: \mathbb R^d \to \mathbb R^k (k\geq 1)$ be continuously differentiable at $\theta$. Then:

$$\sqrt{n}(g(T_ n) - g(\theta)) \xrightarrow [n \to \infty ]{(d)}\mathcal{N} _k (0,\nabla g(\theta)^T\Sigma \nabla g(\theta))$$

where:

$$\nabla g(\theta)=\frac {\partial g}{\partial \theta} (\theta)=(\frac {\partial g_j}{\partial \theta_i}) _ {0\leq i\leq d \atop 0\leq j \leq k} \in \mathbb R^{d \times k}$$


## Fisher Information

Define the **log-likelihood** for **one observation** as:

$$\ell (\theta ) = \ln L _ 1(X, \theta ), \quad \theta \in \Theta \subset \mathbb R^d$$

Assume that  $\ell$ is a.s. twice differentiable. Under some regularity conditions, the **Fisher information** of the statistical model is defined as:

$$\mathcal{I}(\theta ) = \textsf{Cov}(\nabla \ell (\theta )) = -\mathbb E\left[\mathbf{H}\ell (\theta )\right]$$

If $\Theta \subset \mathbb R^d$, we get:

$$\mathcal{I}(\theta ) = \textsf{Var}[\ell '(\theta )]=-\mathbb E[(\ell ''(\theta)]$$

For example, let $X \sim \textsf {Ber}(p)$:

$$
\ell(p)=X \ln (p)+(1-X)\ln(1-p) \\
\ell'(p)=\frac{X}{p}+\frac{1-X}{1-p} \qquad \textsf{Var}[\ell'(p)]=\frac 1{p(1-p)} \\
\ell''(p)=-\frac{X}{p^2}-\frac{1-X}{(1-p)^2} \qquad -\mathbb E[\ell''(p)]=\frac 1{p(1-p)} \\
$$

So we can see that the fisher information of Bernoulli distribution is $\mathcal I=\frac 1{p(1-p)}$. 

The fisher information of common distributions can be easily found on the Wikipedia's pages. Like this one: [wiki/Bernoulli_distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution)

### Asymptotic normality of the MLE

Let $\theta^* \in \Theta$ (the true parameter). Assume the following: 

1. The parameter is identifiable. 
2. For all $\theta \in \Theta$, the support of $\mathbf P _ \theta$ does not depend on $\theta$; 
3. $\theta^*$ is not on the boundary of $\Theta$; 
4. $\mathcal I(\theta)$ is invertible in a neighborhood of $\theta ^*$; 
5. A few more technical conditions. 

Then, $\hat\theta _ n ^{\textsf {MLE}}$ satisfies:

- $\hat\theta _ n ^{\textsf {MLE}}\xrightarrow [n\to \infty]{\mathbf P}\theta^\*$, w.r.t. $\mathbf P_ {\theta ^\*}$;

- $\sqrt n (\hat\theta _ n ^{\textsf {MLE}}-\theta ^*)\xrightarrow [n\to \infty]{(d)}\mathcal{N} _d (0,\mathcal I(\theta ^\*)^{-1})$, w.r.t. $\mathbf P_ {\theta ^\*}$.

**The Fisher information $\mathcal{I}(\theta)$ at the true parameter determines the asymptotic variance of the random variable $\hat\theta _ n ^{\textsf {MLE}}$.**

## The method of moments

### Moments

Let $X_1, \ldots,X_n$ be i.i.d. sample associated with a statistical model $(E, ( \mathbf P_\theta ) _ {\theta \in \Theta })$, assume that $E \subset \mathbb R$, and $\Theta \subset \mathbb R^d$, for some $d \geq 1$.

**Population moments**: Let $m_k(\theta)=\mathbb E _ \theta [X _1^k]$, $1 \leq k \leq d$

**Empirical moments**: Let $\hat m_k(\theta)=\overline{X _n^k}=\frac 1n\sum _ {i=1}^nX_i^k$

> The k moment is the mean (expectation) of $X^k$.

From LLN, 

$$\hat m_k(\theta) \xrightarrow [n\to \infty]{\mathbf P/a.s.}m_k(\theta)$$

More compactly, we say that the whole vector converges:

$$(\hat m_1,\ldots,\hat m_d) \xrightarrow [n\to \infty]{\mathbf P/a.s.}(m_1,\ldots,m_d)$$

### Moments estimator

Let:

$$
\begin{aligned}
M : \Theta &\to \mathbb {R}^d \\
\theta &\mapsto M(\theta)=(m_1(\theta),\ldots,m_d(\theta))
\end{aligned}
$$

Assume $M$ is one to one:

$$\theta=M^{-1}(m_1(\theta),\ldots,m_d(\theta)$$

The definition of moments estimator of $\theta$:

$$\hat\theta _ n ^{\textsf {MM}}=M^{-1}(\hat m_1,\ldots,\hat m_d)$$

provided it exists.

For example: let $(\mathbb {R}, \\{ N(\mu , \sigma ^2)\\} _ {\mu \in \mathbb {R}, \sigma > 0})$ be the statistical model of a normal random variable $X$. Let

$$m_ k(\mu , \sigma ) = \mathbb {E}[X^ k]$$

Then: $m _ 1(\mu , \sigma )=\mu, \quad m _ 2(\mu , \sigma )=\mu^2+\sigma^2$

Mapping parameters to moments. Let:

$$
\begin{aligned}
\psi : \mathbb {R} \times (0, \infty ) &\to \mathbb {R}^2 \\
(\mu , \sigma ) &\mapsto (m_1(\mu , \sigma ), m_2(\mu , \sigma ))
\end{aligned}
$$

$\psi$ is one-to-one on the given domain $\mathbb {R} \times (0, \infty )$ and $\psi (\mu , \sigma ) = (m_1, m_2)$, then:

$$
\begin{aligned}
\mu &= m_1 \\
\sigma &= \sqrt {m_2-m_1^2}
\end{aligned}
$$

### Generalized method of moments

Under some technical conditions, the method of moments estimator $\hat\theta _ n ^{\textsf {MM}}$ is **asymptotically normal**. Applying the multivariate CLT and Delta method yields:

$$\sqrt{n}(\widehat{\theta }_ n^{\text {MM}} - \theta ^*) \xrightarrow [n \to \infty ]{(d)} \mathcal{N}(0, \Gamma(\theta))$$

The quantity $\Gamma(\theta)$ above is referred to as the **asymptotic variance**.

$$\Gamma(\theta)=\bigg[\frac {\partial M^{-1}}{\partial \theta}(M(\theta))\bigg]^T\Sigma(\theta)\bigg[\frac {\partial M^{-1}}{\partial \theta}(M(\theta))\bigg]$$

### MLE vs. Moment estimator

- Comparison of the quadratic risks: In general, the MLE is more accurate.
- MLE still gives good results if model is misspecified.
- Computational issues: Sometimes, the MLE is intractable but MM is easier (polynomial equations).

## M-estimation

M-estimation involves estimating some parameter of interest related to the underlying, unknown distribution (e.g. its mean, variance, or quantiles). Unlike maximum likelihood estimation and the method of moments, no statistical model needs to be assumed to perform M-estimation. M-estimation can be used in both a parametric and non-parametric context.

The definition of M-estimation:

Let $X_1, \ldots , X _ n$ be i.i.d. with some unknown distribution $\mathbf{P}$ and an associated parameter $\mu^*$ on a sample space $E$. We make no modeling assumption that $\mathbf{P}$ is from any particular family of distributions.

An **M-estimator** of the parameter $\mu ^*$ is the **argmin of an estimator of a function** $\mathcal{Q}(\mu )$ **of the parameter** which satisfies the following:

- $\mathcal{Q}(\mu )=\mathbb E\left[\rho (X,\mu ) \right]$ for some function $\rho :E\times \mathcal{M}\to \mathbb {R}$, where $\mathcal M$ is the set of all possible values of the unknown true parameter $\mu ^*$;
- $\mathcal{Q}(\mu )$ attains a **unique** minimum at $\mu = \mu ^\*$, in $\mathcal M$. That is, $\textsf {argmin} _ {\mu \in \mathcal{M}}\mathcal{Q}(\mu ) \, =\, \mu ^\*$.

In general, the goal is to find the **loss function** $\rho$ such $\mathcal{Q}(\mu )=\mathbb E\left[\rho (X,\mu ) \right]$ has the properties stated above.

Note that the function $\rho (X,\mu )$ is in particular a function of the random variable $X$,  and the expectation in $\mathbb E[\rho (X,\mu )]$ is to be taken against the  **true distribution** $\mathbf{P}$ of $X$,  with associated parameter value $\mu ^*$.

Because $\mathcal{Q}(\mu )$ is an expectation, we can construct a (consistent) estimator of $\mathcal{Q}(\mu )$ by replacing the expectation in its definition by the sample mean.

Maximum likelihood estimation is a special case of M-estimation. **In MLE case, the loss function $\rho (X_i,\mu )=-\ln p _ \theta (X_ i)$**.

### Mean as a Minimizer

In 1-d case, let $E \in \mathbb R$, and $\mathcal M \in \mathbb R$, if $\rho (X,\mu )=(X-\mu)^2$, then $\mu^*$ is the **mean** of $X$, a.k.a. $\mathbb E[X]$.

Proof:

$$
\begin{aligned}
\mathcal{Q}(\mu )=\mathbb E[\rho (X,\mu )]&=\mathbb E[(X-\mu)^2] \\
&=\int _{-\infty }^\infty (x - \mu)^2 f(x) \, dx \\
&=\int _{-\infty }^\infty (x^2 - 2\mu x + \mu^2) f(x) \, dx \\
\mathcal{Q}'(\mu )=\frac{d}{d\mu } \mathcal{Q}(\mu )&=\frac{d}{d \mu } \bigg(\int _{-\infty }^\infty (x^2 - 2\mu x + \mu^2) f(x) \, dx \bigg) \\
&=-2\int _{-\infty }^\infty xf(x)dx+2\mu\int _{-\infty }^\infty f(x)dx \\
&=-2\mathbb E(X)+2\mu
\end{aligned}
$$

If we set $\mathcal{Q}'(\mu )=0$, we can get $\mu^*=\mathbb E[X]$.

It also works when $E \in \mathbb R^d$, and $\mathcal M \in \mathbb R^d$. Just let $\rho (X,\mu )= {\Vert X-\mu \Vert} _ 2^2$, then $\mu^*=\mathbb E[X] \in \mathbb R^d$.

### Median as a Minimizer

In 1-d case, let $E \in \mathbb R$, and $\mathcal M \in \mathbb R$, if $\rho (X,\mu )= \vert X-\mu \vert$, then $\mu^*$ is the **median** of $X$.

Proof:

$$
\begin{aligned}
\mathbb E[\vert X-\mu \vert] &=\int _{-\infty }^\infty \vert x-\mu \vert f(x) \, dx \\
&=\int _{\mu }^\infty (x - \mu ) f(x) \, dx + \int _{-\infty }^\mu (-x + \mu ) f(x) \, dx \\
&=\int _{\mu }^\infty x f(x) dx - \int _{-\infty }^\mu x f(x) dx \\ &\quad - \mu \left(\int _\mu ^\infty f(x) dx -\int _{-\infty }^\mu f(x) dx \right) \\
\mathcal{Q}'(\mu )&=\frac{d}{d\mu } \mathcal{Q}(\mu ) \\
&=-\mu f(\mu)-\mu f(\mu)-\left(\int _\mu ^\infty f(x) - \int _{-\infty }^\mu f(x) dx\right) \\ &\quad - \mu (-f\left(\mu ) - f(\mu )\right) \\
&= - \int _\mu ^\infty f(x) \, dx + \int _{-\infty }^\mu f(x) \, dx
\end{aligned}
$$

If we set $\mathcal{Q}'(\mu )=0$, we can get $\int _ {-\infty }^\mu f(x) \, dx=\int _\mu ^\infty f(x) \, dx$, by the definition of median, $\mu^*$ is the median of $X$.

### Quantile as a Minimizer

The **check function** is defined as:

$$C_\alpha (x) = \begin{cases} -(1-\alpha )x& \text {if }x<0\\ \alpha x & \text {if }x\geq 0 \end{cases}$$

Assume that $X$ is a continuous random variable with density $f: \mathbb {R} \to \mathbb {R}$. Define the $\alpha$-quantile of $X$ to be $Q_ X(\alpha ) \in \mathbb {R}$ such that

$$\mathbf{P}\left(X \leq Q_ X(\alpha )\right) = \alpha$$

(It is different from the quantile function for  a standard normal distribution, $q_\alpha$ is such that $\mathbf{P}(X > q(\alpha )) = \alpha$.)

We have to proof that any α-quantile of X satisfies: $Q _ {X}(\alpha ) = \text {argmin} _ {\mu \in \mathbb {R}}\mathbb E[C _ \alpha (X - \mu )]$.

Proof:

$$
\begin{aligned}
\mathbb E[C_\alpha (X - \mu )] &=\int _{-\infty }^\infty C_\alpha (X - \mu ) f(x) \, dx \\
&=\int _{\mu }^\infty \alpha(x - \mu ) f(x) \, dx - \int _{-\infty }^\mu (1-\alpha)(x - \mu ) f(x) \, dx \\
&=\alpha \int _{\mu }^\infty x f(x) dx - \alpha \mu \int _{\mu }^\infty f(x) dx \\ &\quad - (1-\alpha)\int _{-\infty }^\mu x f(x) dx + (1-\alpha)\mu\int _{-\infty }^\mu f(x) dx \\
\mathcal{Q}'(\mu )&=\frac{d}{d\mu } \mathcal{Q}(\mu ) \\
&=-\alpha\mu f(\mu)-\alpha \int _{\mu }^\infty f(x) dx +\alpha \mu f(\mu) \\
&\quad -(1-\alpha)\mu f(\mu)+(1-\alpha)\int _{-\infty }^\mu f(x) dx+(1-\alpha)\mu f(\mu)\\
&= \int _{-\infty }^\mu f(x) dx-\alpha \left( \int _{-\infty }^\mu f(x) dx+\int _{\mu }^\infty f(x) dx\right)\\
&= \int _{-\infty }^\mu f(x) dx-\alpha
\end{aligned}
$$

If we set $\mathcal{Q}'(\mu )=0$, we can get $\alpha=\int _ {-\infty }^{\mu^\*} f(x) \, dx$, by definition $\mu^\*$ is the $\alpha$-quantile of $X$.

### Asymptotic Normality of M-estimators

The $\mathbf J$ and $\mathbf K$ matrices:

$$
\begin{aligned}
\mathbf{J}&=\mathbb E[\mathbf{H}\rho] \\
&=\mathbb E\left[\begin{pmatrix} \frac{\partial ^2 \rho }{\partial \mu _1 \partial \mu _1} (\mathbf{X}_1, \vec{\mu })& \ldots & \frac{\partial ^2 \rho }{\partial \mu _1 \partial \mu _ d} (\mathbf{X}_1, \vec{\mu })\\ \vdots & \ddots & \vdots \\ \frac{\partial ^2 \rho }{\partial \mu _ d \partial \mu _1} (\mathbf{X}_1, \vec{\mu })& \ldots & \frac{\partial ^2 \rho }{\partial \mu _ d \partial \mu _ d} (\mathbf{X}_1, \vec{\mu })\end{pmatrix}\right]\quad (d\times d) \\
\\
\mathbf{K}&=\textsf{Cov}\left[\nabla \rho (\mathbf{X}_1,\vec{\mu })\right] \\
&=\textsf{Cov}\left[\begin{pmatrix} \frac{\partial \rho }{\partial \mu _1 } (\mathbf{X}_1, \vec{\mu })\\ \vdots \\ \frac{\partial \rho }{\partial \mu _ d } (\mathbf{X}_1, \vec{\mu })\end{pmatrix}\right]\quad (d\times d)
\end{aligned}
$$

In one dimension, i.e. $d=1$, the matrices reduce to the following:

$$
\begin{aligned}
\mathbf J&= \mathbb E\left[ \frac{\partial ^2 \rho }{\partial \mu ^2} (X_1, \mu ) \right] \\
\mathbf K&= \text {Var}\left[ \frac{\partial \rho }{\partial \mu }(X_1, \mu ) \right]
\end{aligned}
$$

In the log-likelihood case (write $\mu=\theta$), **both of these functions are equal to the Fisher information**:

$$\mathbf J(\theta)=\mathbf K(\theta)=\mathcal I(\theta)$$

Be careful that, in MLE case, the loss function is $\rho (X_i,\mu )=-\ln p _ \theta (X_ i)$, which is the **negative** of log-likelihood. With MLE we ***max***-imize the objective function, whereas with M-estimation, we ***mini***-mize the objective function.

Under some technical conditions, the functions $\mathbf J(\mu)$ and $\mathbf K(\mu)$ determine the asymptotic variance of the M-estimator $\hat\mu$:

$$
\begin{aligned}
\widehat{\mu }_ n &\xrightarrow [n \to \infty ]{\mathbf P} \mu^* \\
\\
\sqrt{n} (\widehat{\mu }_ n - \mu ^*) &\xrightarrow [n \to \infty ]{(d)} \mathcal N(0,\mathbf J(\mu ^*)^{-1} \mathbf K(\mu ^*) \mathbf J(\mu ^*)^{-1})
\end{aligned}
$$

### M-estimators in robust statistics

When estimators are more resilient to corruptions or mistakes in the data than others, such estimators are referred to as **robust** .

The empirical median is more robust than the empirical mean. However, the median estimator takes absolute function as loss function: $\rho (X,\mu )= \vert X-\mu \vert$, which is not a continuous function at $\mu$. So there is no way to get $\mathbf J$ and $\mathbf K$.  To bypass this problem, we can use **Huber's Loss**, which is defined as:

$$h_\delta (x) = \begin{cases}  \frac{x^2}{2} \quad \text {if} \,  \,  \vert x \vert \le \delta \\ \delta ( \vert x \vert - \delta /2 ) \quad \text {if} \,  \,  \vert x \vert > \delta \end{cases}$$

This Huber's loss is differentiable everywhere.

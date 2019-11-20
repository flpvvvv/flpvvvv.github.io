---
layout: post
title: Statistics
date: 2019-11-20
Author: flpvvvv
tags: [Statistics]
comments: false
toc: true
pinned: true
---
This is my notes of the course **"MITx:  18.6501x Fundamentals of Statistics"** on edX. The session that I participated started at **Sept 2, 2019**. The purpose of this document is to help me remember what I have learnt.
<!-- more -->
Here is the [link](https://courses.edx.org/courses/course-v1:MITx+18.6501x+3T2019/course/).

# Unit 1: Introduction to Statistics

## Probability and Statistics
Very explicit explanation of the relation of **probability** and **statistics**:

![probability and statistics](https://raw.githubusercontent.com/flpvvvv/flpvvvv.github.io/master/images/probability%20and%20statistics.png)

If we know the truth, then we can use "Probability" to predict/explain the "Observations". However, 
> statistics is **reverse engineering** probability. 

We have some observations (most of time we can them data), but we have no idea about the truth. We use the observations to estimate the truth. This is the purpose of statistics. From data, we try to recover what the truth is like.

## Some conceptions
### i.i.d. 
Data  that  **i.i.d.**  stands for  **independent and identically distributed**  .

A collection of random variables  X1,…,Xn  are  **i.i.d.**  if
1.  each  Xi  follows a distribution  Pi, all those distributions  Pi  are the same, and
2.  Xi  are (mutually) independent

### Sample average
We denote the **sample average**, or **sample mean**, of n random variables  X1,…,Xn  by
$$
\bar X_n=\frac 1n\sum _{i=1}^nX_i
$$

## Laws of Large Numbers (LLN)
Let $X_1,X_2,…,X_n$ be i.i.d. random variables, with $\mu=E[X]$ and $σ^2=Var[X]$.
Laws (weak and strong) of large numbers (LLN):

$$
\bar X_n \coloneqq \frac 1n\sum _{i=1}^nX_i\xrightarrow[n\to \infty]{P,\; a.s.}\mu
$$

where the convergence is in probability (as denoted by *P* on the convergence arrow) and almost surely (as denoted by *a.s.* on the arrow) for the weak and strong laws respectively.

When n is large enough, the sample average will converge to the expectation of variables.

## Central Limit Theorem (CLT)

$$
\sqrt n \frac {\bar X_n-\mu}{\sigma}\xrightarrow [n\to \infty]{(d)}\mathcal{N}(0,1) \\
\quad \\
or \ equivalently,\quad\sqrt n (\bar X_n-\mu)\xrightarrow [n\to \infty]{(d)}\mathcal{N}(0,\sigma^2)
$$

where the convergence is in distribution, as denoted by *(d)* on top of the convergence arrow.

Rule of thumb: n $\geq$ 30, to use CTL. 

When n is large enough, the sample average minus the expectation converge to a Gaussian distribution.  


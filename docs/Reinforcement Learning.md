The traditional Q-learning model is weak since it requires access to the Q-table. Instead, we can use a Neural Network to approximate the Q-table. This is called Deep Q-Learning. The network takes in the state as input and outputs the Q-values for each action. The NN estimates the possible actions from the state provided.

A relatively newer algorithm is Asynchronous Advantage Actor Critic (A3C). 
* This algorithm is an extension of the Actor-Critic algorithm. 
* The Actor-Critic algorithm is an extension of the Policy Gradient algorithm. 
* The Policy Gradient algorithm is an extension of the REINFORCE algorithm. 
* The REINFORCE algorithm is an extension of the Monte Carlo algorithm. 
* The Monte Carlo algorithm is an extension of the Dynamic Programming algorithm. 
* The Dynamic Programming algorithm is an extension of the Bellman Equation. 
* According to the Bellman Equation, long-term reward in a given action is equal to the reward from the current action combined with the expected reward from the future actions taken at the following time.

The Bellman Equation is given by:

$$

V(s) = max_a \sum_{s',r} p(s',r|s,a)[r + \gamma V(s')]
\newline 
\begin{align*}
& \textnormal{where, } \\
& \textnormal{$s$ is the current state,} \\
& \textnormal{$V(s)$ is the value of the state $s$,} \\
& \textnormal{$s'$ is the next state,} \\
& \textnormal{$r$ is the reward,} \\
& \textnormal{$a$ is the action,} \\
& \textnormal{$\gamma$ is the discount factor,} \\
& \textnormal{p(s',r|s,a) is the probability of transition, and,}\\
& \textnormal{$max_a$ is the maximum value of the sum of the reward and the discounted value of the next state.} \\
\end{align*}

$$

Links:
- [Good cheatsheet on Bellman Equation](https://github.com/udacity/deep-reinforcement-learning/blob/master/cheatsheet/cheatsheet.pdf)

:::tip
Any goal can be formalized as the outcome of maximizing a cumulative reward.
:::

:::caution
There's no supervision or supervised learning in RL, reward and values define the state and actions to take.
:::

* A mapping from states to actions is called a policy.

* Markov Decision Process (MDP) is a mathematical framework for modeling decision making in situations where outcomes are partly random and partly under the control of a decision maker. The probability of the next state depends only on the current state and the action taken and not on the sequence of events that preceded it. This was also taught in the Modelling and Simulation course.

* Policies are stochastic, meaning that they assign probabilities to each action.

* Value function has a discount factor, which is a number between 0 and 1. It is used to discount future rewards. The discount factor is used to balance the importance of immediate rewards and future rewards. A discount future of 0 means that only immediate rewards are considered. A discount factor of 1 means that all future rewards are considered equally. This led to the Bellman equation.

* The value function contains the model that will predict the next action.

## Multi Armed Bandit

* Multi-Armed Bandit (MAB) is a problem in which a fixed limited set of resources must be allocated between competing (alternative) choices in a way that maximizes their expected gain, when each choice's properties are only partially known at the time of allocation, and may become better understood as time passes or by allocating resources to it. We wish to minimize cumulative regret and maximize cumulative reward.

* The exploration-exploitation dilemma is the problem of balancing between exploiting what is already known and exploring what is not known. This is a problem in multi-armed bandits.


### Greedy Policy

* Greedy policy is a policy that always takes the action with the highest expected reward. It is a greedy algorithm. It is the simplest policy to implement. It is also the most naive policy. It is not always the best policy. Greedy is suboptimal because it does not consider future rewards and exploits only one action.

### Epsilon Greedy Policy

* Epsilon-greedy policy is a policy that takes a random action with probability epsilon and takes the greedy action with probability 1-epsilon. 

* Policy gradient methods are a class of reinforcement learning algorithms that can directly optimize the policy function used by the agent to select actions. They are an alternative to value-based methods such as Q-learning, which optimize a value function that estimates future rewards. Policy gradient methods are based on the idea that the policy should be updated in a direction that increases the expected total reward. 

* Soft max is a function that takes a vector of K real numbers, and normalizes it into a probability distribution consisting of K probabilities proportional to the exponentials of the input numbers. It is used in the softmax policy.

### UCB Algorithm

* UCB algorithm gives a confidence bound for each action value. The bound gets stronger as the number of times the action is selected increases. It stops selecting actions that don't have have a good value.

* Hoeffding's inequality is an inequality in probability theory that relates the probability of the difference between the expected value of a random variable and its observed value to the variance of the random variable. It is used in the UCB algorithm.

* Derivation of the UCB algorithm is [here](https://www.youtube.com/watch?v=aQJP3Z2Ho8U&list=PLqYmG7hTraZDVH599EItlEWsUOsJbAodm&index=2)

### Bayesian UCB (BUCB)

* Bayesian bandits keep track of the model's distribution, by modelling the reward distribution as a beta distribution.

* Bayesian UCB is a variant of the UCB algorithm that uses a beta distribution to model the reward distribution.

$$
q\left( i,t \right) = Q\left\{ 1 - \frac{1}{t}; Beta \left[ X_{i, j}\left( t \right) + 1, T_{i, j}\left( t \right) -X_{i, j}\left( t \right) + 1  \right] \right\}
$$

$$
Action_t = \operatorname*{argmax}_i q\left( i,t \right)
$$


### Thompson Sampling

## Use of Neural Networks in RL

* When the state space is big, we can use a function approximator to approximate the value function. This is called function approximation. This allows us to use a neural network to approximate the value function. This is called a neural network approximator. A game of Go has $10^{170}$ possible states. A moving helicopter has continuous state space hence we need to use a function approximater.

* RL experience is not i.i.d. because the next state depends on the current state and the action taken. 

* The agent policy affects the data it receives. This is due to the active nature of RL.

## SOTA keywords
- Dueling Deep Q Networks (DDQN)
- Double Deep Q Networks (DDQN)
- Deep Q Networks (DQN)
- Policy Gradient (PG)
- Actor Critic (AC)
- Advantage Actor Critic (A2C)
- Asynchronous Advantage Actor Critic (A3C)
- Proximal Policy Optimization (PPO)
- Trust Region Policy Optimization (TRPO)

:::tip 
Atari Enduro requires a Dueling Deep Q Networks (DDQN) since the next state is undeterministic.
:::

The traditional Q-learning model is weak since it requires access to the Q-table. Instead, we can use a Neural Network to approximate the Q-table. This is called Deep Q-Learning. The network takes in the state as input and outputs the Q-values for each action. The NN estimates the possible actions from the state provided.

## History

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

## Applications

Intelligent Traffic Control Systems is an application of Reinforcement Learning. The goal is to maximize the throughput of the traffic system. [SUMO](https://www.eclipse.org/sumo/) is a popular simulator for ITCS.


Cognitive radio networks is another application of Reinforcement Learning. The goal is to maximize the throughput of the network while minimizing the interference.


## References
- [Good cheatsheet on Bellman Equation](https://github.com/udacity/deep-reinforcement-learning/blob/master/cheatsheet/cheatsheet.pdf)
- [Lecture Notes on MDP and Bayesian Bandits](https://web.stanford.edu/class/cs234/CS234Win2019/slides/lecture12_postclass.pdf)
- [Lecture Notes on Bayesian and Frequentist Methods in Bandit Models](https://emiliekaufmann.github.io/BIP241013.pdf)

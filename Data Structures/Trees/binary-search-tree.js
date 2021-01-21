/*
O(log N) basically means time goes up linearly 
while the n goes up exponentially. 
So if it takes 1 second to compute 10 elements, 
it will take 2 seconds to compute 100 elements, 
3 seconds to compute 1000 elements, and so on.
​It is O(log n) when we do divide and conquer type 
of algorithms e.g binary search.

See: https://visualgo.net/bn/bst

Level 0: 2^0 = 1
Level 1: 2^1 = 2
Level 2: 2^2 = 4
Level 3: 2^3 = 8

# of nodes = 2^h - 1 
Note: h = height

For balancing see:
AVL: https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
Red Black Trees: https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
*/

